import React from "react";
import ChampionGrid from './Components/ChampionGrid.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App"> 
        <ChampionGrid />
      </div>
      </DndProvider>
  );
}

export default App;