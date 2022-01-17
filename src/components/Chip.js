import React from "react";
import "./Chip.css";
class Chip extends React.Component {
  constructor(props) {
    super(props);
  }
  drag = (e, num) => {
    e.dataTransfer.setData("text/plain", num);
  };
  render() {
    const arr = [1, 5, 10, 25, 100];
    const listItems = arr.map((item, idx) => (
      <li
        className="chip-item"
        draggable={this.props.money >= item ? "true" : "false"}
        key={idx}
        onDragStart={(e) => {
          this.drag(e, item);
        }}
      >
        {item}
      </li>
    ));
    return (
      <div className="chip">
        <ul className="chip-list">{listItems}</ul>
      </div>
    );
  }
}
export default Chip;
