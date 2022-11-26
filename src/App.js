import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import WelcomePage from "./components/pages/WelcomePage";
import ThemeProvider from "./contexts/Theme";
import SignInPage from "./components/pages/SignInPage";
import UserInfoProvider from "./contexts/UserInfo";
import SignUpPage from "./components/pages/SignUpPage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarProvider from "./contexts/SidebarContext";
import UserPage from "./components/pages/UserPage";
import CategoryPage from "./components/pages/CategoryPage";

function App() {
  return (
    <UserInfoProvider>
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
              <Route path="/market/:category" element={<CategoryPage />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default App;

//criar página de usuário (na página do admin é possível postar produtos)
//criar página do carrinho e de confirmação de compra
//criar balão de atendimento ao cliente (whatsapp)
//
