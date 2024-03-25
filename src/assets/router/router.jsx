import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Projects from "../pages/Projects/project";
import Contacts from "../pages/Contacts/contact";

//my components
import Navbar from "../components/Nav/navbar";
import Theme from "../components/theme/theme";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Theme></Theme>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
