import React from 'react';
import styled from 'styled-components'
//Testing
import {TempChart} from './_tempChart'
import tempData from './_tempData.json'


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
            <TempChart data={tempData} />
        </Wrapper>
    );
}

export default Chart;
