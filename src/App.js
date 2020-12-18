import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Meetings from "./components/SideBar/Meetings";
import Messages from "./components/SideBar/Messages";
import Calender from "./components/SideBar/Calender";
import Settings from "./components/SideBar/Settings";
import Payement from "./components/SideBar/Payement";
import DashbordEntrepreneur from "./components/Layout/DashbordEntrepreneur";
import HomePage from './components/HomePage';
import {DashbordExpert} from  './components/Layout/DashbordExpert';
import {FormSignup} from "./components/Forms/FormSignup";
import {Login} from "./components/Forms/Login";
import {Custumers} from "./components/SideBar/Custumers"
import {Sales} from "./components/SideBar/Sales"
import {Reports} from "./components/SideBar/Reports"


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
             <Route path="/Expert" component={DashbordExpert} />
             <Route path="/Entrepreneur" component={DashbordEntrepreneur} />
            <Route exact path="/login"  component={Login} />
           <Route exact path="/SignUp"  component={FormSignup} />
           <Route path="/custumers" component={Custumers} />
           <Route path="/sales" component={Sales} />
           <Route path="/reports" component={Reports} />




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