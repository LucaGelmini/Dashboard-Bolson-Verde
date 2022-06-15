import React from 'react'
import {useParams} from 'react-router-dom'
import './style.css'
import BarraChart from '../comunes/graficas/BarraChart'

const Element = ({item, llave='type'}) => { 
 
  const elemento = useParams() ; 
  let listaMostrar = item.find(dato =>{  
      return dato[llave] === elemento.id  
  })

  const impresionDatos = ()=>{   
    if(llave=='type'){
       let arr=listaMostrar.products.map(product=>{
        return {          
          label:product.name,
          data:product.stock
        }
      })
      return{
        arr,
        titulo:'Stock'
      }
    }
  //   if(llave =='name'){
  //     let arr=listaMostrar.products.map(product=>{
  //      console.log(product)
  //      return {
  //        label:product.name,
  //        data:product.stock
  //      }
  //    })
  //    return{
  //      arr,
  //      titulo:'Stock'
  //    }
  //  }
    else{
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
console.log('entre a element');
  return (
    <div className='contenedor-boxes' >   
      <BarraChart 
  
      labels={impresionDatos().arr.map(item=>item.label)} 
      titulo={impresionDatos().titulo}
      datos={impresionDatos().arr.map(item=>item.data)}
      />
    </div>
  )
}

export default Element