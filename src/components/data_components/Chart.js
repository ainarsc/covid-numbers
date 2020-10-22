import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex: 1;
    /* width: 96%; */
    margin: 5px;
`

const Chart = () => {
    return (
        <Wrapper>
            Chart
        </Wrapper>
    );
}

export default Chart;
