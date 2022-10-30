import React from "react";
import { Button, Container, Row, Col,ButtonGroup } from "react-bootstrap";
import ViewButton from "./ViewButton";
import ButtonUpdate from "./ButtonUpdate";

export default function InvoiceTable(props) {
    const invoicesData = props.invoicesData
    return (
        <Container>
            <Row>
                <Col>Invoices Id</Col>
                <Col>Invoices Description</Col>
                <Col>Actions</Col>
            </Row>
            {
                invoicesData.map((items,index) => {
                    return (
                        <Row key={"index-"+index}>
                            <Col>{items.id}</Col>
                            <Col>{items.description}</Col>
                            <Col>
                                <ButtonGroup>
                                    <Button variant="danger" onClick={()=>props.handleDelete(items.id)}>Delete</Button>
                                    <ViewButton 
                                        id={items.id}
                                    />
                                    <ButtonUpdate 
                                        id={items.id}
                                    />
                                </ButtonGroup>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}