import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { colors } from "../../colors";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductPage() {
  const { bookId } = useParams();
  const [product, setProduct] = useState({});
  console.log(bookId);

  useEffect(() => {
    axios
      .get(`https://danisalibrary.onrender.com/get-product-by-id/${bookId}`)
      .then((answer) => {
        setProduct(answer.data);
        console.log(answer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bookId]);
  return (
    <PageStyle>
      <Header />
      <Sidebar />

      <Title>{product.title}</Title>
      <Info>
        <img alt="book-cover" src={product.imageURL} />
        <Buy>
          <h1>R$ {product.price.$numberDecimal}</h1>
          <button>
            Adicionar ao Carrinho
            <FaShoppingCart />
          </button>
        </Buy>

        <p>
          <strong>Descrição:</strong>
          <br />
          {product.description}
        </p>
      </Info>
    </PageStyle>
  );
}

const PageStyle = styled.div`
  margin-top: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  margin-top: 15px;
  width: 90%;
  margin-bottom: 15px;
  font-size: 22px;
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
    width: 250px;
  }
  > p {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: justify;
    font-size: 14px;
    line-height: 15px;
    > strong {
      font-weight: 800;
      font-size: 16px;
    }
  }
`;

const Buy = styled.div`
  display: flex;
  width: 74%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
  > h1 {
    color: green;
    margin-top: 15px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: 900;
  }

  > button {
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${colors.lightPurple};
    width: 55%;
    height: 40px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      font-size: 50px;
      color: ${colors.purple};
    }
  }
`;
