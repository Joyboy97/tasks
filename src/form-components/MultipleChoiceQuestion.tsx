import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Answer options">
                <Form.Label>Question 1:</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                >
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div> {choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
