import React from "react";
import {Container,Row,Col} from 'react-bootstrap'

export default function(props){
    const products = props.productList
    return(
        <Container>
            {
                products.map((item,index)=>{
                    return(
                    <Row key={"index-"+index}>
                        <Col><h6>{item.description}</h6></Col>
                        <Col><h6>${item.price}</h6></Col>
                    </Row>
                    )
                })
            }
        </Container>
    )
}