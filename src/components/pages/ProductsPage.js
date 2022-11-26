import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useEffect, useState } from "react";
import { colors } from "../../colors";
import axios from "axios";

const books = [
  {
    title: "Percy Jackson & Os Olimpianos: O Ladrão de Raios",
    imageURL: "https://m.media-amazon.com/images/I/71p0560f0NL.jpg",
    price: "R$29,99",
  },
  {
    title: "Percy Jackson & Os Olimpianos: O Mar de Monstros",
    imageURL: "https://m.media-amazon.com/images/I/91c3vlY3PvL.jpg",
    price: "R$29,99",
  },
  {
    title: "Percy Jackson & Os Olimpianos: A maldição do Titã",
    imageURL: "https://m.media-amazon.com/images/I/71ps3x0cJ9L.jpg",
    price: "R$29,99",
  },
  {
    title: "Percy Jackson & Os Olimpianos: A Batalha do Labirinto",
    imageURL: "https://m.media-amazon.com/images/I/71ne5kmq0PL.jpg",
    price: "R$29,99",
  },
  {
    title: "Percy Jackson & Os Olimpianos: O Último Olimpiano",
    imageURL: "https://m.media-amazon.com/images/I/61OyI3yri1L.jpg",
    price: "R$29,99",
  },
];

export default function ProductsPage() {

  useEffect((()=>{
    axios.get("http://localhost:5000/get-products")
    .then((answer)=> console.log(answer.data))
    .catch(err => console.log(err))
  }),[])
  return (
    <PageStyle>
      <Header />
      <Sidebar />
      <Highlights>
        <div>
          <h1>Destaques</h1>
          <HighlightProducts>
            {books.map((book) => (
              <Product>
                <Info>
                  <Front src={book.imageURL} />
                  <h1>{book.title}</h1>
                  <h2>{book.price}</h2>
                </Info>
                <button>Comprar</button>
              </Product>
            ))}
          </HighlightProducts>
        </div>
      </Highlights>
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
  >button{
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
