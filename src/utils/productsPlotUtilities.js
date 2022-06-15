class ProductsPlotUtilities{
    bestSellersPlotData(bs){   
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
    bestSellersUpdatePage(hook){
        fetch('http://localhost:3001/api/products/best-sellers?' +
        new URLSearchParams({
            page: localStorage.productsPlotPage ? localStorage.productsPlotPage : 0

        }))
        .then(res => res.json())
        .then(data => {
            hook(data)
            localStorage.bestSellers =data.data;

        });
    }
    mostExpensivesUpdatePage(hook){
        fetch('http://localhost:3001/api/products/most-expensives?' +
        new URLSearchParams({
            page: localStorage.productsPlotPage ? localStorage.productsPlotPage : 0

        }))
        .then(res => res.json())
        .then(data => {
            hook(data)
            localStorage.mostExpensives =data.data;

        });
    }
    mostExpensivesPlotData(me){   
        console.log(me)
        let barChartData = {
            x: me.map(product => product.name),
            y: me.map(product => {
                return Number(product.price); 
            }),
            type: 'bar',
            hovertemplate: `<b>%{x}: </b>$%{y}`,
            // text: bs.map(product => product.unitMensure),
            // marker: {
            //     color: me.map(product => {
            //         if (product.unitMensure ==='kg') return '#d84d09';
            //         if(product.unitMensure ==='gr') return '#B18D2B';
            //         if(product.unitMensure ==='unidad') return '#89CD4D';
            //         if(product.unitMensure ==='ramo') return '#4AB680';
            //         if(product.unitMensure ==='bandeja') return '#4AB680';
            //         return 'red'
            //     })
            // }
        }
        return barChartData
    }
}

export default ProductsPlotUtilities