import React from 'react';
import styled from 'styled-components'
import { COLOR_TEXT_ALTERNATIVE_2, COLOR_TEXT_DARK } from '../constants';
import axios from 'axios';
import {useState, useEffect} from 'react';


export default () => {
    const [data, setData] = useState({})
    useEffect( () => {
        const fetchData = async () => {
            try {
                let result = await axios.get('https://corona.lmao.ninja/v2/all?yesterday')
                console.log(result.data)
                setData(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const formatNumber = (n) => {
        return new Intl.NumberFormat('en-US').format(n);
    }
    return (
        <>
            <Item>
                <Title>CASE COUNT</Title>
                <Number>{formatNumber(data.cases)}</Number>
            </Item>
            <Item>
                <Title>ACTIVE CASES</Title>
                <Number>{formatNumber(data.active)}</Number>
            </Item>
            <Item>
                <Title>RECOVERED</Title>
                <Number>{formatNumber(data.recovered)}</Number>
            </Item>
            <Item>
                <Title>DEATHS</Title>
                <Number>{formatNumber(data.deaths)}</Number>
            </Item>
            <Item>
                <Title>HOSPITALIZED</Title>
                <Number>{formatNumber(data.critical)}</Number>
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