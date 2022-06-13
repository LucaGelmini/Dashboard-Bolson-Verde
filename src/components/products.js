import React, { useEffect, useState } from "react";


function Products() {
    const [products, setProducts] = useState([]);
    const [moreExpensives, setMoreExpensives] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/api/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
        
    }, []);

    useEffect(()=>{
        fetch('http://localhost:3001/api/products/more-expensive?' +
        new URLSearchParams({
            page: 0
        }))
        .then(res => res.json())
        .then(data => setMoreExpensives(data))
    }, []);

    useEffect(()=>{
        fetch('http://localhost:3001/api/products/best-sellers?' +
        new URLSearchParams({
            page: 0
        }))
        .then(res => res.json())
        .then(data => setBestSellers(data))
    }, []);
    // console.log(moreExpensives)
    return (
        <div className="products">
        
        <p>Productos</p>
        <ul>
        {   
            bestSellers.data.length > 0 ?
            bestSellers.data.slice(0,-1).map((product, i) => {
                return <li key={i}>{product.name}: {product.totalQuantity}</li>
            })
            : <li>Cargando</li>
        }
        </ul>
    
    
        </div>
    );
}

export default Products;
