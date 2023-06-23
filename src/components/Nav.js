import React from "react";
import styled from "styled-components";

//Routing 
import { useNavigate } from "react-router-dom";

const Nav = () =>{

    const navigate = useNavigate();
    const aboutHandler = () =>{
        navigate("/");
    }
    const workHandler = () =>{
        navigate("/work");
    }
    const contactHandler = () =>{
        navigate("/contact");
    }
    return(
        <StyledNav>
            <h1><a id="logo" onClick={aboutHandler}>Facepelt Media</a></h1>
            <ul>
                <li>
                    <a onClick={aboutHandler}>About Me</a>
                </li>
                <li>
                    <a onClick={workHandler}>My Work</a>
                </li>
                <li>
                    <a onClick={contactHandler}>Contact</a>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height:10vh; 
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 10rem;
    background: #282828;
    ul{
        display:flex;
        list-style:none;
    }
    #logo{
        font-size:1.5rem;
        font-family: "Lobster", cursive;
        font-weight:lighter;
    }
    li{
        padding-left:10rem;
        postion:relative;
    }
    a{
        color:white;
        text-decoration:none;
    }
`
export default Nav;