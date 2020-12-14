import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Meetings from "./components/SideBar/Meetings";
import Messages from "./components/SideBar/Messages";
import Calender from "./components/SideBar/Calender";
import Settings from "./components/SideBar/Settings";
import Payement from "./components/SideBar/Payement";
import DashbordExpert from "./components/Layout/DashbordExpert";
import HomePage from './components/HomePage';
import {Entrepreneur} from  './components/Layout/Entrepreneur';
import {FormSignup} from "./components/Forms/FormSignup";
import {Login} from "./components/Forms/Login";

class App extends Component {
  render(){
  return (
    <BrowserRouter>
        <div>
        
       
         
          {/* <DashboardAdmin/> */}

        

          <div className="container-fluid">

             
              <Route exact path="/" component={HomePage} />
              <Route path="/meetings" component={Meetings} />
              <Route path="/messages" component={Messages} />
              <Route path="/calender" component={Calender} />
              <Route path="/settings" component={Settings} />
              <Route path="/payement" component={Payement} />
             <Route path="/Entrepreneur" component={Entrepreneur} />
             <Route path="/Expert" component={DashbordExpert} />
            <Route exact path="/login"  component={Login} />
           <Route exact path="/SignUp"  component={FormSignup} />

          </div>
        


        {/* <Router>
          <Switch>
          <Route exact path="/admin" component={DashboardAdmin} />
          <Route exact path="/meetings" component={Meetings}/>
        
        </Switch>
        </Router>*/}
        
          </div>
    </BrowserRouter>
  );
}}

export default App;