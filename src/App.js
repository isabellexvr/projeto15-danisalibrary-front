import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import WelcomePage from "./components/pages/WelcomePage";
import ThemeProvider from "./contexts/Theme";
import SignInPage from "./components/pages/SignInPage";
import UserInfoProvider from "./contexts/UserInfo";
import CartPage from "./components/pages/CartPage";
import SignUpPage from "./components/pages/SignUpPage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarProvider from "./contexts/SidebarContext";
import UserPage from "./components/pages/UserPage";
import CategoryPage from "./components/pages/CategoryPage";
import AuthProvider from "./contexts/Cart";


function App() {
  return (
    <UserInfoProvider>
      <ThemeProvider>
        <SidebarProvider>
          <AuthProvider>
            <BrowserRouter>
              <ResetCss />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/market" element={<ProductsPage />} />
                <Route path="/market/:category" element={<CategoryPage />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </SidebarProvider>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default App;