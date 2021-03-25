import React, { Component, ReactElement } from "react"

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

type Props = {
  school: string;
  characters: Character[];
}

class CharacterList extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props

    return (
      <>
        <div className="school-name">{ school }</div>
        <div className="name-list">
          {
            characters.map(character => (
              <div className="name-list__item" key={character.id}>
                <div className="name-list__item--name">{ character.name }</div>
                <div className="name-list__item--meta">
                  <div> { character.grade } 年生 </div>
                  <div> { character.height ?? "???" }cm </div>
                </div>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default CharacterList
