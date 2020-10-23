import React from 'react';
import styled from 'styled-components'
import {LargeMap} from '../data_components'
import data from '../data_components/_tempDataMap.json'
import countryFeatures from '../data_components/_featuresMap.json'

const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 5px;
`

const MapContent = () => {
    return (
        <Wrapper>
            <LargeMap data={data} country={countryFeatures} />
        </Wrapper>
    );
}

export default MapContent;
