import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    // const rolls=0;
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(6);
    //const [bothrolled, setBothRolled] = useState<boolean>(true);
    function rollDice1(): void {
        setDice1(d6);
        //rolls=(rolls===1)? 0:1;
    }
    function rollDice2(): void {
        setDice2(d6);
    }
    return (
        <>
            <div>
                <span data-testid="left-die">
                    {" "}
                    <Button onClick={rollDice1}>Roll Left {dice1}</Button>
                </span>

                <span data-testid="right-die">
                    <Button onClick={rollDice2}>Roll Right {dice2}</Button>
                </span>
            </div>
            {dice1 === dice2 && dice1 !== 1 && <div>You Win</div>}
            {dice1 === dice2 && dice1 === 1 && <div>You Lose</div>}
        </>
    );
}
