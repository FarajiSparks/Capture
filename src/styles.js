import styled from "styled-components";
import {motion} from 'framer-motion';

//Style components
export const About = styled(motion.div)`
min-height:90vh; 
display:flex; 
align-items:cover;
justify-content:space-between;
padding:3rem 5rem; 
color:white;
@media (max-width:1300px){
     display:block; 
     padding: 2rem 2rem; 
     text-align:center;  
    }
`;

export const Description = styled.div`
flex:1; 
padding-right:5rem;
font-size:2vh;
h2{
    font-weight:lighter;
}
@media (max-width:1300px){
     padding:0;
     button{
        margin:2rem 0rem 5rem 0rem;
     }   
    }
`;

export const Image = styled.div`
flex:1;
overflow:hidden;

img{
    padding-top:4vh;
    width:100%;
    height:80vh;
    object-fit:cover;
}
`;

export const Hide =styled.div`
overflow:hidden;
`;




