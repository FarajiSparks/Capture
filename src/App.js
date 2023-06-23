import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

//Pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//Router
import {Route, Routes, useLocation} from 'react-router-dom';

//Animation
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path ="/" element={<AboutUs/>}/>
          <Route path ="/work" element={<OurWork/>}/>
          <Route path ="/contact" element={<ContactUs/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
