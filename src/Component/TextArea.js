import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

export default function TextArea(props){
    return(
        <InputGroup style={props.styles}>
                <InputGroup.Text>
                    {props.label}
                </InputGroup.Text>
                <Form.Control
                    as="textarea"
                    value={props.val}
                    name={props.name}
                    onChange={(val)=>props.inputHandler(val.target.value,val.target.name)}
                />
        </InputGroup>

    )
}