import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import WelcomePage from "./components/pages/WelcomePage";
import ThemeProvider from "./contexts/Theme";
import SignInPage from "./components/pages/SignInPage";
import TokenProvider from "./contexts/Token";

function App() {
  return (
    <TokenProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ResetCss />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TokenProvider>
  );
}

export default App;
