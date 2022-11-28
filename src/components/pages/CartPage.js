import axios from "axios";
import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Cart";
import { colors } from "../../colors";
import { AiFillDelete, AiFillSafetyCertificate } from "react-icons/ai";
import { useState } from "react";

export default function CartPage() {

  const { cart, setCart, counter, setCounter, balance } = useContext(AuthContext);
  console.log("cart", cart);

  function removeItemCart(prod) {
    setCounter(counter - 1);
    const deleteBook = cart.filter((book) => book._id !== prod._id)
    setCart(deleteBook);
  }

  return (
    <PageStyle>
      <Header />
      <BookAll>
        {cart.map((book) =>
          <Book>
            <Title>{book.title}</Title>
            <Info><img alt="book" src={book.imageURL} /></Info>
            <Buy>
              <h1>{book.price.$numberDecimal}</h1>
              <AiFillDelete onClick={() => removeItemCart(book)} />
            </Buy>
          </Book>
        )}
      </BookAll>
      <Prices>
        <h1>Valor Final: {balance} </h1>
      </Prices>
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
  width: 300px;
  height: 100px;
  background-color: red;
`