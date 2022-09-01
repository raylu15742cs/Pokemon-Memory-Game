import Random from "./Randomizer"

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
// tracks clicked and reset count

const Tracker = () => {
    return (
      <div className="card" id="onse">
        <img
          src={imgcontainer[1]}
          alt="1"
        ></img>
        <p> <Random /></p>
      </div>
    );
}

export default Tracker