import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "brown",
    "grey"
];
export function ChangeColor(): JSX.Element {
    const [colored, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={"color" + color}
                    type="radio"
                    onChange={(e) => setColor(e.target.value)}
                    label={color}
                    value={color}
                    style={{ backgroundColor: color }}
                    checked={colored === color}
                />
            ))}
            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colored }}
                >
                    {" " + colored}
                </span>{" "}
            </div>
        </div>
    );
}
