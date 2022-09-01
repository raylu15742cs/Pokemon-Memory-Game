let original = [1,2,3,4,5,6,7,8,9,10,11,12]

let  Random = () => {
    let generated = [];
    for(let i = 0; i < original.length ; i++) {
        let current = Math.floor(Math.random() * 12) 
        generated.push(current)
        
    }

    return (
        generated
    )
}

export default Random;