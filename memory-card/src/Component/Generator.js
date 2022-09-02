import React, { useState } from "react";

let Generator = (generated) => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9]= useState(0);
  const [count10, setCount10] = useState(0);
  const [count11, setCount11] = useState(0);
  const [count12, setCount12] = useState(0);

  let imgcontainer = {
    1: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', count: count1},
    2: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', count: count2},
    3: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', count: count3},
    4: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', count: count4},
    5: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', count: count5},
    6: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', count: count6},
    7: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', count: count7},
    8: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', count: count8},
    9: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', count: count9},
    10: {url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', count: count10},
    11:{url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', count: count11},
    12:{url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', count: count12},
  };
  let clicked = (e) => {
      if (e.target.id === "1") {
        setCount1(count1 + 1);
        console.log(imgcontainer[1]['count']);
      } else if (e.target.id === "2") {
        setCount2(count2 + 1);
        console.log(imgcontainer[2]['count']);
      } else if (e.target.id === "3") {
        setCount3(count3 + 1);
        console.log(imgcontainer[3]['count']);
      } else if (e.target.id === "4") {
        setCount4(count4 + 1);
        console.log(imgcontainer[4]['count']);
      } else if (e.target.id === "5") {
        setCount5(count5 + 1);
        console.log(imgcontainer[5]['count']);
      } else if (e.target.id === "6") {
        setCount6(count6 + 1);
        console.log(imgcontainer[6]['count']);
      } else if (e.target.id === "7") {
        setCount7(count7 + 1);
        console.log(imgcontainer[7]['count']);
      } else if (e.target.id === "8") {
        setCount8(count8 + 1);
        console.log(imgcontainer[8]['count']);
      } else if (e.target.id === "9") {
        setCount9(count9 + 1);
        console.log(imgcontainer[9]['count']);
      } else if (e.target.id === "10") {
        setCount10(count10 + 1);
        console.log(imgcontainer[10]['count']);
      } else if (e.target.id === "11") {
        setCount11(count11 + 1);
        console.log(imgcontainer[11]['count']);
      } else if (e.target.id === "12") {
        setCount12(count12 + 1);
        console.log(imgcontainer[12]['count']);
      }
    };
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