import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import ScrollToTopOnMount from "./ui/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTopOnMount />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/products" />} />
            <Route path="/products" element={<Home />} />
            <Route path="/products/:id" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-white)",
            color: "var(--color-darkblue)",
          },
        }}
      />
    </>
  );
}
export default App;
