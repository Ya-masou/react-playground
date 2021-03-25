import React, { Component, ReactElement } from "react"
import CharacterList, { Character } from "./CharacterList"
import "./style.css"

class App extends Component {
  characters: Character[] = [
    {
      id: 1,
      name: "やまそう",
      grade: 1,
      height: 170.0,
    },
    {
      id: 2,
      name: "竹本",
      grade: 2,
      height: 180.0,
    },
    {
      id: 3,
      name: "森本",
      grade: 1,
      height: 175.0,
    },
    {
      id: 4,
      name: "本木",
      grade: 3,
      height: 190.0,
    },
    {
      id: 5,
      name: "清原",
      grade: 1,
      height: 160.0,
    },
  ]

  render(): ReactElement {
    return (
      <div className="container">
        <header>
          <h3>名簿リスト</h3>
        </header>
        <CharacterList school="東高校" characters={this.characters} />
      </div>
    )
  }
}

export default App
