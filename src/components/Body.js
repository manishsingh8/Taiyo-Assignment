import React, {useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./body.css";

import CancelIcon from '@mui/icons-material/Cancel';
import CreateContact from "./CreateContact";

const Body = () => {
      
    const [data,setData] = useState([]);
    const [visible,setVisible] = useState(true);
    const[show,setShow] = useState(true);
 
     const [showForm,setShowForm] = useState(false);
    const clickHandler =(e) =>{
        fetch("https://disease.sh/v3/covid-19/countries")
        .then(response=>{
            return response.json();
            })
        .then(item =>{
            // console.log(item);
            setData(item);
            });
        e.preventDefault();
            setVisible(false); 
              
    }
    const showComponent =()=>{
      setShowForm(!showForm);
      setVisible(false);
      setShow(false);
    }

  // console.log(data);
  return (
    <>
    <div className="body">
      <div className="cont">
        <div className="header">
          <h4>Contact Page</h4>
        </div>
        <div className="main">
          <div className="sidebar">
          <h5><a href="xyz" onClick={clickHandler}> Contact</a></h5>
            <hr />
            <h5><a href="xyz">Charts <br/>And <br/>Maps</a></h5>
            <hr/>
            <h5>Side Bar</h5>
          </div>
          {
            (visible)?
          (<div className="contact_details">
          <button type="button" className="btn btn-secondary" onClick={showComponent}><h3>Create Contact</h3></button>
          <div className="innerdiv">
          <div className="cancle_btn">
          <CancelIcon style={{fontSize:45,marginTop:"1rem"}} />
          </div>
          <h4>No Contact Found <br /> Please add contact from Create Contact Button</h4>
          </div>

          </div>):show?
           (   <div className="table_data">
                    <table className="table1">
                  <thead>
                <tr>
                    <td>Country</td>
                    <td>Active</td>
                    <td>Cases</td>
                </tr>
                </thead>
                <tbody>
                  {
                    data.map((curr,idx)=>(
                        <tr key={idx}>
                            <td>{curr.country}</td>
                            <td>{curr.active}</td>
                            <td>{curr.cases}</td>
                        </tr>
                    ))
                  }      
                  </tbody>           
              </table>
              </div>):""
          }
          
             {showForm ?(<CreateContact />):""}
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Body;
