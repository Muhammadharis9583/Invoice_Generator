import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ViewButton(props){
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/displayInvoice/'+props.id)
        console.log(props.id)
    }
    return(
        <Button variant="warning" onClick={()=>handleClick()}>
            View Invoice
        </Button>
    )
}