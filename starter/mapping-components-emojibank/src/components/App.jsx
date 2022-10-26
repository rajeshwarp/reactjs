import React from "react";
import Tile from './Tile'
import emojipedia from "../emojipedia";

function createTile(emoji) {
  return <Tile
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
  />
};

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createTile)}
      </dl>
    </div>
  );
}

export default App;
