import styled from "styled-components";
import ThemeContainer from "../constants/ThemeContainer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePageBackground from "../constants/HomePageBackground";
import { colors } from "../../colors";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <ThemeContainer>
      <HomePageBackground>
        <EnterButton
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Tornar-se Cliente
        </EnterButton>
        <EnterWithoutAccount to="/market">
          Não quero ser cliente por agora
        </EnterWithoutAccount>
      </HomePageBackground>
    </ThemeContainer>
  );
}

const EnterButton = styled.button`
  background-color: ${colors.purple};
  width: 70%;
  height: 43px;
  border-radius: 5px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  border: none;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;

const EnterWithoutAccount = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: white;
  text-decoration: none;
`;
