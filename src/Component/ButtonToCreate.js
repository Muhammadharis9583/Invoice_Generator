import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonToCreate(){
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/createInvoice')
    }
    return(
        <Button variant="warning" onClick={()=>handleClick()} size='lg'>
            Create a new Invoice
        </Button>
    )
}