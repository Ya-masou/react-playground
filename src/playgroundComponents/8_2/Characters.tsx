import React, { FC } from "react"
import CharacterList, { Character } from "./CharacterList"
import "./style.css"

const App: FC = () => {
  const characters: Character[] = [
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

  return (
    <div className="container">
      <header>
        <h3>名簿リスト</h3>
      </header>
      <CharacterList school="西高校" characters={characters} />
    </div>
  )
}

export default App
