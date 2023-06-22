import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OurWork = () => {

  const navigate = useNavigate();
  const puertoSecoNav = () =>{
    navigate("/puertoSeco")
  }
  const natureNav = () =>{
    navigate("/nature")
  }
  const miscNav = () =>{
    navigate("/misc")
  }
  return (
    <Work>
      <Photo>
        <h2>Pueuto Seco</h2>
        <div className="line"></div>
        <img  onClick={puertoSecoNav} src="https://i.ibb.co/ry8kybW/Puerto-Seco-69.jpg" alt="girl in floatie" />
      </Photo>
      <Photo>
        <h2>Nature</h2>
        <div className="line"></div>
        <img  onClick={natureNav} src="https://i.ibb.co/w6pjvGj/DSC-0422.jpg" alt="river and bridge" />
      </Photo>
      <Photo>
        <h2>Miscellaneous</h2>
        <div className="line"></div>
        <img  onClick={miscNav} src="https://i.ibb.co/cT9Wp7w/DSC-0804.jpg" alt="person" />
      </Photo>
      {}
    </Work>
  )
}

const Work = styled.div`
  min-height:100vh;
  overflow:hidden; 
  padding:5rem 10rem;
  background:white;
  h2{
    padding: 1rem 0rem;
  }

`
const Photo = styled.div`
  padding-bottom:10rem;
  .line{
    height:0.5rem;
    background:#cccccc;
  }
  img{
    width:100%;
    height:70vh;
    object-fit:cover;
  }
`
export default OurWork