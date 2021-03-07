import React from 'react';
import styled from 'styled-components'
//Testing
import {LineChart} from './lineChart'
import lineChartData from './lineChartData.json'


const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: stretch;
    flex: 1;
    margin: 5px;
`

const Chart = () => {
    return (
        <Wrapper>
            <LineChart data={lineChartData} />
        </Wrapper>
    );
}

export default Chart;
