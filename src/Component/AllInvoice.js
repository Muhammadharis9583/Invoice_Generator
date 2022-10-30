import React from "react";
import InvoicesLayout from "./InvoicesLayout";
import { Card } from "react-bootstrap";

export default function AllInvoice() {
    return (
        <Card bg="dark" text="white" className="text-center">
            <Card.Header as={'h3'}>
                Invoices Listing
            </Card.Header>
            <Card.Body>
                <InvoicesLayout />
            </Card.Body>
        </Card>
    )
}