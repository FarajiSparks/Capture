import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
}

button{
    font-weight:bold;
    font-family: "Inter", sans-serif;
    font-size:1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background:transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color:white;
    }  
}
h2{
    font-weight: lighter;
    font-size:4rem;
    }

h3{
   color:white;
    }

h4{
   font-weight:bold; 
   font-size:2rem;       
    }

span{
    font-weight:bold;
    color:#23d997;
    }

a{
    font-size:1.1rem;
    }

p{
    padding:0.5rem 0rem;
    color: #ccc; 
    font-size:1rem;
    line-height:150%;
    width:70%;
    }

.model{
    width:100%;
    height:100dvh;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#000000;
    transition:opacity .4s ease, visibility .4s ease .5s ease-in-out;
    visibility: hidden; 
    opacity:0;
    transform:scale(0);
    overflow:hidden;
    z-index:3;
    }
.model.open{
    visibility:visible;
    opacity:1;
    transform:scale(1);
}

.model.open svg{
    position:fixed;
    top:10px;
    right:10px;
    width:2rem;
    height:2rem;
    padding:5px;
    background-color:rgba(0,0,0,0.4);
    color:white;
    cursor:pointer;
}

.model img{
    width:auto;
    max-width:100%;
    height:auto;
    max-height:100%;
    display:block;
    line-height:0;
    box-sizing:border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
}
`;

export default GlobalStyle;