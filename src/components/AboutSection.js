import React from "react";

//Styles
//import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () =>{
    return(
        <About>
            <Description>
                <div className="title"> 
                    <Hide>
                        <h2> I work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>moments</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come to life</h2>
                    </Hide>
                </div>
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