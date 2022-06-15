class ProductsPlotUtilities{
    bestSellersPlotData(bs){   
        let barChartData = {
            x: bs.slice(0,5).map((product, i) => `${i+1} - ${product.name}`),
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
    mostExpensivesPlotData(me){   
        let barChartData = {
            x: me.slice(0,5).map((product, i) => `${i+1} - ${product.name}`),
            y: me.map(product => {
                return Number(product.price); 
            }),
            type: 'bar',
            hovertemplate: `<b>%{x}: </b>$%{y}`,
            text: me.map(product => product.unitMensure),
            marker: {
                color: me.map(product => {
                    if (product.price >= 400) return '#d84d09';
                    if(product.price >= 300) return '#B18D2B';
                    if(product.price >= 200) return '#89CD4D';
                    if(product.price >= 100) return '#4AB680'
                    return '#4AB680';
                })
            }
        }
        return barChartData
    }
    totalProductsPlotData(total){
        let byCategories = Object.keys(total.byCategories).map(key =>{
            return(`${key}: ${total.byCategories[key]}`)
        })
        let byExposition = Object.keys(total.byExposition).map(key =>{
            return(`${key}: ${total.byExposition[key]}`)
        })
        let byUnitMensure = Object.keys(total.byunitMensure).map(key =>{
            return(`${key}: ${total.byunitMensure[key]}`)
        })
        let tableHeaders = [['<b>Por categoría</b>'], ['<b>Por exposición</b>'], ['<b>Por unidad de medida</b>']]

        let tableValues = [byCategories, byExposition, byUnitMensure]
        console.log(tableHeaders, byCategories, byExposition, byUnitMensure)

        let headerColor = "grey";
        let rowEvenColor = "lightgrey";
        let rowOddColor = "white";

        let tableData = {
            type: 'table',
            header: {
              values: tableHeaders,
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: headerColor},
              font: {family: "Arial", size: 12, color: "white"}
            },
            cells: {
              values: tableValues,
              align: "center",
              line: {color: "black", width: 1},
              fill: {color: [[rowOddColor,rowEvenColor,rowOddColor,
                                    rowEvenColor,rowOddColor]]},
              font: {family: "Arial", size: 11, color: ["black"]}
            }
          }
          return tableData
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
        let page = localStorage.productsPlotPage ? localStorage.productsPlotPage : 0
        console.log("%c"+page , "color: magenta")
        fetch('http://localhost:3001/api/products/most-expensives?' +
        new URLSearchParams({
            page: page
            
        }))
        .then(res => res.json())
        .then(data => {
            hook(data)
            localStorage.mostExpensives =data.data;
            
        });
    }
}
    
export default ProductsPlotUtilities