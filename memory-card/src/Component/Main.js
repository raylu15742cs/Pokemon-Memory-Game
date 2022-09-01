import React , {Component} from "react";
// main holder for 12 cards
class Main extends Component {
    render() {
        return (
          <div className="main">
            <div className="card" id="one"> one </div>
            <div className="card" id="two"> two</div>
            <div className="card" id="three"> three</div>
            <div className="card" id="four"> four</div>
            <div className="card" id="five">five</div>
            <div className="card" id="six">six</div>
            <div className="card" id="seven">seven</div>
            <div className="card" id="eight">eight</div>
            <div className="card" id="nine">nine</div>
            <div className="card" id="ten">ten</div>
            <div className="card" id="eleven">eleven</div>
            <div className="card" id="twelve">twelve</div>
          </div>
        );
    }
}

export default Main;