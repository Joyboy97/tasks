import { useState } from "react";
interface dhstates {
    // The type is "a function that consumes a boolean and returns nothing"
    setDhValue: (newdhValue: number) => void;
    dhValue: number;
}
