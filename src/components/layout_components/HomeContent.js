import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND} from '../constants'
import {BigFigures, Ranks, ChartCol} from '../data_components'

const Wrapper = styled.div`
    background-color: ${COLOR_BACKGROUND};
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 5px;
`
const TopRow = styled.div`
    display: flex;
    flex: 1;
    order: 1;
    flex-direction: row;
    justify-content: space-evenly;
`
const BottomRow = styled.div`
    display: flex;
    order: 2;
    flex-direction: row;
    flex: 8;
`

const HomeContent = () => {
    return (
        <Wrapper>
            <TopRow>
                <BigFigures country />
            </TopRow>
            <BottomRow>
                <Ranks type country />
                <ChartCol topChart bottomChart country />
                <ChartCol topChart bottomChart country />
            </BottomRow>
        </Wrapper>
    );
}

export default HomeContent;
