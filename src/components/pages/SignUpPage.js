import styled from "styled-components";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../contexts/Ayth";
import { colors } from "../../colors";
import HomePageBackground from "../constants/HomePageBackground";

export default function SignUpPage() {
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
    if (form.password === form.confirmPassword) {
      delete form.confirmPassword;
      setTimeout(() => {
        console.log(form);
        setLoading(false);
      }, 2000);
           axios
        .post("https://danisalibrary.onrender.com/sign-up", form)
        .then((answer) => {
          alert(answer.data);
          navigate("/sign-in");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response);
          setLoading(false);
        });
    } else {
      alert("As senhas não coindidem.");
      setLoading(false);
    }
  }
  return (
    <HomePageBackground>
      {!loading && (
        <>
          <SignInForm onSubmit={sendForm}>
            <input
              onChange={handleForm}
              placeholder="Nome"
              name="name"
              type="text"
              required
            />
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
            <input
              onChange={handleForm}
              placeholder="Confirme a Senha"
              name="confirmPassword"
              type="password"
              required
            />
            <p>*A foto de perfil é opcional</p>
            <input
              onChange={handleForm}
              placeholder="Foto de Perfil (URL)"
              name="imageURL"
              type="url"
            />
            <SubmitButton color={colors.purple}>Cadastrar-se</SubmitButton>
          </SignInForm>
          <StyledLink to="/sign-in">
            Já é cliente? Clique aqui e entre!
          </StyledLink>
        </>
      )}
      {loading && (
        <>
          <SignInForm disabled>
            <input placeholder="Nome" disabled />
            <input placeholder="E-mail" disabled />
            <input placeholder="Foto de Perfil (URL)" disabled />
            <input placeholder="Senha" disabled />
            <input placeholder="Confirme a Senha" disabled />
            <SubmitButton disabled color={colors.lightPurple}>
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
  position: relative;
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
  > p {
    text-align: left;
    position: absolute;
    bottom: 76px;
    font-size: 12px;
    color: red;
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
  margin-bottom: 17px;
  margin-top: 14px;
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
