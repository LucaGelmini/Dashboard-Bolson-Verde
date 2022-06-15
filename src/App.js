import React from 'react';
// import './App.css';
// import './assets/css/app.css';
// import UsersPieChart from './components/UsersPieChart';
import UsersData from './components/UsersData';
import CartOrderData from './components/CartOrderData';
import NotFound from './components/NotFound';
import SideBar from './components/sidebar';
import TopBar from './components/TopBar';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import PrincipalTablasSecundarias from './components/principalTablasSecundarias/PrincipalTablasSecundarias';
 import './index.css'

function App() {
   

  return (
    <BrowserRouter>
         <div className="App" >
            <div className='sideBar-firstPanel-container'>
               <SideBar/>
               
               <div className='topBar-cardContainer'>
                   <TopBar/>
                   <div className='cardsContainer'>
                       {/* <UsersData/>
                       <CartOrderData/> */}
                       <Routes>
                           <Route path='/' element={<CartOrderData/>} /> 
                           <Route path='/users' element={<UsersData/>} />
                           <Route path='/secundarias/*' element={<PrincipalTablasSecundarias/>} />
                           
		               	      <Route path='*' element={<NotFound/>} />
                       </Routes>
                   </div>
               </div>
            </div>
         </div>
    </BrowserRouter>
  );
}

export default App;
