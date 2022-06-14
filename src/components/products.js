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
            page: localStorage.bestSellersPage ? localStorage.bestSellersPage : 0

        }))
        .then(res => res.json())
        .then(data => {
            setBestSellers(data)
            localStorage.bestSellers =data.data;
            localStorage.bestSellersPage = 0;

        })
    }, [localStorage.bestSellers ? localStorage.bestSellers : []]);

    function plotlyData(){
        if(bestSellers.data){
            let bs =bestSellers.data;
            console.log(bs)
            let barChartData = {
                x: bs.map(product => product.name),
                y: bs.map(product => product.totalQuantity),
                type: 'bar',
                hovertemplate: `<b>%{x}: </b>%{y} %{text}<br><i>total de unidades vendidas: </i>${bs[[bs.length-1]].total}`,
                text: bs.map(product => product.unitMensure),
                marker: {
                    color: bs.map(product => {
                        if (product.unitMensure ==='kg') return '#d84d09';
                        if(product.unitMensure ==='gr') return '#B18D2B';
                        if(product.unitMensure ==='unidad') return '#89CD4D';
                        if(product.unitMensure ==='ramo') return '#4AB680';
                        if(product.unitMensure ==='bandeja') return '#4AB680';
                        return 'red'
                    })
                }
            }
            return barChartData
        }
    }
    
    function nextPage(){
            localStorage.bestSellersPage = Number(localStorage.bestSellersPage) + 1;
            console.log(localStorage.bestSellersPage)

                fetch('http://localhost:3001/api/products/best-sellers?' +
                new URLSearchParams({
                    page: localStorage.bestSellersPage ? localStorage.bestSellersPage : 0
        
                }))
                .then(res => res.json())
                .then(data => {
                    setBestSellers(data)
                    localStorage.bestSellers =data.data;
        
                });
    }

    function prevPage(){
        localStorage.bestSellersPage = Number(localStorage.bestSellersPage) - 1;
        console.log(localStorage.bestSellersPage);
        if(localStorage.bestSellersPage < 0){
            localStorage.bestSellersPage = 0;
            alert('Ya es la primer página')
        }
        fetch('http://localhost:3001/api/products/best-sellers?' +
        new URLSearchParams({
            page: localStorage.bestSellersPage ? localStorage.bestSellersPage : 0

        }))
        .then(res => res.json())
        .then(data => {
            setBestSellers(data)
            localStorage.bestSellers =data.data;

        })
    }
    return (
        <div className="products">
        
        <p>Productos más vendidos</p>
        <div className="barChart">
        <Plot 
        data={[plotlyData()]}
        layout={{
            width: 500,
            height: 300,
            title: `Del nro ${Number(localStorage.bestSellersPage)*5+1} al ${(Number(localStorage.bestSellersPage)+1)*5}`
            }}/>
        <button onClick={prevPage}>Anteriores</button>
        <button onClick={nextPage}>Siguientes</button>
        </div>
        
        
        <form onChange={e => console.log(e.target.value)}>
            <label htmlFor="bestSellersRadioButton">Los más vendidos</label>
            <input type={'radio'} name='products' id="bestSellersRadioButton" value={'bestSellers'}/>
            <label htmlFor="mostExpensivesRadioButton">Los más caros</label>
            <input type={'radio'} name='products' id="mostExpensivesRadioButton" value={'mostExpensives'}/>
            <label htmlFor="ctotalProductsRadioButton">Total de productos</label>
            <input type={'radio'} name='products' id="totalProductsRadioButton" value={'total'}/>
        </form>

  
    
    
        </div>
    );
}

export default Products;
