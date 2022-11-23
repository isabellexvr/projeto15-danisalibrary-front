import styled from "styled-components";
import { colors } from "../../colors";

export default function HomePageBackground({children}){
    return (
        <PageStyle>
          <TitleContainer>
            <h1>LIBRARY</h1>
            <h2>
              DAN<strong>I</strong>SA
            </h2>
            <h3>THE BEST WAY TO BOOK</h3>
          </TitleContainer>
          {children}
        </PageStyle>
    )
}

const PageStyle = styled.div`
  background-color: ${colors.pastelLightPurple};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 40px;
  > h1 {
    font-size: 40px;
    font-weight: 600;
    color: #1a1d42;
  }
  > h2 {
    font-size: 50px;
    font-weight: 900;
    color: #7847a1;
    > strong {
      color: white;
    }
  }
  > h3 {
    margin-top: 5px;
    font-size: 12px;
    color: #7847a1;
    font-weight: 300;
  }
`;
