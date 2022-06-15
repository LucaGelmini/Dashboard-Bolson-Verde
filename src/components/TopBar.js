import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faBars} from '@fortawesome/free-solid-svg-icons';
import image from '../assets/Bart-Simpson.png'

 
function SideBar(){
    return(
        <React.Fragment>
          			{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

{/*<!-- Sidebar Toggle (Topbar) -->*/}
{/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
<FontAwesomeIcon className='icon-grey' icon={faBars} />
</button> */}

{/*<!-- Topbar Navbar -->*/}
<ul className="navbar-nav ml-auto">

    {/*<!-- Nav Item - Alerts -->*/}
    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
        <FontAwesomeIcon className='icon-grey' icon={faBell} />
            {/*<!-- Counter - Alerts -->*/}
            <span className="badge badge-danger badge-counter">3+</span>
        </a>
    </li>

    {/*<!-- Nav Item - Messages -->*/}
    <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
        <FontAwesomeIcon className='icon-grey' icon={faEnvelope} />
            {/*<!-- Counter - Messages -->*/}
            <span className="badge badge-danger badge-counter">7</span>
        </a>
    </li>

    <div className="topbar-divider d-none d-sm-block"></div>

    {/*<!-- Nav Item - User Information -->*/}
    <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small"> Bart Simpson </span>
            <img className="img-profile rounded-circle" src={image} alt="Bart Simpson - Creador de React" width="60"/>
        </a>
    </li>

</ul>

</nav>
{/*<!-- End of Topbar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;