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
    color: ${COLOR_TEXT_DARK};
`

const Footer = () => {
    return (
        <Wrapper>
            <div>COPYRIGHT 2020</div>
            <div>ABOUT</div>
            <div>DEVELOPED BY AINARS CIESA</div>
        </Wrapper>
    );
}

export default Footer;
