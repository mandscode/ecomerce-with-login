import { Route, Routes } from "react-router-dom";
import BlogNav from "./component/BlogNav";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Index from "./pages/Index";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Header/>
      <BlogNav/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
