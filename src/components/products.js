import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js"


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
        .then(data => {
            setBestSellers(data)
            localStorage.bestSellers =data.data;

        })
    }, [localStorage.bestSellers ? localStorage.bestSellers : []]);

    function plotlyData(){
        if(bestSellers.data){
            let bs =bestSellers.data;
            console.log(bs)
            let barChartData = {
                x: bs.map(product => product.name),
                y: bs.map(product => product.totalQuantity),
                type: 'bar'
            }
            return barChartData
        }
    }
    
    
    return (
        <div className="products">
        
        <p>Productos más vendidos</p>
        <div id="barChart"></div>

        <Plot data={[plotlyData()]} layout={ {width: 500, height: 300, title: 'A Fancy Plot'} }/>
        {/* <ul>
        {   
            bestSellers.data ?
            bestSellers.data.slice(0,-1).map((product, i) => {
                return <li key={i}>{product.name}: {product.totalQuantity}</li>
            })
            : <li>Cargando</li>

        }
        </ul> */}
    
    
        </div>
    );
}

export default Products;
