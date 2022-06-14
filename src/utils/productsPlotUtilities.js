
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
    }me
    moreExpensivesPlotData(me){   
        console.log('CAROOOS')
        console.log(me[0])
        let barChartData = {
            x: me.map(product => product.name),
            y: me.map(product => {
                console.log('Esto: ' + product.price)
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