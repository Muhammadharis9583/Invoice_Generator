import React from "react";
import { useParams } from "react-router-dom";
import InvoiceLayout from "./InvoiceLayout";

export default function DisplayInvoice(){
    const {id} = useParams()
    return(
        <div>
            <InvoiceLayout 
                id = {id}
            />
        </div>
    )
}