import React, { Component ,useState} from 'react';
import SearchExpert from "../DashbordComponents/SearchExpert";
import ProfileExpert from "../DashbordComponents/ProfileExpert";
import Barchart from "../Chart/chart";
import '../../Css/DashbordExpert.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import BasicTable from '../ReactTable/BasicTable';


export function DashbordExpert() {
    
    {
        const [selectedDate,setSelectedDate]=useState(null)
        const [selectedDateTo,setSelectedDateTo]=useState(null)

        return(
            <div>
                <div className="row">
                <SearchExpert/>
                </div>
                <hr />
                
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    
                           <div className="select-container">
                           <select class="form-control " id="exampleFormControlSelect1">
                            <option >Settings</option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            </select>         
                           </div>
                           
                
                    </div>
                      
                </div>
                <div className="row">
                    <div className="col-md-2"><ProfileExpert /> <div class="vl"></div>
 </div>
                    <div className="col-md-10 m-0 p-0">
                   <div className="col-md-5">
                    <Barchart/>
                    </div>
                    
                    <div className="col-md-5 inputs">
                    
                      
                       <DatePicker selected={selectedDate}
                        onChange={date =>setSelectedDate(date)} 
                       
                        minDate={new Date()}
                        filterDate={date =>date.getDay() != 6 && date.getDay() != 0}
                       
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText='From :'
                        withPortal
                        />
                     
                       
                        <DatePicker selected={selectedDateTo}
                        onChange={date =>setSelectedDateTo(date)} 
                       
                        minDate={new Date()}
                        filterDate={date =>date.getDay() != 6 && date.getDay() != 0}
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText='To  :'
                        withPortal
                        
                        />
                      
                   
               
                </div>
                <div className="row">
                <BasicTable/>
                </div>
                    </div>  
                </div>
                       
             
                 
                
             </div>
          
            
        )
    }
}

export default DashbordExpert ;