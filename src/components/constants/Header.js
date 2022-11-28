import styled from "styled-components";
import { colors } from "../../colors";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useSidebar } from "../../contexts/SidebarContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Cart";

export default function Header() {
  const { setSideBar } = useSidebar();
  const { counter } = useContext(AuthContext);

  const navigate = useNavigate();

  function whats() {
    let text = "Olá, DanIsa Library!";
    let url = `https://wa.me/5548998215536?text=${text}`;

    window.open(url);
  }

  return (
    <HeaderStyle>
      <Top>
        <GiHamburgerMenu onClick={() => setSideBar(true)} />
        <TitleContainer onClick={() => navigate("/market")}>
          <h1>LIBRARY</h1>
          <h2>
            DAN<strong>I</strong>SA
          </h2>
          <h3>THE BEST WAY TO BOOK</h3>
        </TitleContainer>
        <div>
          <FaUserAlt
            onClick={() => {
              navigate("/user");
            }}
          />
          <FaShoppingCart
            onClick={() => {
              navigate("/cart");
            }}
          />
          <Contador>
            <h1>{counter}</h1>
          </Contador>
        </div>
      </Top>
      <HorizontalLine />
      <Search>
        <input placeholder="O que você procura?" />
      </Search>{" "}
      <WhatsappIcon onClick={whats} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 17vh;
  background-color: ${colors.pastelLightPurple};
  svg {
    cursor: pointer;
  }
`;

const Contador = styled.div`
position: relative;
  h1 {
    position: absolute;
    bottom: -7px;
    left: -5px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: ${colors.purple};
  }
`;

const Top = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11vh;
  width: 100%;
  > svg {
    font-size: 25px;
    color: white;
  }
  > svg:first-child {
    width: 19%;
  }
  > div {
    > svg {
      font-size: 25px;
      color: white;
    }
  }
  > div:last-child {
    width: 16%;
    display: flex;
    justify-content: space-between;
  }
`;

const HorizontalLine = styled.div`
  margin: 0 auto;
  height: 0.3px;
  width: 93%;
  background-color: ${colors.purple};
`;

const Search = styled.div`
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
    width: 80%;
    color: ${colors.purple};
    text-align: center;
    ::placeholder {
      text-align: center;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      color: ${colors.pastelLightPurple};
    }
  }
  input:focus {
    box-sizing: border-box;
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px ${colors.lightPurple};
  }
`;

const TitleContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  width: 50%;
  cursor: pointer;
  > h1 {
    font-size: 18px;
    font-weight: 800;
    color: #1a1d42;
  }
  > h2 {
    font-size: 30px;
    font-weight: 900;
    color: #7847a1;
    > strong {
      color: white;
    }
  }
  > h3 {
    margin-top: 2px;
    font-size: 8px;
    color: #7847a1;
    font-weight: 400;
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: green;
  font-size: 50px;
`