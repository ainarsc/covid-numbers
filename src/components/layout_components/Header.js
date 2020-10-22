import React from 'react';
import styled from 'styled-components'
import {COLOR_PRIMARY, COLOR_TEXT_DARK} from '../constants'

const Wrapper = styled.div`
    background-color: ${COLOR_PRIMARY};
    display: flex;
    height: 5vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color: ${COLOR_TEXT_DARK};
`

const Header = () => {
    return (
        <Wrapper>
            <div>COVID19 2020</div>
            <div>NUMBERS</div>
            <div>MAP</div>
            <div>IN DEPTH</div>
        </Wrapper>
    );
}

export default Header;
