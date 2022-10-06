import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function change(): void {
        setType(
            type === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <span>
            <Button onClick={change}>Change Type</Button>
            <div>
                {type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </div>
        </span>
    );
}
