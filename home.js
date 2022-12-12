import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
        <div className='home' style={{ backgroundColor: 'black' }}>&nbsp;
            <button style={{ backgroundColor: 'black' }} type=""><Link style={{ textDecoration: 'none', color: 'white',fontFamily:'Aerial',fontSize:'20px' }} to="/home">Home</Link></button>&nbsp;
            <button style={{ backgroundColor: 'black' }} type=""><Link style={{ textDecoration: 'none', color: 'white' ,fontFamily:'Aerial',fontSize:'20px'}} to="/about">About Us</Link></button>&nbsp;
            <button style={{ backgroundColor: 'black' }} type=""><Link style={{ textDecoration: 'none', color: 'white',fontFamily:'Aerial' ,fontSize:'20px'}} to="/contact">Contact</Link></button>&nbsp;
            <button style={{ backgroundColor: 'black' }} type=""><Link style={{ textDecoration: 'none', color: 'white',fontFamily:'Aerial',fontSize:'20px' }} to="/service">Services</Link></button>
          
        </div>
   <div>
   <h4 style={{fontFamily:'Aerial'}} >Welcome to our RockStarGames</h4>
   </div>
        </>


    )

}

export default Home