import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js"
import ProductsPlotUtilities from '../utils/productsPlotUtilities'



function Products() {
    const [products, setProducts] = useState([]);
    const [moreExpensives, setMoreExpensives] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [plotOptions, setPlotOptions] = useState([])
    localStorage.productPlotOption = 'bestSellers'
    useEffect(()=>{
        
        setPlotOptions(localStorage.productPlotOption)
    }, [])

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

    function plotlyData(option = 'bestSellers'){
        let fns = new ProductsPlotUtilities() //funciones
        console.log(option)
        if(option === 'bestSellers' && bestSellers.data){
            return fns.bestSellersPlotData(bestSellers.data)
        }
        if(option === 'mostExpensives' && moreExpensives.data){
            return fns.moreExpensivesPlotData(moreExpensives.data)
    }
    }
    
    function nextPage(){
            localStorage.bestSellersPage = Number(localStorage.bestSellersPage) + 1;
            console.log('Página: ' + localStorage.bestSellersPage)

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
        console.log('Página: ' + localStorage.bestSellersPage);
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
    // function updatePlotOptions(e){
    //     let option = e..target.value
    //     useEffect((option)=>{
    //             localStorage.productPlotOption = option
    //             setPlotOptions(option)
    //     }, [localStorage.productPlotOption])
    // }
    return (
        <div className="products">
        
        <p>Productos más vendidos</p>
        <div className="barChart">
        <Plot 
        data={[plotlyData(plotOptions)]}
        layout={{
            width: 500,
            height: 300,
            title: `Del nro ${Number(localStorage.bestSellersPage)*5+1} al ${(Number(localStorage.bestSellersPage)+1)*5}`
            }}/>
        <button onClick={prevPage}>Anteriores</button>
        <button onClick={nextPage}>Siguientes</button>
        </div>
        
        
        <form onChange={e => {localStorage.productPlotOption = e.target.value; setPlotOptions(localStorage.productPlotOption)}}>
            <label htmlFor="bestSellersRadioButton">Los más vendidos</label>
            <input type={'radio'} name='products' id="bestSellersRadioButton" value={'bestSellers'} defaultChecked/>
            <label htmlFor="mostExpensivesRadioButton">Los más caros</label>
            <input type={'radio'} name='products' id="mostExpensivesRadioButton" value={'mostExpensives'}/>
            <label htmlFor="ctotalProductsRadioButton">Total de productos</label>
            <input type={'radio'} name='products' id="totalProductsRadioButton" value={'total'}/>
        </form>

  
    
    
        </div>
    );
}

export default Products;
