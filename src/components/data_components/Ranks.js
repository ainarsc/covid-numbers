import React from 'react';
import styled from 'styled-components'
import {COLOR_PRIMARY, COLOR_TEXT_ALTERNATIVE_2, COLOR_TEXT_DARK} from '../constants';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {uid} from 'uid';

export default () => {
    const [data, setData] = useState({})
    const [isFetched, setFetched] = useState(false)
    useEffect( () => {
        const fetchData = async () => {
            try {
                let result = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort=cases')
                setData(result.data)
                setFetched(true)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [isFetched]);

    const formatNumber = (n) => {
        return new Intl.NumberFormat('en-US').format(n);
    }

    return (
        <Wrapper>
            <Title>Most Cases</Title>
            <Content>
                {!isFetched ? "loading" : data.map((country) => {
                    return (
                        <Item key={uid()}>
                            <Country>
                                {country.country}
                            </Country>
                            <Number>
                                {formatNumber(country.cases)}
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