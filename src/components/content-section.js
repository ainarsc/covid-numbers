import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND, COLOR_TEXT_DARK} from './constants'

const Wrapper = styled.div`
    background-color: ${COLOR_BACKGROUND};
    display: flex;
    flex: 1;
    flex-direction: column;
    color: ${COLOR_TEXT_DARK};
`

const ContentSection = () => {
    return (
        <Wrapper>
            <div>FOO</div>
        </Wrapper>
    );
}

export default ContentSection;
