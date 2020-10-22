import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex: 10;
    justify-content: space-evenly;
    margin: 5px;
`

const Item = styled.div`
    border: 1px solid black;
    display: flex;
    flex: 6;
    height: 45%;
    min-width: 400px;
    margin: 0 5px;
`

const Charts = () => {
    return (
        <Wrapper>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
        </Wrapper>
    );
}

export default Charts;
