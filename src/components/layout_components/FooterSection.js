import React from 'react';
import styled from 'styled-components'
import {COLOR_SECONDARY, COLOR_TEXT_DARK} from '../constants'

const Wrapper = styled.div`
    background-color: ${COLOR_SECONDARY};
    height: 3vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`
const Text = styled.p`
    font-size: 10;
    color: ${COLOR_TEXT_DARK};

`
const Footer = () => {
    return (
        <Wrapper>
            <div><Text>COPYRIGHT 2020</Text></div>
            <div><Text>ABOUT</Text></div>
            <div><Text>DEVELOPED BY AINARS CIESA</Text></div>
        </Wrapper>
    );
}

export default Footer;
