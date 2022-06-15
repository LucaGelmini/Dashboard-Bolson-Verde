import React from 'react';
// import './App.css';
// import './assets/css/app.css';
// import UsersPieChart from './components/UsersPieChart';
// import CartOrderData from './components/CartOrderData';
import UsersData from './components/UsersData';
import CartOrderData from './components/CartOrderData';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
 
 

function App() {
   

  return (
    <div className="App" >

    {/* <UsersPieChart/> */}
   {/* <CartOrderData/> */}
   <div className='sideBar-firstPanel-container'>
    <SideBar/>
    <div className='topBar-cardContainer'>
    <TopBar/>
    <div className='cardsContainer'>
        {/* <UsersData/> */}
        <CartOrderData/>
    </div>
    </div>
   </div>


    </div>
  );
}

export default App;
