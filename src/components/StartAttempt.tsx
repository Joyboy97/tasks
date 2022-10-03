import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);
    function deactivateQuiz(): void {
        setActive(!active);
        if (active) setAttempt(attempt - 1);
    }
    return (
        <span>
            {
                <Button
                    onClick={() => setAttempt(1 + attempt)}
                    disabled={active}
                >
                    Mulligan
                </Button>
            }
            {!active && <div>{attempt} attempts left</div>}
            {active && <div>Quiz active</div>}
            {attempt === 0 && <div>No More Attempts!</div>}
            {
                <Button
                    onClick={deactivateQuiz}
                    disabled={active || attempt < 1}
                >
                    Start Quiz
                </Button>
            }
            {
                <Button
                    onClick={deactivateQuiz}
                    disabled={!active || attempt < 0}
                >
                    Stop Quiz
                </Button>
            }
        </span>
    );
}
// does this work
