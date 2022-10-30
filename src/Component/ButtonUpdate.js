import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonUpdate(props){
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/updateInvoice/'+props.id)
    }
    return(
        <Button
        variant="primary"
        onClick={()=>handleClick()}
        >Update Invoice</Button>
    )
}