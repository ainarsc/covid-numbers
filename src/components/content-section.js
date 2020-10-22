import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND} from './constants'
import Totals from './data_components/totals'
import Rank from './data_components/rank'
import ChartCol from './data_components/ChartCol'

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

const ContentSection = () => {
    return (
        <Wrapper>
            <TopRow>
                <Totals />
            </TopRow>
            <BottomRow>
                <Rank />
                <ChartCol topChart bottomChart />
                <ChartCol topChart bottomChart />
            </BottomRow>
        </Wrapper>
    );
}

export default ContentSection;
