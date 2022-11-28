import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Cart";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const { setCart, cart, counter, setCounter } = useContext(AuthContext);


  useEffect(() => {
    axios
      .get(`https://danisalibrary.onrender.com/get-products/${category}`)
      .then((answer) => {
        setProducts(answer.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  function addItemCart(prod) {
    setCounter(counter + 1)
    const exist = cart.some((book) => book._id === prod._id)
    if (exist) {
      alert("Este livro já está no seu carrinho :)")
    } else {
      const newBook = [...cart, prod];
      setCart(newBook);
    }
  }

  return (
    <>
      {products.length < 1 && (
        <PageStyle>
          <Header />
          <Sidebar />
          <Title>Infelizmente, ainda não há livros para essa categoria.</Title>
        </PageStyle>
      )}

      {products.length > 0 && (
        <PageStyle>
          <Header />
          <Sidebar />
          <Title>{category.toLocaleUpperCase()}</Title>
          <ProductsContainer>
            {products.map((product, index) => (
              <ProductStyle key={index}>
                <Info onClick={()=>navigate(`/product/${product._id}`)}>
                  <img alt="book-cover" src={product.imageURL} />
                  <h1>{product.title}</h1>
                  <h2>R$ {product.price}</h2>
                </Info>

                <button onClick={() => addItemCart(product)}>Comprar</button>
              </ProductStyle>
            ))}
          </ProductsContainer>
        </PageStyle>
      )}
    </>
  );
}

const Title = styled.h1`
  margin-top: 15px;
  font-size: 25px;
  color: ${colors.purple};
  font-weight: 700;
  text-align: center;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  > img {
    width: 125px;
  }
  > h1 {
    font-size: 13.5px;
    font-weight: 600;
    margin-top: 8px;
    color: ${colors.purple};
    text-align: center;
    width: 135px;
  }
  > h2 {
    margin-top: 6px;
    text-align: center;
    color: green;
    font-size: 17px;
    font-weight: 700;
  }`;

const PageStyle = styled.div`
  margin-top: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;

`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 95%;
  margin-top: 25px;
`;

const ProductStyle = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 15px 2px ${colors.pastelLightPurple};
  padding: 5px;
  padding-top: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
  > button {
    margin-top: 10px;
    margin-bottom: 10px;
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
