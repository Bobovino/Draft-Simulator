import React from 'react';
import ChampionCard from './App.js';

const ChampionContainer = ({ champion }) => {
  return (
    <div className="champion-container">
      {champion && <ChampionCard champion={champion} />}
    </div>
  );
};

export default ChampionContainer;
