import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");
    // This is the Control
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    function moreAttempts() {
        if (!isNaN(parseInt(request)))
            setAttempts(attempts + parseInt(request));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formMovieName">
                    <Form.Label>Attempts: {attempts}</Form.Label>
                    <Form.Control
                        type="number"
                        value={request}
                        onChange={updateRequest}
                    />
                </Form.Group>
                <div>
                    <Button
                        onClick={() => setAttempts(attempts - 1)}
                        disabled={attempts <= 0}
                    >
                        use
                    </Button>
                    <Button onClick={moreAttempts}>gain</Button>
                </div>
            </div>
        </div>
    );
}
