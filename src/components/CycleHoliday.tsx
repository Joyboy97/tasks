import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type holiDay =
    | "Christmas"
    | "Halloween"
    | "Resurection_Day"
    | "New_Years_Eve"
    | "Juneteenth";
export function CycleHoliday(): JSX.Element {
    const [day, setDay] = useState<holiDay>("Resurection_Day");
    const chronoHoliday: Record<holiDay, holiDay> = {
        Resurection_Day: "Juneteenth",
        Juneteenth: "Halloween",
        Halloween: "Christmas",
        Christmas: "New_Years_Eve",
        New_Years_Eve: "Resurection_Day"
    };

    const alphaHoliday: Record<holiDay, holiDay> = {
        Christmas: "Halloween",
        Halloween: "Juneteenth",
        Juneteenth: "Resurection_Day",
        Resurection_Day: "New_Years_Eve",
        New_Years_Eve: "Christmas"
    };
    const emoji: Record<holiDay, string> = {
        Christmas: "🎄",
        Halloween: "🎃",
        Resurection_Day: "✝️",
        New_Years_Eve: "🎆",
        Juneteenth: "✊🏿"
    };
    function nextAlpha(): void {
        setDay(alphaHoliday[day]);
    }
    function nextChrono(): void {
        setDay(chronoHoliday[day]);
    }

    return (
        <>
            <div>Cycle Holiday</div>
            <div>
                <span>
                    <Button onClick={nextAlpha}>
                        Next holiday in Alphabet
                    </Button>
                </span>
                <span>
                    <Button onClick={nextChrono}>Next holiday in Year</Button>
                </span>
                Holiday: {emoji[day]}
            </div>
        </>
    );
}
