import React from "react";
import styled from 'styled-components';
import {About} from '../styles';

const FaqSection = ()=>{
    return(
        <Faq>
            <h2>Any questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Contact me and we can begin preserving the present</p>
                </div>
            </div>
            <div className="question">
                <h4>Where do you work?</h4>
                <div className="answer">
                    <p>Currently based in Kingston, Jamaica with transportation across the country</p>
                </div>
            </div>
               <div className="faq-line"></div>
            <div className="question">
                <h4>What do your services include?</h4>
                <div className="answer">
                    <p>My services include onsite photography with edits available</p>
                </div>
            </div>
            <div className="question">
                <h4>Are you bald fr?</h4>
                <div className="answer">
                    <p>Yes</p>
                </div>
            </div>
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

.answer:after {
    display: block;
    content: '';
    background: #CCCCCC;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
}

.question{
    padding:3rem 0rem;
    cursor:pointer;
}

.answer{
    padding: 2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`;   
export default FaqSection;