import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
