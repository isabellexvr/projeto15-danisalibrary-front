import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { Link } from "react-router-dom";
// import { useToken } from "../../contexts/Token";

export default function UserPage() {

    const [nameRegistration, setNameRegistration] = useState("");
    const [photografy, setPhotografy] = useState("");
    // const [zipCode, setZipCode] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    //    const navigate = useNavigate();

    //    const { setToken } = useToken();

    function chanceData() {

    }

    return (
        <PageStyle>
            <Header />
            <Sidebar />
            <Inputs>
                <h2>Altere ou insira seus dados</h2>
                <form onSubmit={chanceData}>
                    <Input>
                        <input
                            type="text"
                            placeholder="Nome"
                            onChange={(e) => setNameRegistration(e.target.value)}
                            value={nameRegistration}
                            disabled={desabilitar}
                        />
                    </Input>
                    <Input>
                        <input
                            type="text"
                            placeholder="Foto"
                            onChange={(e) => setPhotografy(e.target.value)}
                            value={photografy}
                            disabled={desabilitar}
                        />
                    </Input>
                   {/* <Input>
                        <input
                            type="text"
                            placeholder="Endereço"
                            onChange={(e) => setZipCode(e.target.value)}
                            value={zipCode}
                            disabled={desabilitar}
                        />
                    </Input>  */}
                    <Button color={colors.purple}>
                        <button
                            type="submit"
                            disabled={desabilitar}>
                            <h1>Alterar dados</h1>
                        </button>
                    </Button>
                </form>
            </Inputs>
            <StyledLink to="/sign-up">
                <h1>Ainda não possui cadastro? Clique aqui!</h1>
            </StyledLink>
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

const Inputs = styled.div`
    margin-top: 10vh;
    h2{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color:  #7847a1;
    text-decoration: none;
    margin-bottom: 10px;
    }
`

const Input = styled.div`
display: flex;
align-items: center;
justify-content: center;
input {
    width: 100%;
    height: 58px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: solid;
    border-color:  ${colors.lightPurple};
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
`
const Button = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: none;
  margin-bottom: 17px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
  background-color: #7847a1;
  border: none;
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  }
`

const StyledLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color:  #7847a1;
  text-decoration: none;
`;

