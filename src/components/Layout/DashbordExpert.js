import React , {Component} from 'react';
import Search from "../DashbordComponents/Search";
import Profile from "../DashbordComponents/Profile";


class DashbordExpert extends Component {
    render() {
        return (
           <div>
              <Search /> 
         
              <Profile />
             
           </div>

        );
    }
}
export default DashbordExpert ;