import React from "react";
import "./Layout.css";
import { color, numberToName } from "./GlobalData";
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  dropHandle = (e, idx) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text/plain");
    this.props.updateBet(idx, parseInt(data));
    this.props.updateMoney(-parseInt(data));
  };
  dragOverHandle = (e) => {
    e.preventDefault();
  };
  numberColor = (idx) => {
    if (idx <= 37) {
      return color[idx];
    } else {
      return "green";
    }
  };
  render() {
    let listItems = [];
    for (let i = 0; i < 50; i++) {
      listItems.push(
        <li
          key={i}
          className="layout-item"
          style={{ gridArea: "n" + i, background: this.numberColor(i) }}
          onDrop={(e) => this.dropHandle(e, i)}
          onDragOver={this.dragOverHandle}
        >
          <div className="layout-number">{numberToName[i]}</div>
          {this.props.bet[i] > 0 && (
            <div className="layout-bet">{this.props.bet[i]}</div>
          )}
        </li>
      );
    }

    return <ul className="layout">{listItems}</ul>;
  }
}

export default Layout;
