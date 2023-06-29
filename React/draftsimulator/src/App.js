import React from "react";
import ChampionGrid from './Components/ChampionGrid.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App" > 
        <Navbar />
        <ChampionGrid />
      </div>
      </DndProvider>
  );
}

export default App;