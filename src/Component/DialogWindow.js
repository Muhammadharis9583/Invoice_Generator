import React from "react";
import { Modal,Button } from "react-bootstrap";

export default function DialogWindow(props){
    return(
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size="lg" onClick={props.handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>
    )
}