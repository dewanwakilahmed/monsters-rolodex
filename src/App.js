import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <input
          type="search"
          name=""
          id=""
          placeholder="search your favorite monster"
          className="search-box"
          onChange={(event) => {
            console.log(event.target.value);

            const searchString = event.target.value.toLocaleLowerCase();

            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return {
                monsters: filteredMonsters,
              };
            });
          }}
        />
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
