import React from "react";

import Wave from "./Wave";
//Styles
//import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation'
const AboutSection = () =>{


    return(
        <About>
            <Description>
                <motion.div className="title"> 
                    <Hide>
                        <motion.h2 variants={titleAnim}> I work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>moments</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come to life</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Some extra details you'd like to say about yourself
                </motion.p>
                <motion.button variants={fade}>Contact me</motion.button>
                <Image>
                    <motion.img variants={photoAnim} src="https://i.ibb.co/2d9MN7P/DSC-0339.jpg" alt="brandon center"/>
                </Image>
            </Description>
        </About>
    );
};

export default AboutSection;