import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, Category } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />

          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
