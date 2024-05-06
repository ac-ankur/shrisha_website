import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Virtual from "./components/virtual";
import About from "./components/about";
import Learning from "./components/learning";
import Contact from "./components/contact";
import Audio from "./components/smartclassroom";
import Virtualclassroom from "./components/virtualclassroom";
import Hybrid from "./components/hybridclassroom";
import Conference from "./components/conferenceroom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NavigationBar from "./components/navbar";
import Footer from "./components/footer";
import HeroSlider from "./components/heroslider";


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
        <Route path="/smartclassroom" element={<Audio />} />
        <Route path="/virtualclassroom" element={<Virtualclassroom />} />
        <Route path="/conferenceroom" element={<Conference />} />
        <Route path="/hybridclassroom" element={<Hybrid />} />
        <Route path="/heroslider" element={<HeroSlider />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;