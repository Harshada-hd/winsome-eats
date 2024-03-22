// import logo from './logo.svg';
import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./Eatslogo.png" alt="image1" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body=()=>{
  return(
    <div className="body">
     <div className="search"> Search </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

export default AppLayout;
// export default AppLayout;
