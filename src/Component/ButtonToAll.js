import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonToAll(){
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/allInvoice')
    }
    return(
        <Button
        variant="warning"
        size="lg"
        onClick={()=>handleClick()}
        >Back to All Invoices</Button>
    )
}