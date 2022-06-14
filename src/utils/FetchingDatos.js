export const FetchingDatos = (endPoint,setItem) => {
    return fetch(`http://localhost:3001/api/secundarias/${endPoint}`)      
    .then(response =>{          
        return response.json()
    })
    .then(respuesta =>{  
        // setItem(respuesta)
        return respuesta
    })
    .catch(console.log)
}