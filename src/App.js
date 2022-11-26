import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import WelcomePage from "./components/pages/WelcomePage";
import ThemeProvider from "./contexts/Theme";
import SignInPage from "./components/pages/SignInPage";
import TokenProvider from "./contexts/Token";
import SignUpPage from "./components/pages/SignUpPage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarProvider from "./contexts/SidebarContext";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <TokenProvider>
      <ThemeProvider>
        <SidebarProvider>
          <BrowserRouter>
            <ResetCss />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/market" element={<ProductsPage />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </TokenProvider>
  );
}

export default App;

//criar página de usuário (na página do admin é possível postar produtos)
//criar página do carrinho e de confirmação de compra
//criar balão de atendimento ao cliente (whatsapp)
//
