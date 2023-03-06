import React , {useState} from "react";
// this will hold all functions temporarily



function Game() {
    const [score , setscore] = useState(0)
    const [bestscore , setBestscore] = useState(0)
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);
    const [count8, setCount8] = useState(0);
    const [count9, setCount9] = useState(0);
    const [count10, setCount10] = useState(0);
    const [count11, setCount11] = useState(0);
    const [count12, setCount12] = useState(0);

    const [showRules, setShowRules] = useState(true)
    const [blurapp, setBlurapp] = useState(false)

    let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
    let clearscore = () => {
        setscore(score-score)
        setCount1(count1 - count1)
        setCount2(count2 - count2);
        setCount3(count3 - count3);
        setCount4(count4 - count4);
        setCount5(count5 - count5);
        setCount6(count6 - count6);
        setCount7(count7 - count7);
        setCount8(count8 - count8);
        setCount9(count9 - count9);
        setCount10(count10 - count10);
        setCount11(count11 - count11);
        setCount12(count12 - count12);
    }
    let clicked = (e) => {
      if (e.target.id === '1') {
        setCount1(count1 + 1);
        console.log(imgcontainer[1]['count']);
        if(count1 === 0) {
            setscore(score+ 1)
            setCount1(count1+1)
            if(score >= bestscore) {
                setBestscore(bestscore + 1)
            }
        } else {
            clearscore()
        }
      } else if (e.target.id === '2') {
        setCount2(count2 + 1);
        console.log(imgcontainer[2]['count']);
        if (count2 === 0) {
          setscore(score + 1);
          setCount2(count2 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore()
        }
      } else if (e.target.id === '3') {
        setCount3(count3 + 1);
        console.log(imgcontainer[3]['count']);
        if (count3 === 0) {
          setscore(score + 1);
          setCount2(count3 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore()
        }
      } else if (e.target.id === '4') {
        setCount4(count4 + 1);
        console.log(imgcontainer[4]['count']);
        if (count4 === 0) {
          setscore(score + 1);
          setCount4(count4 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '5') {
        setCount5(count5 + 1);
        console.log(imgcontainer[5]['count']);
        if (count5 === 0) {
          setscore(score + 1);
          setCount5(count5 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '6') {
        setCount6(count6 + 1);
        console.log(imgcontainer[6]['count']);
        if (count6 === 0) {
          setscore(score + 1);
          setCount6(count6 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '7') {
        setCount7(count7 + 1);
        console.log(imgcontainer[7]['count']);
       if (count7 === 0) {
         setscore(score + 1);
         setCount7(count7 + 1);
         if (score >= bestscore) {
           setBestscore(bestscore + 1);
         }
       } else {
         clearscore();
       }
      } else if (e.target.id === '8') {
        setCount8(count8 + 1);
        console.log(imgcontainer[8]['count']);
        if (count8 === 0) {
          setscore(score + 1);
          setCount8(count8 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '9') {
        setCount9(count9 + 1);
        console.log(imgcontainer[9]['count']);
        if (count9 === 0) {
          setscore(score + 1);
          setCount9(count9 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '10') {
        setCount10(count10 + 1);
        console.log(imgcontainer[10]['count']);
        if (count10 === 0) {
          setscore(score + 1);
          setCount10(count10 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      } else if (e.target.id === '11') {
        setCount11(count11 + 1);
        console.log(imgcontainer[11]['count']);
        if (count11 === 0) {
          setscore(score + 1);
          setCount11(count11 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
            clearscore();
        }
      } else if (e.target.id === '12') {
        setCount12(count12 + 1);
        console.log(imgcontainer[12]['count']);
        if (count12 === 0) {
          setscore(score + 1);
          setCount12(count12 + 1);
          if (score >= bestscore) {
            setBestscore(bestscore + 1);
          }
        } else {
          clearscore();
        }
      }
    };

    let generator = (generated) => {
        return (
            <div>
                <div className="score">
                    <button>Rules</button>
                    <h1> Score = {score} Best Score = {bestscore} </h1>
                </div>
                <div className="main">
                    <div className="card" id="one">
                        <img onClick={clicked} src={imgcontainer[generated[0]]['url']} alt="1" id={generated[0]}
                        ></img>
                    </div>
                    <div className="card" id="two">
                        <img onClick={clicked} src={imgcontainer[generated[1]]['url']} alt="2" id={generated[1]}></img>
                    </div>
                    <div className="card" id="three">
                        <img onClick={clicked} src={imgcontainer[generated[2]]['url']} alt="3" id={generated[2]}></img>
                    </div>
                    <div className="card" id="four">
                        <img onClick={clicked} src={imgcontainer[generated[3]]['url']} alt="4" id={generated[3]}></img>
                    </div>
                    <div className="card" id="five">
                        <img onClick={clicked} src={imgcontainer[generated[4]]['url']} alt="5" id={generated[4]}></img>
                    </div>
                    <div className="card" id="six">
                        <img onClick={clicked} src={imgcontainer[generated[5]]['url']} alt="6" id={generated[5]}></img>
                    </div>
                    <div className="card" id="seven">
                        <img onClick={clicked} src={imgcontainer[generated[6]]['url']} alt="7"id={generated[6]}></img>
                    </div>
                    <div className="card" id="eight">
                        <img onClick={clicked} src={imgcontainer[generated[7]]['url']} alt="8" id={generated[7]}></img>
                    </div>
                    <div className="card" id="nine">
                        <img onClick={clicked} src={imgcontainer[generated[8]]['url']} alt="9" id={generated[8]}></img>
                    </div>
                    <div className="card" id="ten">
                        <img onClick={clicked} src={imgcontainer[generated[9]]['url']} alt="10"id={generated[9]}></img>
                    </div>
                    <div className="card" id="eleven">
                        <img onClick={clicked} src={imgcontainer[generated[10]]['url']} alt="11" id={generated[10]}></img>
                    </div>
                    <div className="card" id="twelve">
                        <img onClick={clicked} src={imgcontainer[generated[11]]['url']} alt="12" id={generated[11]}></img>
                    </div>
                </div>
            </div>
         );
    }
    let random = () => {
        let generated = [];
            for (let i = 0; i < original.length; i++) {
                let current = Math.floor(Math.random() * 12);
                if (generated.includes(original[current]) === false) {
                    generated.push(original[current]);
                } else {
                    i--;
                }
           
        }
        return (generator(generated))
    }
    return (
      <div>
        {random()}
        {showRules ? <div className="rules">hi</div> : ''}
      </div>
    );
}   

export default Game