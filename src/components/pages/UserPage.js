import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { useUserInfo } from "../../contexts/UserInfo";
import axios from "axios";

export default function UserPage() {

    const [nameRegistration, setNameRegistration] = useState("");
    const [photografy, setPhotografy] = useState("");
    const [enableName, setEnableName] = useState(true);
    const [enablePhoto, setEnablePhoto] = useState(true);
    const [enable, setEnable] = useState(true);
    
    const { userInfo } = useUserInfo();
    const navigate = useNavigate();

    function habilitae(param) {

        setEnable(false);

        if (param === "photo"){
            setEnablePhoto(false);
        } else {
            setEnableName(false);
        }
    }

    function chanceData(e) {
        e.preventDefault();
        
        setEnableName(true);
        setEnablePhoto(true);
        setEnable(true);

        const {token} = userInfo

        const URL = "https://danisalibrary.onrender.com/change-data";

        const body = {
            name: nameRegistration,
            imageURL: photografy
        }


        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.put(URL, body, config);

        promise.then((res) => {
            alert("Dados alterados");
            navigate("/market");
        })

        promise.catch((erro) => {
            alert(erro.response.data);
            setEnable(false);
        })
    }

    return (
        <PageStyle>
            <Header />
            <Sidebar />
            {userInfo.token
            ?
            <Inputs>
                <h2>Altere ou insira seus dados</h2>
                <form onSubmit={chanceData}>
                    <Teste>
                        <Input>
                            <input
                                type="text"
                                placeholder="Nome"
                                onChange={(e) => setNameRegistration(e.target.value)}
                                value={nameRegistration}
                                disabled={enableName}
                            />
                        </Input>
                        <FaPencilAlt onClick={() => habilitae("name")} />
                    </Teste>
                    <Teste>
                    <Input>
                        <input
                            type="text"
                            placeholder="Foto"
                            onChange={(e) => setPhotografy(e.target.value)}
                            value={photografy}
                            disabled={enablePhoto}
                        />
                    </Input>
                    <FaPencilAlt onClick={() => habilitae("photo")} />
                    </Teste>
                    <Button color={colors.purple}>
                        <button
                            type="submit"
                            disabled={enable}>
                            <h1>Alterar dados</h1>
                        </button>
                    </Button>
                </form>
            </Inputs>
            :
            <StyledLink to="/sign-in">
                <h1>Ainda não está logado? Clique aqui!</h1>
            </StyledLink>
         }
    
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
    width: 90%;
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
  font-size: 30px;
  color:  #7847a1;
  text-decoration: none;
  margin-top: 20px;
`;

const Teste = styled.div`
  display: flex;
  svg{
    margin-top: 20px;
    color: #7847a1;
    font-size: 20px;
  }

`;

