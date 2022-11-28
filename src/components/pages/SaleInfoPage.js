import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../colors";
import { PropagateLoader } from "react-spinners";
import { GiPadlock } from "react-icons/gi";
import { AuthContext } from "../../contexts/Cart";
import { useContext } from "react";

export default function SaleInfoPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const { cart } = useContext(AuthContext);

  console.log(cart);

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <>
      {!loading && (
        <PageStyle>
          <PaymentHeader>
            <h1>Página de Pagamento Seguro</h1>
            <GiPadlock />
          </PaymentHeader>
          <PaymentInfo>
            <h1>INFORMAÇÕES DA COMPRA</h1>
            <div>
              <ChosenItemsContainer>
                <h1>Itens a serem Comprados:</h1>
                {cart.map((item) => (
                  <Item>
                    <img alt="book-cover" src={item.imageURL} />
                    <div>
                      <h1>{item.title}</h1>
                      <h2>{item.price.$numberDecimal}</h2>
                    </div>
                  </Item>
                ))}
              </ChosenItemsContainer>

              <TotalPrice>
                <h1>Preço Total:</h1>
                <h2>20</h2>
              </TotalPrice>
            </div>
          </PaymentInfo>
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
          <Title>Preenchimento de Dados</Title>
          <UserInfoForm onSubmit={sendForm}>
            <input onChange={handleForm} placeholder="Nome Completo" disabled />
            <input
              onChange={handleForm}
              placeholder="Telefone de Contato"
              disabled
            />
            <input onChange={handleForm} placeholder="Endereço" disabled />
            <SubmitButton color={colors.darkPurple}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </UserInfoForm>
        </PageStyle>
      )}
    </>
  );
}

const PaymentInfo = styled.div`
  margin-top: 20vh;
  width: 96%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  > h1:first-child {
    width: 40%;
    text-align: right;
    writing-mode: vertical-rl;
    text-orientation: upright;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 900;
    color: ${colors.purple};
    font-size: 20px;
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
  justify-content: center;
  > h1 {
    font-size: 23px;
    font-weight: 900;
    font-family: "Poppins", sans-serif;
  }
  > svg {
    font-size: 25px;
  }
`;

const Title = styled.h1`
  margin-bottom: 25px;
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
>h1{

}
>h2{
    color: green;
}
`;
