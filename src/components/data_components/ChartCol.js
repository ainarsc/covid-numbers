import React from 'react';
import styled from 'styled-components'
import Chart from './Chart'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    justify-content: space-between;
`

const Charts = () => {
    return (
        <Wrapper>
            <Chart />
            <Chart />
        </Wrapper>
    );
}

export default Charts;
