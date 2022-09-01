let original = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8, 9 , 10 , 11 , 12 ]
let generated = [];

const Random = () => {
    for(let i = 0; i < original.length ; i++) {
        generated.push(i)
    }

    return ( <div> {generated}</div>

    )
}

export default Random;