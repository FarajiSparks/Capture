import styled from "styled-components";

//Style components
export const About = styled.div`
min-height:90vh; 
display:flex; 
align-items:cover;
justify-content:space-between;
padding:3rem 5rem; 
color:white;
`;

export const Description = styled.div`
flex:1; 
padding-right:5rem;
font-size:2vh;
h2{
    font-weight:lighter;
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




