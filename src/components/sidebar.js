import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAppleWhole, faCarrot, faCartShopping, faEllipsis, faPlugCircleBolt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

<i class="fa-solid fa-gauge-low"></i>
function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div class="logo-container">
               <p> <FontAwesomeIcon className='icon-sideBar' icon= {faCarrot} /> Bolson Verde</p>
            </div>

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                         
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                   
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span className='noPointer'> <FontAwesomeIcon className='icon-sideBar' icon= {faPlugCircleBolt} /> Dashboard - Bolson Verde</span> 
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
              <Link to='/users'><a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span> <FontAwesomeIcon className='icon-sideBar' icon= {faUser} /> Users</span>
                    </a> </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                 <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span><FontAwesomeIcon className='icon-sideBar' icon= {faAppleWhole} /> Products</span>
                        </a> 
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                <Link to='/'>  <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span><FontAwesomeIcon className='icon-sideBar' icon= {faCartShopping} /> Cart Orders</span>
                        </a> </Link>
                </li>

                <li className="nav-item">
                   <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span><FontAwesomeIcon className='icon-sideBar' icon= {faEllipsis} /> Secondary</span>
                        </a> 
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;