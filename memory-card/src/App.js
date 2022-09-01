import Header from "./Component/Header";
import Random from "./Component/Randomizer";
import Footer from "./Component/Footer";
import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Random />
      <Footer />
    </div>
  );
}

export default App;
