import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Game from "./Component/Game";
import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
