import React from "react";
import Random from "./Randomizer";

// main holder for 12 cards

function Main() {
    
    return (
        <div>
            <button onClick={<Random />}></button>
            <Random />
        </div>
    )
}


export default Main;