import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useEffect } from "react";
import { colors } from "../../colors";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSidebar } from "../../contexts/SidebarContext";

export default function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const { sideBar } = useSidebar();

  const { setCart, cart, counter, setCounter, balance, setBalance } =
    useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://danisalibrary.onrender.com/get-products")
      .then((answer) => {
        setProducts(answer.data);
      })
      .catch((err) => console.log(err));
  }, [products]);

  function addItemCart(prod) {
    const exist = cart.some((book) => book._id === prod._id);

    if (exist) {
      alert("Este livro já está no seu carrinho :)");
    } else {
      setCounter(counter + 1);
      const newBook = [...cart, prod];
      setCart(newBook);

      let currentValue = balance;
      setBalance(currentValue + Number(prod.price));
    }
  }

  const hightLights = products.sort();

  return (
    <PageStyle>
      <Header />
      <Sidebar />
      <Main position={sideBar? "absolute":"initial"}>
        <Highlights>
          <div>
            <Title>Mais Vendidos</Title>
            <HighlightProducts>
              {hightLights.map((book, index) => (
                <Product key={index}>
                  <Info onClick={() => navigate(`/product/${book._id}`)}>
                    <Front src={book.imageURL} />
                    <h1>{book.title}</h1>
                    <h2>R$ {book.price}</h2>
                  </Info>
                  <button onClick={() => addItemCart(book)}>Comprar</button>
                </Product>
              ))}
            </HighlightProducts>
          </div>
        </Highlights>
        <Highlights>
          <div>
            <Title>Recentemente Adicionados</Title>
            <HighlightProducts>
              {products
                .slice(-5)
                .reverse()
                .map((book, index) => (
                  <Product key={index}>
                    <Info onClick={() => navigate(`/product/${book._id}`)}>
                      <Front src={book.imageURL} />
                      <h1>{book.title}</h1>
                      <h2>R$ {book.price}</h2>
                    </Info>
                    <button onClick={() => addItemCart(book)}>Comprar</button>
                  </Product>
                ))}
            </HighlightProducts>
          </div>
        </Highlights>
      </Main>
    </PageStyle>
  );
}

const Main = styled.div`
  margin-top: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  position: ${props => props.position};
left: -200px;

`

const PageStyle = styled.div`

`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 6px;
  font-size: 25px;
  color: ${colors.purple};
  font-weight: 700;
  text-align: left;
`;

const Highlights = styled.div`
  margin-top: 20px;
  width: 90%;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 800;
`;

const HighlightProducts = styled.div`
  display: flex;
  overflow: scroll;
  box-sizing: border-box;
`;

const Product = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  box-shadow: 0px 0px 15px 2px ${colors.pastelLightPurple};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;
  > button {
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${colors.lightPurple};
    width: 80%;
    height: 30px;
    color: white;
    font-weight: 900;
    font-size: 16px;
  }
`;

const Info = styled.div`
  > h1 {
    font-size: 14px;
    font-weight: 600;
    margin-top: 4px;
    color: ${colors.purple};
    text-align: center;
  }
  > h2 {
    margin-top: 12px;
    text-align: center;
    color: green;
    font-size: 17px;
  }
`;

const Front = styled.img`
  width: 125px;
`;
