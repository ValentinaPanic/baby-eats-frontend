import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";


const WelcomePage = () => {
    return (
        <div>
       
        <Card className="text-center" >
          
           <Card.Header>WELCOME</Card.Header>
             <Card.Body>
               Please <Link to='/signup'> Sign Up </Link> or <Link to='/login'> Log In </Link>
          </Card.Body>
        
        </Card>
         
        </div>
    )
}

export default WelcomePage
