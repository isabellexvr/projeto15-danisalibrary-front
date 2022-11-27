import axios from "axios";
import styled from "styled-components";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Ayth";


export default function CartPage() {
    const { cart } = useContext(AuthContext);
    console.log("cart", cart);

    return (
        <PageStyle>
            <Header />
            <Item>

            </Item>
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

const Item = styled.div`
width: 50px;
height: 50px;
background-color: red ;
`
