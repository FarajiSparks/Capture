import React from "react";
//icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';

//Styles
import styled from "styled-components";
import {About, Description, Image} from '../styles';

import { useScroll } from "./useScroll";
import { fadeInSide } from "../animation";


const ServiceSection = () =>{
    const [element, controls] = useScroll();
    return (
        <Services variants={fadeInSide} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2> High <span>quality</span> service 
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Nah nigga you expected some lorem epsum bs? </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="together"/>
                            <h3>Communicative</h3>
                        </div>
                        <p>Nah nigga you expected some lorem epsum bs? </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="something"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Nah nigga you expected some lorem epsum bs? </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Nah nigga you expected some lorem epsum bs? </p>
                    </Card>
                </Cards>
            </Description> 
            <Image>
                <img src="https://i.ibb.co/SPdF6dt/DSC-0363.jpg" alt="brandon right"/>
            </Image>
        </Services>
    );
};

const Services =styled(About)`
h2{
    padding-bottom:5rem;
}
p{
    padding:2rem 0rem 4rem 0rem;
}

`;

const Cards = styled.div`
display:flex;
flex-wrap:wrap;
@media (max-width:1300px){
     justify-content:space-between;
    }

`;

const Card = styled.div`
flex-basis:15rem;
.icon{
    display:flex;
    align-items:center;
    h3{
        margin-left: 1rem;
        background:white;
        color:black;
        padding:1rem;
    }
}

`;


export default ServiceSection; 