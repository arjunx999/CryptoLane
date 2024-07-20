import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ HistoricalData }) => {
    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
      let data2 = [["Date", "Prices"]]
      if(HistoricalData.prices) {
        HistoricalData.prices.map((item) => {
            data2.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
        })
        setData(data2);
      }
    }, [HistoricalData])
    
  return (
    <Chart
    chartType="LineChart"
    data = {data}
    height= "100%"
    options={{
        hAxis: { textStyle: { color: '#000000' } }, // Axis color
        vAxis: { textStyle: { color: '#000000' } }, // Axis color
        backgroundColor: 'transparent', // Transparent background
        // Other options as needed
      }}
    />
  )
}

export default LineChart