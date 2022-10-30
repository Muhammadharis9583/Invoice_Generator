import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomeToAll(){
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/allInvoice')
    }
    return(
        <Button
        variant="danger"
        size="lg"
        onClick={()=>handleClick()}
        >Back to All Invoices</Button>
    )
}