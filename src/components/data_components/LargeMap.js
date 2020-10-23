import React from 'react';
import styled from 'styled-components'
import { Choropleth} from '@nivo/geo'
import AutoSizer from "react-virtualized-auto-sizer";
//Testing


const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    margin: 5px;
`

const LargeMap = ({data, country}) => {
    return (
        <Wrapper>
            <AutoSizer > 
                {({height, width}) => (
                    <Choropleth
                        height={height}
                        width={width}
                        data={data}
                        features={country.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        colors="RdBu"
                        domain={[ 0, 1000000 ]}
                        unknownColor="#101b42"
                        label="properties.name"
                        valueFormat=".2s"
                        projectionScale={180}
                        projectionTranslation={[ 0.5, 0.57 ]}
                        projectionRotation={[ 0, 0, 0 ]}
                        graticuleLineColor="rgba(0, 0, 0, .2)"
                        borderWidth={0.5}
                        borderColor="#101b42"
                        legends={[
                            {
                                anchor: 'bottom-left',
                                direction: 'column',
                                justify: true,
                                translateX: 80,
                                translateY: -60,
                                itemsSpacing: 0,
                                itemWidth: 92,
                                itemHeight: 18,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 25
                            }
                        ]}
                    />
                )}
            </AutoSizer>
        </Wrapper>
    );
}

export default LargeMap;
