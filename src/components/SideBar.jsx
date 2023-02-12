import React from "react";
import ItemMenu from "./ItemMenu";
import { faVideoCamera, faHome } from '@fortawesome/free-solid-svg-icons'
import ListRoutes from "./ListRoutes";

function SideBar(props) {

  const routes = [
    {
      id:1,
      title:"Inicio",
      icon:faHome, 
      url:"/",
      isActive:true,
    },
    {
      id:2,
      title:"Peliculas",
      icon:faVideoCamera, 
      url:"/peliculas",
      isActive:false,
    }
  ];
  const menu = routes.map( (key, value)=> <ItemMenu key={key.id} item={key} /> );
  return (
    <> 
      <div className="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <div className="navbar-nav theme-brand flex-row  text-center">
            <div className="nav-logo">
              <div className="nav-item theme-logo">
                <a href="./index.html">
                  <img
                    src="/assets/img/logo.svg"
                    className="navbar-logo"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="nav-item theme-text">
                <a href="./index.html" className="nav-link">
                  {" "}
                  CORK{" "}
                </a>
              </div>
            </div>
            <div className="nav-item sidebar-toggle">
              <div className="btn-toggle sidebarCollapse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevrons-left"
                >
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="shadow-bottom"></div>
          <ul className="list-unstyled menu-categories" id="accordionExample">
            {menu}
            {/* { routes.map( (key, value)=> <ItemMenu Key={key} ></ItemMenu> )} */}
            {/* <li className="menu active">
              <a
                href="#dashboard" 
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a> 
            </li> */}
 
   
 
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
