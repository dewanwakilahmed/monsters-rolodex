import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "asdfafe465",
        },
        {
          name: "Frank",
          id: "jkhho4565",
        },
        {
          name: "Jacky",
          id: "kjhoijl515616",
        },
        {
          name: "Andrei",
          id: "iojoj904j",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
