import React from "react";

//Styles
//import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';


import {motion} from 'framer-motion';

const AboutSection = () =>{


    return(
        <About>
            <Description>
                <motion.div className="title"> 
                    <Hide>
                        <motion.h2> I work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >your <span>moments</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>come to life</motion.h2>
                    </Hide>
                </motion.div>
                <p>Some extra details you'd like to say about yourself
                </p>
                <button>Contact me</button>
                <Image>
                    <img src="https://i.ibb.co/2d9MN7P/DSC-0339.jpg" alt="brandon center"/>
                </Image>
            </Description>
        </About>
    );
};

export default AboutSection;