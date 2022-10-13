import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isHappy, setIsHappy] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {
        setIsHappy(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-happy-check"
                    label="Happy?"
                    checked={isHappy}
                    onChange={updateHappiness}
                />
                <div>The user is {isHappy ? "happy" : "not happy"}.</div>
            </div>
        </div>
    );
}
