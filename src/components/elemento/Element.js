import React from 'react'
import {useParams} from 'react-router-dom'
import './style.css'

const Element = ({item, llave='type'}) => { 
 
  const elemento = useParams() ; 
  let listaMostrar = item.find(dato =>{  
      return dato[llave] === elemento.id  
  })

  const impresionDatos = ()=>{
    console.log(listaMostrar);
    if(llave=='type'){
      return listaMostrar.products.map((product,idx)=> <p className='item-lista' key={idx}>{product.name?? 'No hay productos'}</p>)
    }else{
      return listaMostrar.cartsOrders.map((product,idx)=>{ 
      return (
        <div key={idx} className='box-items'>
          <p className='item-lista' >Orden numero: {product.id}</p>
          <p className='item-lista' >User id: {product.user_id}</p>
          <p className='item-lista' >Payment id: {product.payment_id}</p>
          <p className='item-lista' >Fecha actualización: {product.update_date}</p>
          <p className='item-lista' >Total productos: {product.total}</p>
        </div>
      )
    })
    }
  }
  return (
    <div className='contenedor-boxes'>Elementos: 
       {impresionDatos()}    
    </div>
  )
}

export default Element