import React, {Component} from "react";

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
                    <h1>Score : 0 Best Score : 0</h1>
                </div>
            </div>
        );
    }
}

export default Header;