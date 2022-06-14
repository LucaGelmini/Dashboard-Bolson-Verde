import React from 'react'
import {useParams} from 'react-router-dom'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import './style.css'

const Element = ({item, llave='type'}) => { 
 
  const elemento = useParams() ; 
  let listaMostrar = item.find(dato =>{  
      return dato[llave] === elemento.id  
  })

  const impresionDatos = ()=>{
   
    if(llave=='type'){
       let arr=listaMostrar.products.map(product=>{
        console.log(product);
        return {          
          label:product.name,
          data:product.stock
        }
      })
      return{
        arr,
        titulo:'Stock'
      }
    }else{
      let arr=listaMostrar.cartsOrders.map((product,idx)=>{ 
      
        return {
         
          label:product.id,
          data:product.total
        }

    })
    return{
      arr,
      titulo:'Total'
    }
    }
  }

  const data={
    labels:impresionDatos().arr.map(item=>item.label),
    datasets:[{
      label:impresionDatos().titulo,
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
      data:impresionDatos().arr.map(item=>item.data)
    }]
  }
  const opciones={
    maintainAspectRatio:false,
    responsive:true
  }
  return (
    <div className='contenedor-boxes'><p className='titulo'>Gráfica: </p>  
      <Bar data={data} opciones={opciones}/>
    </div>
  )
}

export default Element