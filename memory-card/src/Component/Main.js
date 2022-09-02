import React , {useState} from "react";
import Random from "./Randomizer";

// main holder for 12 cards

function Main() {
    const [count , setCount] = useState(0)
    let randomclick = () => {
        setCount(count+1);
        <Random count={count}/>

    }
    return (
        <div>
            <button onClick={randomclick}>Hi</button>
            <Random/>
        </div>
    )
}


export default Main;