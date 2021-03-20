import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
//Testing
import {LineChart} from './lineChart'
import forEach from 'lodash/forEach';
import _ from 'lodash';

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

    const sortData = (d) => {
        //{"cases": {date: number}, "deaths": {date: number}}
        //forEach in result
        //create object of type
        //forEach in type
        //add to data obj x, y
        //add data obj to obj of type
        //add it to array 
        //set array in useState

        let sorted = [];
        _.forEach(d, (value, key) => {
            let category = {id: key, color: "hsl(247, 70%, 50%)", data: []}
            _.forEach(value, (number, date) => {
                category.data.push({x: date, y: number})
            })
            sorted.push(category)
        })



        return sorted
    }

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
