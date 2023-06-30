import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
        <p>Designed and Developed by <span> <a target='_blank'
            rel='noopener noreferrer' href="https://www.farajisparks.com">Faraji Sparks</a> </span></p>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
display:flex;
justify-content:center;
`
export default Footer