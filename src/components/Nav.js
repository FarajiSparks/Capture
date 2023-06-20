import React from "react";
import styles from "styled-components";

const Nav = () =>{
    return(
        <nav>
            <h1><a href="#">Facepelt Media</a></h1>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;