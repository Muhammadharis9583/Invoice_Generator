import React from "react";
import { Card } from "react-bootstrap";

export default function(props){
    return(
        <Card>
            <Card.Header as={'h4'}>
                {props.title}
            </Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    )
}