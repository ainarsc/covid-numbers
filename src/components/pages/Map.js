import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND, COLOR_TEXT_DARK} from '../constants'
import {Header, MapContent, Footer} from '../layout_components'

const Wrapper = styled.div`
    background-color: ${COLOR_BACKGROUND};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    color: ${COLOR_TEXT_DARK};
`

const Map = () => {
    return (
        <Wrapper>
            <Header/>
            <MapContent />
            <Footer/>
        </Wrapper>
    );
}

export default Map;
