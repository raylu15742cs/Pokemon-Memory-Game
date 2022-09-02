import Generator from "./Generator"
let original = [1,2,3,4,5,6,7,8,9,10,11,12]


let  Random = (count) => {


    let generated = [];
    for(let i = 0; i < original.length ; i++) {
        let current = Math.floor(Math.random() * 12) 
        if(generated.includes(original[current]) === false) {
            generated.push(original[current])
        } else {
            i--
        }
    
        
    }
    return (
        <Generator test={generated}/>
    )
}


export default Random;