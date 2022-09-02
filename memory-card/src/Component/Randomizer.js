let original = [1,2,3,4,5,6,7,8,9,10,11,12]

let imgcontainer = {
  1: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', count: 0},
  2: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', count: 0},
  3: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', count: 0},
  4: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', count: 0},
  5: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', count: 0},
  6: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', count: 0},
  7: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', count: 0},
  8: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', count: 0},
  9: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', count: 0},
  10: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', count: 0},
  11:{url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', count: 0},
  12:{url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', count: 1},
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
    console.log(e.target.id)
    imgcontainer[e.target.id]['count'] += 1
    console.log(imgcontainer[e.target.id]['count'])
}

let Generator = (generated) => {
    return (
      <div className="main">
        <div className="card" id="one">
          <img onClick={clicked} src={imgcontainer[generated[0]]['url']} alt="1" id={generated[0]}></img>
        </div>
        <div className="card" id="two">
          <img src={imgcontainer[generated[1]]['url']} alt="2"></img>
        </div>
        <div className="card" id="three">
          <img src={imgcontainer[generated[2]]['url']} alt="3"></img>
        </div>
        <div className="card" id="four">
          <img src={imgcontainer[generated[3]]['url']} alt="4"></img>
        </div>
        <div className="card" id="five">
          <img src={imgcontainer[generated[4]]['url']} alt="5"></img>
        </div>
        <div className="card" id="six">
          <img src={imgcontainer[generated[5]]['url']} alt="6"></img>
        </div>
        <div className="card" id="seven">
          <img src={imgcontainer[generated[6]]['url']} alt="7"></img>
        </div>
        <div className="card" id="eight">
          <img src={imgcontainer[generated[7]]['url']} alt="8"></img>
        </div>
        <div className="card" id="nine">
          <img src={imgcontainer[generated[8]]['url']} alt="9"></img>
        </div>
        <div className="card" id="ten">
          <img src={imgcontainer[generated[9]]['url']} alt="10"></img>
        </div>
        <div className="card" id="eleven">
          <img src={imgcontainer[generated[10]]['url']} alt="11"></img>
        </div>
        <div className="card" id="twelve">
          <img src={imgcontainer[generated[11]]['url']} alt="12"></img>
        </div>
      </div>
    );
}

export default Random;