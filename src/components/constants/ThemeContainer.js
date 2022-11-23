import { useTheme } from "../../contexts/Theme";
import styled from "styled-components";

export default function ThemeContainer({children}){

    const {theme} = useTheme()

    return (
        <BackgroundTheme background={theme}>
            {children}
        </BackgroundTheme>

    )
}

const BackgroundTheme = styled.div`
    background-color: ${props => props.background};
    height: 100vh;
    width: 100%;
`;