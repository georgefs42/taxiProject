import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer";




function App() {  
  return (
    <>
    <Navbar/>
    
    <div className="mt-5 pt-4"> 
        <Container className="pb-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />           
          </Routes>
        </Container>
      </div>

    <Footer/>
    
    </>
  );
}

export default App;
