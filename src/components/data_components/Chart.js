import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
//Testing
import {LineChart} from './lineChart'
// import lineChartData from './lineChartData.json'


const Chart = () => {
    const [data, setData] = useState(
        [
            {
                id: "cases",
                color: "hsl(247, 70%, 50%)",
                data: [
                    {
                        x: "",
                        y: ""
                    }
                    ]
            },
            {
                id: "deaths",
                color: "hsl(194, 70%, 50%)",
                data: [
                    {
                        x: "",
                        y: ""
                    }
                    ]
            },
            {
                id: "recovered",
                color: "hsl(289, 70%, 50%)",
                data: [
                    {
                        x: "",
                        y: ""
                    }
                    ]
            }
        ]
    )
    const [isFetched, setState] = useState(false)

    useEffect( () => {
        const fetchData = async () => {
            try {
                let result = await axios.get('https://corona.lmao.ninja/v2/historical/All?lastdays=90')
                setData(result.data)
                setState(true)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [isFetched]);

    return (
        <Wrapper>
            {!isFetched ? "loading" : <LineChart data={data}/>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    margin: 5px;
`

export default Chart;
