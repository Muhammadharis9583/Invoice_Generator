import React from "react";

import ButtonToCreate from "./ButtonToCreate";
import HomeToAll from "./HomeToAll";
import { Card } from "react-bootstrap";

export default function HomeLayout() {
    return (
        <div className="container-fluid bg-secondary p-5">
            <Card>
                <Card.Header as={'h1'}>
                    Welcome to Invoice Generator
                </Card.Header>
                <Card.Body>
                    <p>Press one of the button below</p>
                    <ButtonToCreate />
                    {"  "}
                    <HomeToAll />
                </Card.Body>
            </Card>

        </div>
    )
}