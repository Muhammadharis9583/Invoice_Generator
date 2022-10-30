import React from "react";
import { Container, Col ,Row, Button } from "react-bootstrap";
import Textfield from "./Textfield";

export default function AddProduct(props){
    return(
        <Container>
            <Row>
                <Col>
                    <Textfield
                        customId="product-desc"
                        label="Product Description"
                        name="productDesc"
                        placeholder="Enter product description"
                        handleChange= {props.handleChange}
                    />
                </Col>
                <Col>
                <Textfield
                        customId="product-price"
                        label="Price"
                        name="productPrice"
                        placeholder="Enter product price"
                        handleChange= {props.handleChange}
                    />
                </Col>
                <Col>
                    <Button variant="dark" size="lg" style={{marginTop:'2em'}} onClick={props.buttonHandler}>
                        Submit item
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}