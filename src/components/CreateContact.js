import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './createcontact.css';

const CreateContact = () => {
   
    const[data,setData] = useState({
           fname:"",
           lname:""
    });

    const changeHandler =(event)=>{
            setData({
                ...data,
                [event.target.name]:event.target.value
            });
    }
    const clickHandler=()=>{      
       setData({
        fname:'',
        lname:''
       });
    //    alert("your data saved successfully!!");
    }
  return (
    <>
      <div className='create_cont'>
        <h3>Create Contact Screen</h3>
     <div className='user_details'>
             <form>
           <span style={{fontWeight:"bold"}}>First Name:</span>
           <input type='text' name='fname' required value={data.fname} onChange={changeHandler}/>
           <br/><br/>
           <span style={{fontWeight:"bold"}}>
           Last Name:
           </span>
           <input type='text' name='lname' required value={data.lname} onChange={changeHandler} />
           <br/>
           <br />
          <span style={{fontWeight:"bold",marginLeft:'2rem'}}>Status:</span> 
           <input type='radio'  name='status' checked/>
           Active
           <br />
           <span style={{marginLeft:'5.2rem'}}>
           <input type='radio' name ="status" />
           Inactive         
           </span>
           </form>
     </div>
     <button type="submit" className="btn btn-secondary" onClick={clickHandler}><h3>Save Contact</h3></button>

      </div>

    </>
  )
}

export default CreateContact;
