import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className='page2'style={{backgroundColor:'black'}}>
    {/* <button style={{backgroundColor:'black'}}><Link style={{textDecoration:'none',color:'white'}}>Home</Link></button> */}
    <button style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/home">Home</Link></button>&nbsp;
        <button  style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/about">About Us</Link></button>&nbsp;
        <button style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/contact">Contact</Link></button>&nbsp;
        <button  style ={{backgroundColor:'black'}} type=""><Link style={{textDecoration:'none',color:'white'}} to="/service">Services</Link></button>
        
    </div>
    <div>
    <h1 style={{fontFamily:'Aerial'}}>Welcome to About page</h1>
    </div>
    </>
  )
}

export default About