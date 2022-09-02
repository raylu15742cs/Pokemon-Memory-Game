import React from "react";

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
  12:{url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', count: 0},
};
let clicked = (e) => {
  console.log(e);
  imgcontainer[e.target.id]['count'] += 1;
  console.log(imgcontainer[e.target.id]['count']);
};

let Generator = (generated) => {
    console.log(generated.test[0])
  return (
    <div className="main">
      <div className="card" id="one">
        <img onClick={clicked} src={imgcontainer[generated.test[0]]['url']} alt="1" id={generated.test[0]}
        ></img>
      </div>
      <div className="card" id="two">
        <img onClick={clicked} src={imgcontainer[generated.test[1]]['url']} alt="2" id={generated.test[1]}></img>
      </div>
      <div className="card" id="three">
        <img onClick={clicked} src={imgcontainer[generated.test[2]]['url']} alt="3" id={generated.test[2]}></img>
      </div>
      <div className="card" id="four">
        <img onClick={clicked} src={imgcontainer[generated.test[3]]['url']} alt="4" id={generated.test[3]}></img>
      </div>
      <div className="card" id="five">
        <img onClick={clicked} src={imgcontainer[generated.test[4]]['url']} alt="5" id={generated.test[4]}></img>
      </div>
      <div className="card" id="six">
        <img onClick={clicked} src={imgcontainer[generated.test[5]]['url']} alt="6" id={generated.test[5]}></img>
      </div>
      <div className="card" id="seven">
        <img onClick={clicked} src={imgcontainer[generated.test[6]]['url']} alt="7"id={generated.test[6]}></img>
      </div>
      <div className="card" id="eight">
        <img onClick={clicked} src={imgcontainer[generated.test[7]]['url']} alt="8" id={generated.test[7]}></img>
      </div>
      <div className="card" id="nine">
        <img onClick={clicked} src={imgcontainer[generated.test[8]]['url']} alt="9" id={generated.test[8]}></img>
      </div>
      <div className="card" id="ten">
        <img onClick={clicked} src={imgcontainer[generated.test[9]]['url']} alt="10"id={generated.test[9]}></img>
      </div>
      <div className="card" id="eleven">
        <img onClick={clicked} src={imgcontainer[generated.test[10]]['url']} alt="11" id={generated.test[10]}></img>
      </div>
      <div className="card" id="twelve">
        <img onClick={clicked} src={imgcontainer[generated.test[11]]['url']} alt="12" id={generated.test[11]}></img>
      </div>
    </div>
  );
};

export default Generator