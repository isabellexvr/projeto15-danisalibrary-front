import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import WelcomePage from "./components/pages/WelcomePage";
import ThemeProvider from "./contexts/Theme";
import SignInPage from "./components/pages/SignInPage";
import AuthProvider from "./contexts/Ayth";
import SignUpPage from "./components/pages/SignUpPage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ResetCss />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/market" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
