import React from "react";
import Form from 'react-bootstrap/Form'

export default function Textfield(props){
    return(
        <Form.Group controlId={props.customId}>
            <Form.Label>
                <h5>
                    {props.label}
                </h5>
            </Form.Label>
            <Form.Control type="text" name={props.name}  placeholder={props.placeholder} value={props.val} onChange={(val)=>props.handleChange(val.target.value,val.target.name)} />
            <Form.Text>
                {props.text}
            </Form.Text>
        </Form.Group>
    )
}