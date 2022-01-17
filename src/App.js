import React from "react";
import "./App.css";
import Board from "./components/Board";
import Layout from "./components/Layout";
import Chip from "./components/Chip";
import { multiple, numberToLayout } from "./components/GlobalData";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: new Array(50),
      money: 1000,
      curNumber: 0,
      history: [],
      inside: 0,
      outside: 0,
      readyToBet: true,
    };
  }
  componentDidMount() {
    let initBet = [];
    for (let i = 0; i < 50; i++) {
      initBet.push(0);
    }
    let initHistory = [];
    for (let i = 0; i < 15; i++) {
      initHistory.push(Math.floor(Math.random() * 38));
    }

    this.setState({
      bet: initBet,
      curNumber: initHistory[0],
      history: initHistory,
    });
  }
  updateBet = (idx, money) => {
    let arr = this.state.bet;
    console.log(idx);
    console.log(parseInt(money));
    arr[idx] = parseInt(arr[idx]) + parseInt(money);

    this.setState({ bet: arr });
  };
  updateMoney = (diff) => {
    let nextMoney = this.state.money + diff;
    this.setState({ money: nextMoney });
  };
  start = () => {
    let nextNumber = Math.floor(Math.random() * 38);
    let nextHistory = this.state.history;
    nextHistory.unshift(nextNumber);
    nextHistory.pop();
    let nextMoney = this.state.money;
    console.log(nextMoney);
    for (let i = 0; i < numberToLayout[nextNumber].length; i++) {
      nextMoney +=
        this.state.bet[numberToLayout[nextNumber][i]] *
        multiple[numberToLayout[nextNumber][i]];
    }

    this.setState({
      curNumber: nextNumber,
      history: nextHistory,
      money: nextMoney,
      readyToBet: false,
    });
  };
  clearTable = () => {
    let nextBet = [];
    for (let i = 0; i < 50; i++) {
      nextBet.push(0);
    }
    this.setState({
      readyToBet: true,
      bet: nextBet,
    });
  };
  render() {
    return (
      <div className="App">
        <Board
          curNumber={this.state.curNumber}
          history={this.state.history}
          start={this.start}
          money={this.state.money}
          ready={this.state.readyToBet}
          clearTable={this.clearTable}
        ></Board>
        <Layout
          bet={this.state.bet}
          updateBet={this.updateBet}
          updateMoney={this.updateMoney}
          ready={this.state.readyToBet}
          curNumber={this.state.curNumber}
        ></Layout>
        <Chip money={this.state.money} ready={this.state.readyToBet}></Chip>
      </div>
    );
  }
}

export default App;
