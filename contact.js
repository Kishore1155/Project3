import React from 'react'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <div style={{backgroundColor:'black'}}>&nbsp;
    <button style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/home">Home</Link></button>&nbsp;
    <button  style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/about">About Us</Link></button>&nbsp;
    <button style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/contact">Contact</Link></button>&nbsp;
    <button  style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/service">Services</Link></button>
</div>
<div>
  <h4 style={{fontFamily:'Aerial'}}>Welcome to contact page</h4>
</div>
</>
  )
}

export default Contact