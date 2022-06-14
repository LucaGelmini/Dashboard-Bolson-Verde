export const FetchingDatos = (endPoint) =>{
    return fetch(`http://localhost:3001/api/secundarias/${endPoint}`)      
    .then(response =>{          
        return response.json()
    })
    .then(respuesta =>{
        return respuesta
    })
    .catch(console.log)
}