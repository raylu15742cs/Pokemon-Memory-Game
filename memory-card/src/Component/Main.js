import React , {Component} from "react";
// main holder for 12 cards
class Main extends Component {
    render() {
        return (
          <div className="main">
            <div className="card"> one </div>
            <div className="card"> two</div>
            <div className="card"> three</div>
            <div className="card"> four</div>
            <div className="card">five</div>
            <div className="card">six</div>
            <div className="card">seven</div>
            <div className="card">eight</div>
            <div className="card">nine</div>
            <div className="card">ten</div>
            <div className="card">eleven</div>
            <div className="card">twelve</div>
          </div>
        );
    }
}

export default Main;