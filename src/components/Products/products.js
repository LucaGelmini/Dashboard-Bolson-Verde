import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js"
import ProductsPlotUtilities from '../../utils/productsPlotUtilities'



function Products() {
    const [products, setProducts] = useState([]);
    const [mostExpensives, setMostExpensives] = useState([]);
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
        fetch('http://localhost:3001/api/products/most-expensives?' +
        new URLSearchParams({
            page: localStorage.mostExpensivesPage ? localStorage.mostExpensivesPage : 0
        }))
        .then(res => res.json())
        .then(data =>{
            setMostExpensives(data)
            localStorage.mostExpensives =data.data;
        } )
    }, [localStorage.mostExpensives ? localStorage.mostExpensives : null]);

    useEffect(()=>{
        fetch('http://localhost:3001/api/products/best-sellers?' +
        new URLSearchParams({
            page: localStorage.productsPlotPage ? localStorage.productsPlotPage : 0

        }))
        .then(res => res.json())
        .then(data => {
            setBestSellers(data)
            localStorage.bestSellers =data.data;
            localStorage.productsPlotPage = 0;
        })
    }, [localStorage.bestSellers ? localStorage.bestSellers : null]);

    function plotlyData(option = 'bestSellers'){
        let fns = new ProductsPlotUtilities() //funciones
        if(option === 'bestSellers' && bestSellers.data){
            return fns.bestSellersPlotData(bestSellers.data)
        }
        if(option === 'mostExpensives' && mostExpensives.data){
            return fns.mostExpensivesPlotData(mostExpensives.data)
    }
    }


    function nextPage(){
        let fns = new ProductsPlotUtilities()
            localStorage.productsPlotPage = Number(localStorage.productsPlotPage) + 1;
            console.log('Página: ' + localStorage.productsPlotPage + '\b opcion: '+ plotOptions)
                if(plotOptions=='bestSellers'){
                    fns.bestSellersUpdatePage(setBestSellers)
                }
                if(plotOptions=='mostExpensives'){
                    fns.mostExpensivesUpdatePage(setMostExpensives)
                }
    }

    function prevPage(){
        let fns = new ProductsPlotUtilities()
        localStorage.productsPlotPage = Number(localStorage.productsPlotPage) - 1;
        console.log('Página: ' + localStorage.productsPlotPage);
        if(localStorage.productsPlotPage < 0){
            localStorage.productsPlotPage = 0;
            alert('Ya es la primer página')
        }
        if(plotOptions=='bestSellers'){
            fns.bestSellersUpdatePage(setBestSellers)
        }
        if(plotOptions=='mostExpensives'){
            fns.mostExpensivesUpdatePage(setMostExpensives)
        }
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
            title: `Del nro ${Number(localStorage.productsPlotPage)*5+1} al ${(Number(localStorage.productsPlotPage)+1)*5}`
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
