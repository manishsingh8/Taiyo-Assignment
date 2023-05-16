import React from 'react'
import './body.css';


const Body = () => {
  return (
    <>
        <div className="container">
            <div className='header'>
            <h1>Contact Page</h1>
            </div>
            <div className='main'>
            <div className='sidebar'>
               <h1>Contact</h1>
               <hr />
               <h2>Charts And Maps</h2>
               </div>     
                <div className='contact_details'>
                      <button>Create Contact</button>
                </div>
           
            </div>
        </div>
    </>
  )
}

export default Body;
