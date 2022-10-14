import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editmode, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // This is the Control
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Group controlId="edits">
                    <Form.Check
                        type="switch"
                        id="is-editmode-check"
                        label="Edit-Mode?"
                        checked={editmode}
                        onChange={updateEditMode}
                    />
                    {editmode && (
                        <>
                            <Form.Control value={name} onChange={updateName} />
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label="Student?"
                                checked={isStudent}
                                onChange={updateStudent}
                            />
                        </>
                    )}
                </Form.Group>
                {!editmode && (
                    <div>
                        {" "}
                        {name} {isStudent ? "is a student" : "is not a student"}
                        .
                    </div>
                )}
            </div>
        </div>
    );
}
