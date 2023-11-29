import "./App.css";
import Add from "./components/Add";
import DateCounter from "./components/DateCounter";
import { List } from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, EditUsersScreen } from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
