import React from "react";
import { Container,Col,Row } from "react-bootstrap";

export default function FinalPrice(params) {
    var final = 0;
    var productList = params.productList;
    productList.map((items)=>{
        final = final + items.price
    })
    return(
        <Container>
            <Row>
                <Col>
                <h4>${final}</h4>
                </Col>
            </Row>
        </Container>
    )
  }