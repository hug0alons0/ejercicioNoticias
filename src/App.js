import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import ListNews from "./components/ListNews";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

