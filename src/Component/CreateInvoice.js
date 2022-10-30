import React from "react";
import  Card from "react-bootstrap/Card";
import Layout from "./Layout";

export default function CreateInvoice(){
    return(
        <div className="container-fluid bg-secondary p-5">
            <Card bg="dark" text="white">
                <Card.Header as='h3'>Create Invoice Form</Card.Header>
                <Card.Body style={{color:'black'}}>
                    <Layout/>
                </Card.Body>
            </Card>
        </div>
    )
}