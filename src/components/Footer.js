import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
const Footer = () => {
    const style ={
        margin: "auto",
        textAlign: "center"
    }
    return (
        <Navbar bg="light" variant="dark" fixed="bottom" expand="lg" >
        <h3 style={style}>
         BabyEats <br></br>
         We are here to help you organize your baby meals.   
        </h3>  
        </Navbar>
     
    )
}

export default Footer
