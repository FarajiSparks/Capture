import React, {useState} from "react";
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from "./Toggle";
import {LayoutGroup} from 'framer-motion';

import { useScroll } from "./useScroll";
import { fadeInSide } from "../animation";

const FaqSection = ()=>{

    const [element, controls] = useScroll();
   
    return(
        
        <Faq  variants={fadeInSide} animate={controls} initial="hidden" ref={element}>
            <h2>Any questions? <span>FAQ</span> </h2>
            <LayoutGroup>
                <Toggle title={"How do I start?"}>
                    <div className="question">
                        <div className="answer">
                            <p>Contact me and we can begin preserving the present</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title={"Where do you work?"}>
                <div className="question"> 
                    <div className="answer">
                        <p>Currently based in Kingston, Jamaica with transportation across the country</p>
                    </div>
                </div>
                </Toggle>   
                <Toggle title={"What do your services include?"}>
                    <div className="question">
                        <div className="answer">
                            <p>My services include onsite photography with edits available</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title={"Are you bald fr?"}>
                    <div className="question">
                        <div className="answer">
                            <p>Yes</p>
                        </div>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    )
}

const Faq = styled(About)`
display:block;
span{
    display:block
}

h2{
    padding-bottom:2rem;
    font-weight:lighter;
}

.faq-line {
    display: block;
    background: #CCCCCC;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
}

.question{
    padding:1rem 0rem;
    cursor:pointer;
}

.answer{
    padding: .1rem 0rem;
    p{
        padding:.1rem 0rem;
    }
}
`;   
export default FaqSection;