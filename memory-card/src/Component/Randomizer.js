let original = [1,2,3,4,5,6,7,8,9,10,11,12]

let imgcontainer = {
  1: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  2: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  3: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  4: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  5: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  6: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  7: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  8: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  9: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  10: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  11: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
  12: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
};

let  Random = () => {
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
        Generator(generated)
    )
}

let clicked = (e) => {
    console.log(e.target.className)
    let cool = document.getElementById(e.target.id)
    cool.classList.add("clicked")
    Random()
}

let Generator = (generated) => {
    return (
      <div className="main">
        <div className="card" id="one">
          <img onClick={clicked} src={imgcontainer[generated[0]]} alt="1" id="coolbean"></img>
        </div>
        <div className="card" id="two">
          <img src={imgcontainer[generated[1]]} alt="2"></img>
        </div>
        <div className="card" id="three">
          <img src={imgcontainer[generated[2]]} alt="3"></img>
        </div>
        <div className="card" id="four">
          <img src={imgcontainer[generated[3]]} alt="4"></img>
        </div>
        <div className="card" id="five">
          <img src={imgcontainer[generated[4]]} alt="5"></img>
        </div>
        <div className="card" id="six">
          <img src={imgcontainer[generated[5]]} alt="6"></img>
        </div>
        <div className="card" id="seven">
          <img src={imgcontainer[generated[6]]} alt="7"></img>
        </div>
        <div className="card" id="eight">
          <img src={imgcontainer[generated[7]]} alt="8"></img>
        </div>
        <div className="card" id="nine">
          <img src={imgcontainer[generated[8]]} alt="9"></img>
        </div>
        <div className="card" id="ten">
          <img src={imgcontainer[generated[9]]} alt="10"></img>
        </div>
        <div className="card" id="eleven">
          <img src={imgcontainer[generated[10]]} alt="11"></img>
        </div>
        <div className="card" id="twelve">
          <img src={imgcontainer[generated[11]]} alt="12"></img>
        </div>
      </div>
    );
}

export default Random;