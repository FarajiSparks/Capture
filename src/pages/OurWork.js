import React from 'react';
import { useState, useEffect } from 'react';
import data from '../components/data';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const OurWork = () => {

  const[tempImgSrc, setTempImgScr] = useState('');
  const[openModal, setOpenModal] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [animationState, setAnimationState] = useState('hidden');

  const handleImageLoad = () => {
    setImagesLoaded((prevImagesLoaded) => prevImagesLoaded + 1);
  }

  useEffect(() => {
    if (imagesLoaded === data.length) {
      setAnimationState('show');
    }
  }, [imagesLoaded]);


  const getImg = (img)=>{
    setTempImgScr(img);
    setOpenModal(true);
  }

  const picAnim = {
    hidden: {opacity:0}, 
    show: {opacity:1, transition:{duration:0.5}}
  }
  return (
 <>

    <div className={openModal? "model open" : "model"}>
      <img src={tempImgSrc} alt="open viewed img" />
      <CloseIcon onClick={()=>setOpenModal(false)}/>
    </div>
  
    <GalleryWrap exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        {data.map((item) =>{
          return (
            <Pics key={item.id}>
              <motion.img 
                variants={picAnim} 
                initial="hidden" 
                animate={animationState} 
                classname="single" 
                key={item.id} 
                src={item.img} 
                alt={item.id} 
                onClick={()=>getImg(item.img)} 
                onLoad={handleImageLoad}/>
            </Pics>
          )
        })}
      </GalleryWrap>
  </>
  )
}

const GalleryWrap = styled(motion.div)`
  display:flex; 
  flex-wrap:wrap;
  gap:10px;
  align-items:center;
  justify-content:center;
  max-width:100%;
  margin:0;
  -webkit-column-count:3;
  -moz-column-count:3;
  column-count:3;
  -webkit-column-width:33%;
  -moz-column-width:33%;
  column-width:33%;
  padding: 0 12px;
  

  @media screen and (max-width: 1023px){
    -webkit-column-count:2;
    -moz-column-count:2;
    column-count:2;
  }
  @media screen and (max-width: 480px){
  gap:0;
  object-fit:cover;
  -webkit-column-count:1;
  -moz-column-count:1;
  column-count:1;
  -webkit-column-width:100%;
  -moz-column-width:100%;
  column-width:100%;
  }

`
const Pics = styled.div`
  
  margin-bottom:12px;

   img{
    cursor:pointer;
    max-width:100%;
    min-height:50vh;
    max-height:50vh;
    :hover{
      transform:scale(1.02);
      filter:opacity(.8);
      }
      @media screen and (max-width: 480px){
        min-width:100vw;
        object-fit:cover;
      }
  }
`


export default OurWork