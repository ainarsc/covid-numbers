import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid blue;
    padding: 3px;
    text-align: center;
    justify-content: center;
    flex: 1;
    margin: 5px;
`

const BigFigures = () => {
    return (
        <>
            <Item>CASE COUNT</Item>
            <Item>ACTIVE CASES</Item>
            <Item>NEW CASES</Item>
            <Item>RECOVERED</Item>
            <Item>DEATHS</Item>
            <Item>HOSPITALIZED</Item>
        </>
    );
}

export default BigFigures;
