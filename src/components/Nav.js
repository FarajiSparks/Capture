import React from "react";
import styled from "styled-components";

//Routing 
import { Link } from "react-router-dom";

import {motion} from 'framer-motion';

import {useLocation} from 'react-router-dom'

const Nav = () =>{
const {pathname} = useLocation();
    return(
        
        <StyledNav>
            <h1><Link id="logo" to="/">Facepelt Media</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === '/' ? '5.5%' : '0%'}}/>
                </li>
                <li>
                       <Link to="/work">My Work</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === '/work' ? '5%' : '0%'}}/>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width: pathname === '/contact' ? '4.5%' : '0%'}}/>
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
    position:sticky;
    top:0;
    z-index:4;
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
    @media (max-width:1300px){
        flex-direction:column;
        padding:2rem 0rem;
        #logo{
            display:inline-block;
            margin:1rem;
            font-size:2rem;
        }
        ul{
            padding:2rem; 
            justify-content:space-around;
            width:100%;
            li{
                padding:0;
            }
        }
    }
`
const Line = styled(motion.div)`
    height:0.2rem;
    background: #23d997;
    width:0%;
    position:absolute;
`
export default Nav;
