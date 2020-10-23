import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components'
import {COLOR_PRIMARY, COLOR_TEXT_LIGHT} from '../constants'

export default () => {
    const BRAND = 'COVID19 2020',
     NAV_ITEM_1 = 'NUMBERS',
     NAV_ITEM_2 = 'MAP',
     NAV_ITEM_3 = 'IN DEPTH',
     LINK_1 = '/',
     LINK_2 = 'map',
     LINK_3 = '/in-depth'


    return (
        <Wrapper>
            <Brand>{BRAND}</Brand> 
            <StyledList>
                <ListItem>
                    <StyledLink to={LINK_1}>{NAV_ITEM_1}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to={LINK_2}>{NAV_ITEM_2}</StyledLink>
                </ListItem>
                <ListItem>
                    <StyledLink to={LINK_3}>{NAV_ITEM_3}</StyledLink>
                </ListItem>
            </StyledList>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${COLOR_PRIMARY};
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex: 2;
    text-align: center;
    list-style: none; 
`
const ListItem = styled.li`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex: 1;
    &:hover {
        background-color:#000;
        opacity:0.3;
    }
`
const StyledLink = styled(NavLink)`
    color: ${COLOR_TEXT_LIGHT};
    text-decoration: none;
    font-weight: 600;
    padding: 10px;
    width: 100%;
    &:active {
        text-decoration: none;
        background-color:#000;
        opacity:0.3;
    }
`
const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    flex: 2;
`

