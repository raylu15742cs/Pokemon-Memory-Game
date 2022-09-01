import React, {Component} from "react";
import Tracker from "./Tracker"

// this will file will handle header

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="leftheader">
                    <h1>Pokemon Memory Game</h1>
                    <p>Get points by clicking on an image but don't click on any more than once!</p>
                </div>
                <div className="rightHeader">
                    <p>Score : <Tracker /> Best Score : <Tracker /></p>
                </div>
            </div>
        );
    }
}

export default Header;