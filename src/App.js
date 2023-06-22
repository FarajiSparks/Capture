import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

//Pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//Router
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <Routes>
        <Route path ="/" element={<AboutUs/>}/>
        <Route path ="/work" element={<OurWork/>}/>
        <Route path ="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
