import React from 'react';
import styled from 'styled-components'
import { COLOR_ALTERNATIVE, COLOR_TEXT_ALTERNATIVE_2, COLOR_TEXT_DARK } from '../constants';


export default () => {
    return (
        <>
            <Item>
                <Title>CASE COUNT</Title>
                <Number>3.400.4455</Number>
            </Item>
            <Item>
                <Title>ACTIVE CASES</Title>
                <Number>443.443</Number>
            </Item>
            <Item>
                <Title>RECOVERED</Title>
                <Number>2.934.334</Number>
            </Item>
            <Item>
                <Title>DEATHS</Title>
                <Number>1.203.333</Number>
            </Item>
            <Item>
                <Title>HOSPITALIZED</Title>
                <Number>44.534</Number>
            </Item>
        </>
    );
}

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 3px;
    justify-content: center;
    flex: 1;
    margin: 5px;
`
const Title = styled.h3`
    color: ${COLOR_TEXT_ALTERNATIVE_2};
    border-bottom: 2px solid ${COLOR_TEXT_ALTERNATIVE_2};
    text-align: center;
    padding: 5px;
    margin: 0;
`
const Number = styled.p`
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 3px;
    color: ${COLOR_TEXT_DARK};
    text-align: center;
    padding: 5px;
    margin: 0;
`