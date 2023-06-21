import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChampionCard from './ChampionCard.js';
import "./ChampionContainer.css";
import DroppableCell from './DroppableCell';


export default function ChampionGrid(){
    const [champions, setChampions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
      axios.get('http://localhost:8000/api/champions')
        .then(response => {
          setChampions(response.data);
        })
        .catch(error => {
          console.error('Error fetching champions:', error);
        });
    }, []);
    
    const championsArray = Object.values(champions)
  
    return (
      <>
      <div className='champion-grid-container'>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search champions..."
          className="search-input"
        />
      </div>
      <div className="side-cells-left">
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
        </div>
        <div className="champion-grid">
          {championsArray.filter(champion => champion.name.toLowerCase().includes(searchQuery.toLowerCase())).map(champion => (
            <ChampionCard key={champion.name} champion={champion} />
          ))}
        </div>
        <div className="side-cells-right">
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
          <DroppableCell />
        </div>
      </div>
      </>
    );
}

