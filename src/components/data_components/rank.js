import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    flex: 2;
    flex-direction: column;
    margin: 5px;
`

const Item = styled.div`
    border: 1px solid black;
    height: 20px;
    width: 100%;
`

const ContentSection = () => {
    return (
        <Wrapper>
            {[...Array(15).map((i) => <Item key={i}>USA: 293 499</Item>)]}
        </Wrapper>
    );
}

export default ContentSection;
