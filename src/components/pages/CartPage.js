import axios from "axios";
import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Cart";
import { colors } from "../../colors";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate()

  const { cart, setCart, counter, setCounter, balance, setBalance } = useContext(AuthContext);
  console.log("cart", cart);

  function removeItemCart(prod) {
    setCounter(counter - 1);
    const deleteBook = cart.filter((book) => book._id !== prod._id)
    setCart(deleteBook);

    let currentValue = balance;
    setBalance(currentValue - Number(prod.price.$numberDecimal));
  }

  return (
    <PageStyle>
      <Header />
      {balance !== 0
        ?
        <>
          <BookAll>
            {cart.map((book) =>
              <Book>
                <Title>{book.title}</Title>
                <Info><img alt="book" src={book.imageURL} /></Info>
                <Buy>
                  <h1>R$ {book.price.$numberDecimal}</h1>
                  <AiFillDelete onClick={() => removeItemCart(book)} />
                </Buy>
              </Book>
            )}
          </BookAll>
          <Prices>
            <h1>Total:</h1>
            <h2>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)}</h2>
          </Prices>
          <ButtonConfirm onClick={()=>navigate("/confirm-purchase")}>
            Confirmar compra
          </ButtonConfirm>
        </>
        :
        <Null>Seu carrinho está vazio</Null>
      }
      <Sidebar />
    </PageStyle>
  )
};

const PageStyle = styled.div`
      margin-top: 17vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Poppins", sans-serif;
    `;

const BookAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Book = styled.div`
    align-items: center;
    width: 300px;   
`

const Title = styled.h1`
  margin-top: 15px;
  width: 90%;
  margin-bottom: 15px;
  font-size: 19px;
  color: ${colors.purple};
  font-weight: 900;
  text-align: center;
`;

const Info = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 190px;
  }
`;

const Buy = styled.div`
  display: flex;
  width: 67%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
  h1 {
    color: green;
    margin-top: 15px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: 900;
  }
  svg {
    margin-top: 10px;
    font-size: 30px;
    color: ${colors.purple};
    }
`;

const Prices = styled.div`
  height: 100px;
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: ${colors.purple};
    font-size: 25px;
    font-weight: 900;
  }
  h2{
    margin-top: 5px;
    margin-left: 5px;
    color: green;
    font-size: 25px;
    font-weight: 900;
  }
`

const ButtonConfirm = styled.button`
  width: 70%;
  height: 46px;
  border-radius: 5px;
  background-color: ${colors.purple};
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  border: none;
  align-items: center;
  font-style: normal;
  font-size: 20px;
`

const Null = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color:  #7847a1;
  text-decoration: none;
  margin-top: 20px;
`