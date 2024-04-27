import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Virtual from "./components/virtual";
import About from "./components/about";
import Learning from "./components/learning";
import Contact from "./components/contact";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
        <NavigationBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="" element={<Home />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;