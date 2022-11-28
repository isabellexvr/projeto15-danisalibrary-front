import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../colors";
import { PropagateLoader } from "react-spinners";
import { GiPadlock } from "react-icons/gi";
import { AuthContext } from "../../contexts/Cart";
import { useContext } from "react";
import { useUserInfo } from "../../contexts/UserInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"

export default function SaleInfoPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  const { cart, balance } = useContext(AuthContext);

  console.log(cart);

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();

    setLoading(true);

    const totalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(balance);

    const { token } = userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = { clientInfo: { ...form, totalPrice }, boughtItems: cart };

    axios
      .post("https://danisalibrary.onrender.com/post-sale", body, config)
      .then((answer) => {
        alert(answer.data);
        setLoading(false);
        navigate("/market")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {!loading && (
        <PageStyle>
          <PaymentHeader>
          <BiArrowBack onClick={()=> navigate("/cart")}/>
            <h1>PÁGINA DE PAGAMENTO SEGURO</h1>
            <GiPadlock />

          </PaymentHeader>
          <PaymentInfo>
            <h1>
              INFORMAÇÕES
              <br />
              DA
              <br />
              COMPRA
            </h1>
            <div>
              <ChosenItemsContainer>
                <h1>Itens a serem Comprados:</h1>
                {cart.map((item, index) => (
                  <Item key={index}>
                    <img alt="book-cover" src={item.imageURL} />
                    <div>
                      <h1>{item.title}</h1>
                      <h2>R$ {item.price}</h2>
                    </div>
                  </Item>
                ))}
              </ChosenItemsContainer>

              <TotalPrice>
                <h1>Preço Total:</h1>
                <h2>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(balance)}
                </h2>
              </TotalPrice>
            </div>
          </PaymentInfo>
          <Line>a</Line>
          <Title>Preenchimento de Dados</Title>
          <UserInfoForm onSubmit={sendForm}>
            <input
              onChange={handleForm}
              placeholder="Nome Completo"
              name="name"
              type="text"
              required
            />
            <input
              onChange={handleForm}
              placeholder="Telefone de Contato"
              name="telefone"
              type="tel"
              required
            />
            <input
              onChange={handleForm}
              placeholder="Endereço"
              name="address"
              type="text"
              required
            />
            <SubmitButton color={colors.darkPurple}>
              Confirmar Compra
            </SubmitButton>
          </UserInfoForm>
        </PageStyle>
      )}
      {loading && (
        <PageStyle>
          <PaymentHeader>
            <h1>Página de Pagamento Seguro</h1>
            <GiPadlock />
          </PaymentHeader>
          <PaymentInfo>
            <h1>
              INFORMAÇÕES
              <br />
              DA
              <br />
              COMPRA
            </h1>
            <div>
              <ChosenItemsContainer>
                <h1>Itens a serem Comprados:</h1>
                {cart.map((item) => (
                  <Item>
                    <img alt="book-cover" src={item.imageURL} />
                    <div>
                      <h1>{item.title}</h1>
                      <h2>R$ {item.price}</h2>
                    </div>
                  </Item>
                ))}
              </ChosenItemsContainer>

              <TotalPrice>
                <h1>Preço Total:</h1>
                <h2>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(balance)}
                </h2>
              </TotalPrice>
            </div>
          </PaymentInfo>
          <Title>Preenchimento de Dados</Title>
          <UserInfoForm onSubmit={sendForm}>
            <input placeholder="Nome Completo" disabled />
            <input placeholder="Telefone de Contato" disabled />
            <input placeholder="Endereço" disabled />
            <SubmitButton disabled color={colors.darkPurple}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </UserInfoForm>
        </PageStyle>
      )}
    </>
  );
}

const PaymentInfo = styled.div`
  margin-top: 18vh;
  width: 96%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  > h1:first-child {
    width: 40%;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    color: ${colors.darkPurple};
    font-size: 18px;
    line-height: 28px;
  }
  > div {
    width: 60%;
    text-align: right;
  }
`;

const PaymentHeader = styled.div`
  background-color: ${colors.pastelLightPurple};
  position: fixed;
  top: 0;
  left: 0;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  > h1 {
    font-size: 22px;
    width: 65%;
    text-align: center;
    font-weight: 900;
    font-family: "Poppins", sans-serif;
    line-height: 25px;
    color: ${colors.darkPurple};
  }
  > svg {
    font-size: 30px;
  }
`;

const Title = styled.h1`
  margin-bottom: 25px;
  margin-top: 15px;
  font-size: 25px;
  color: ${colors.purple};
  font-weight: 700;
  text-align: center;
`;

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

const UserInfoForm = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    height: 58px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    background-color: ${colors.pastelLightPurple};
    ::placeholder {
      color: ${colors.darkPurple};
    }
    :disabled {
      background-color: grey;
    }
  }
  input:focus {
    box-sizing: border-box;
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px ${colors.lightPurple};
  }
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 46px;
  border-radius: 5px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  border: none;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  div {
    position: absolute;
    position: relative;
    top: -40px;
    right: 95px;
    svg {
      position: absolute;
      top: 10;
      left: 20;
    }
  }
`;

const ChosenItemsContainer = styled.div`
  > h1:first-child {
    font-size: 20px;
    text-align: center;
    font-weight: 900;
    color: ${colors.purple};
    margin-bottom: 12px;
  }
  justify-content: center;
`;

const Item = styled.div`
  border: 1px solid ${colors.lightPurple};
  margin-top: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 80px;
    margin-left: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
      text-align: center;
      width: 70%;
      font-size: 12px;
    }
    > h2 {
      margin-top: 10px;
      text-align: center;
      color: green;
    }
  }
`;

const TotalPrice = styled.div`
  margin-top: 15px;
  > h1 {
    font-size: 17px;

    font-weight: 900;
    color: ${colors.purple};
  }
  > h2 {
    color: green;
    margin-top: 5px;
    font-weight: 900;
  }
`;

const Line = styled.div`
height: 2px;
background-color: ${colors.darkPurple};
width: 90%;
color: white;
`