import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND, COLOR_TEXT_DARK} from './constants'
import NavBar from './nav-bar'
import ContentSection from './content-section'
import Footer from './footer'

const Wrapper = styled.div`
    background-color: ${COLOR_BACKGROUND};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    color: ${COLOR_TEXT_DARK};
`

const Dashboard = () => {
    return (
        <Wrapper>
            <NavBar/>
            <ContentSection />
            <Footer/>
        </Wrapper>
    );
}

export default Dashboard;
