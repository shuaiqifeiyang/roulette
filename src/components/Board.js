import React from "react";
import "./Board.css";
import { color, numberToName } from "./GlobalData";
class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    let historyItems = this.props.history.map((item) => {
      let pos =
        color[item] == "green"
          ? "center"
          : color[item] == "black"
          ? "right"
          : "left";
      let style = {
        textAlign: pos,
        color: color[item],
      };
      return (
        <li className="board-bet-history-item" style={style}>
          {numberToName[item]}
        </li>
      );
    });
    return (
      <div className="board">
        <div className="board-information">
          {/* <div>
            min: 15
            <br />
            max:1000
          </div> */}

          <div>
            Your current money: <br />
            {this.props.money}
          </div>
        </div>
        <div className="board-bet">
          <div
            className="board-bet-number"
            style={{ color: color[this.props.curNumber] }}
          >
            {numberToName[this.props.curNumber]}
          </div>
          <ul className="board-bet-history">{historyItems}</ul>
        </div>
        <div className="board-button">
          {this.props.ready ? (
            <button onClick={this.props.start} className="board-button-start">
              start
            </button>
          ) : (
            <button
              onClick={this.props.clearTable}
              className="board-button-clear"
            >
              clear
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Board;
