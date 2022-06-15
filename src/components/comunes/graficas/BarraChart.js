import React from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

const BarraChart = ({
    labels,
    titulo,
    datos
}) => {
    const data={
        labels:labels,
        datasets:[{
          label:titulo,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
          borderWidth:1,
          hoverBackgroundColor:'yello',
          hoverBorderColor:'#ffa099',
          data:datos
        }]
      }
      const opciones={
        maintainAspectRatio:false,
        responsive:true
      }
  return (
    <Bar style={{height:'50px'}} data={data} opciones={opciones}/>
  )
}

export default BarraChart