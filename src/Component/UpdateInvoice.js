import React from "react";
import { useParams } from "react-router-dom";
import InvoiceUpdate from "./InvoiceUpdate";

export default function UpadteInvoice(){
    const {id} = useParams()
    return(
        <InvoiceUpdate
            id={id}
        />
    )
}