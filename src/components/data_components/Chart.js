import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
//Testing
import {LineChart} from './lineChart'
import forEach from 'lodash/forEach';
import lineChartData from './lineChartData.json'

const Chart = () => {
    const [data, setData] = useState()
    const [isLoaded, setStatus] = useState(false)
    
    useEffect(() => {
        const sortData = (unsorted) => {
            let sorted = []
            const sort = () => {
                forEach(unsorted, (group, key) => {
                    const groupData = {id: key, color: "hsl(247, 70%, 50%)", data: []}
                    forEach(group, (number, date) => {
                        groupData.data.push({x: formatNumber(date), y: number})
                    })
                    sorted.push(groupData)
                    
                })
            }
            sort()
            return sorted
        }
        const formatNumber = (number) => {
            //input number = MM/DD/YY
            //result number = YYYY-DD-MM
            const milliseconds = Date.parse(number)
            const date = new Date(milliseconds)
            let month = (date.getMonth() + 1).toString(),
                day = date.getDate().toString(),
                year = date.getFullYear().toString();
    
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            
            return [year, month, day].join('-');
        }
        setData(() => sortData(lineChartData))
        setStatus(true)
        console.log(data)
    }, [isLoaded])
    // useEffect( () => {
    //     // const sortData = (unsorted) => {
    //     //     const sorted = []
    //     //     const sort = () => {
    //     //         forEach(unsorted, (group, key) => {
    //     //             const groupData = {id: key, color: "hsl(247, 70%, 50%)", data: []}
    //     //             forEach(group, (number, date) => {
    //     //                 groupData.data.push({x: formatNumber(date), y: number})
    //     //             })
    //     //             sorted.push(groupData)
                    
    //     //         })
    //     //     }
    //     //     sort()
    //     //     console.log(sorted)
    //     //     return sorted
    //     // }
    //     // const fetchData = async () => {
    //     //     try {
    //     //         const result = await axios.get('https://corona.lmao.ninja/v2/historical/All?lastdays=90')
    //     //         setData(() => sortData(result.data))
    //     //         setStatus(true)
    //     //     } catch (error) {
    //     //         console.log(error)
    //     //     }
    //     // }
    //     const formatNumber = (number) => {
    //         //input number = MM/DD/YY
    //         //result number = YYYY-DD-MM
    //         const YEAR = `20${number.substr(5, 2)}`
    //         const DD = number.substr(2, 2).length < 2 ? `0${number.substr(2, 2)}` : number.substr(2, 2)
    //         const MM = number.substr(0, 2).length < 2 ? `0${number.substr(0, 2)}` : number.substr(0, 2)



    //         console.log(Date.parse(number))
    //         return `${YEAR}-${DD}-${MM}`
    //     }
    //     // fetchData();
        
    // }, [isLoaded]);



    return (
        <Wrapper>
            {isLoaded === false ? "LOADING" : <LineChart data={data}/>}
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
