import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { useTheme, themes } from "../../contexts/Theme";

export default function Sidebar() {

  const { setTheme, theme } = useTheme();

  return (
    <>
      {sidebar && (
        <>
          <OutSideBar  />
          <SideBarContent>
            <SwitchThemes color={theme.name === "default" ? "white" : "grey"}>
              <h1>DarkMode</h1>
              <input
                onClick={() => {
                  setTheme(theme.name === "default" ? themes[1] : themes[0]);
                  console.log("oi");
                }}
                type="checkbox"
              ></input>
              <label htmlFor="darkmode-toggle">
                <div className="ball"></div>
              </label>
            </SwitchThemes>
            <UserInfo></UserInfo>
            <div className="sidebar-content">
              <div className="devs">
                <h1>Conheça as desenvolvedoras desse projeto:</h1>
                <div className="devs-links">
                  <div className="dev">
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href="https://github.com/isabellexvr"
                    >
                      <BsGithub />
                    </a>
                    <h2>isabellexvr</h2>
                  </div>
                  <div className="dev">
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href="https://github.com/isabellexvr"
                    >
                      <BsGithub />
                    </a>
                    <h2>daniele</h2>
                  </div>
                </div>
              </div>
            </div>
          </SideBarContent>
        </>
      )}
    </>
  );
}

const SwitchThemes = styled.div`
  margin-top: 15px;
  margin-right: 190px;
  position: relative;
  > h1 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.color};
  }
  > label {
    z-index: 0;
    position: absolute;
    top: 23px;
    right: 16px;
    cursor: pointer;
    width: 30px;
    height: 10px;
    background-color: #604d79;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    transform: scale(1.5);
    .ball {
      cursor: pointer;
      width: 14px;
      height: 14px;
      background-color: white;
      top: 3px;
      left: 3px;
      border-radius: 50%;
      transition: transform 0.2s linear;
    }
  }
  > input {
    z-index: 1;
    width: 60px;
    height: 20px;
    position: absolute;
    top: 19px;
    right: 2px;
    cursor: pointer;
    opacity: 0;
    :hover {
      animation: none;
      transform: none;
    }
  }
  > input:checked + label .ball {
    transform: translateX(17px);
    background-color: grey;
  }
`;

const SideBarContent = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #b9a8cf;
  position: absolute;
  z-index: 1;
  display: flex;
  opacity: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  > .sidebar-content {
    background-color: #604d79;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    width: 90%;
    text-align: center;
    color: #b9a8cf;
    .devs-links {
      margin-top: 11px;
      display: flex;
      justify-content: space-around;
      svg {
        color: white;
        font-size: 24px;
      }
      .dev {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const OutSideBar = styled.div`
  width: 20%;
  height: 100vh;
  background-color: black;
  position: absolute;
  right: 0;
  opacity: 0.75;
`;

const ClosedSideBar = styled.div`
  width: 13%;
  height: 100vh;
  background-color: #b9a8cf;
  position: fixed;
  display: flex;
  justify-content: center;
  > svg {
    font-size: 35px;
    color: #1a1d42;
    margin-top: 10px;
  }
`;

const UserInfo = styled.div`
  background-color: #846aa6;
  width: 90%;
  height: 30vw;
  border-radius: 5px;
`;

/* precisa de 
<Sidebar setSidebar={setSidebar} sidebar={sidebar}/>
  const [sidebar, setSidebar] = useState(false);
  import Sidebar from "../constants/Sidebar"; */