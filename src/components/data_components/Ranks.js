import React from 'react';
import styled from 'styled-components'
import {COLOR_PRIMARY, COLOR_TEXT_ALTERNATIVE_2, COLOR_TEXT_DARK} from '../constants';

export default () => {
    const arr = [...Array(30)]
    return (
        <Wrapper>
            <Title>Most Cases</Title>
            <Content>
                {arr.map((i) => {
                    return (
                        <Item key={i}>
                            <Country>
                                Argentina
                            </Country>
                            <Number>
                                244 589
                            </Number>
                        </Item>
                    )
                })}
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin: 5px;
`
const Content = styled.div`
    overflow-y: scroll; 
`
const Title = styled.h1`
    color: ${COLOR_TEXT_ALTERNATIVE_2};
    text-align: center;
    border-bottom: 2px solid ${COLOR_TEXT_ALTERNATIVE_2};
    margin: 0;
    margin-bottom: 5px;
`
const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    border-bottom: 2px solid ${COLOR_PRIMARY};
    
`
const Country = styled.h3`
    color: ${COLOR_TEXT_DARK};
    padding: 5px;
    margin: 0;
`
const Number = styled.p`
    color: ${COLOR_TEXT_DARK};
    font-size: 21px;
    font-weight: 600;
    padding: 5px;
    margin: 0;
`