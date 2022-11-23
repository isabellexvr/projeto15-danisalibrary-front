import styled from "styled-components";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../contexts/Token";
import { colors } from "../../colors";
import HomePageBackground from "../constants/HomePageBackground";

export default function SignInPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const { setToken } = useToken();

  const isLogged = localStorage.getItem("data");
  if (isLogged) {
    const data = JSON.parse(isLogged);
    setToken(data.token);
    navigate("/main");
    return;
  }

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/sign-in", form)
      .then((answer) => {
        navigate("/market");
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
      });
  }
  return (
    <HomePageBackground>
      {!loading && (
        <>
          <SignInForm onSubmit={sendForm}>
            <input
              onChange={handleForm}
              placeholder="E-mail"
              name="email"
              type="email"
              required
            />
            <input
              onChange={handleForm}
              placeholder="Senha"
              name="password"
              type="password"
              required
            />
            <SubmitButton color={colors.purple}>Entrar</SubmitButton>
          </SignInForm>
          <StyledLink to="/sign-up">
            Ainda não é cliente? Cadastre-se!
          </StyledLink>
        </>
      )}
      {loading && (
        <>
          <SignInForm disabled>
            <input placeholder="E-mail" disabled />
            <input disabled placeholder="Senha" />
            <SubmitButton disabled color={"#AB78CD"}>
              <PropagateLoader color="white" size={8} />
            </SubmitButton>
          </SignInForm>
          <StyledLink to="sign-up" disabled>
            Primeira vez? Cadastre-se!
          </StyledLink>
        </>
      )}
    </HomePageBackground>
  );
}

const SignInForm = styled.form`
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
    ::placeholder {
      color: ${colors.lightPurple};
    }
    :disabled {
      background-color: #f4e5ff;
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

const StyledLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: white;
  text-decoration: none;
`;
