import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Styles.css";
import ChampionCard from './ChampionCard.js';
import DroppableCell from './DroppableCell';
import BanCell from './BanCell';


export default function ChampionGrid(){

    //State the fetched champions
    const [champions, setChampions] = useState([]);
    //State the search bar
    const [searchQuery, setSearchQuery] = useState('');
    // Initialize the state of the cells with null champions
    const [cells, setCells] = useState(Array(10).fill(null));
    const [banCells, setBanCells] = useState(Array(10).fill(null));

    //Fetch the data from the Django API
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

    // Function to update the champion in a cell
  function setCellChampion(index, champion) {
    setCells(cells => {
      const newCells = [...cells];
      newCells[index] = champion;
      return newCells;
    });
  }

  function setBanCellChampion(index, champion) {
    setBanCells(banCells => {
      const newBanCells = [...banCells];
      newBanCells[index] = champion;
      return newBanCells;
    });
  }
  
    return (
      <>
      <div className='champion-grid-container'>
      <div className='Bans'>
        <div className='Bans-Blue'>
          <BanCell champion={cells[0]} setChampion={(champion) => setBanCellChampion(0, champion)} />
          <BanCell champion={cells[1]} setChampion={(champion) => setBanCellChampion(1, champion)} />
          <BanCell champion={cells[2]} setChampion={(champion) => setBanCellChampion(2, champion)} />
          <BanCell champion={cells[3]} setChampion={(champion) => setBanCellChampion(3, champion)} />
          <BanCell champion={cells[4]} setChampion={(champion) => setBanCellChampion(4, champion)} />
        </div>
        <div className='Bans-Red'>
          <BanCell champion={cells[5]} setChampion={(champion) => setBanCellChampion(5, champion)} />
          <BanCell champion={cells[6]} setChampion={(champion) => setBanCellChampion(6, champion)} />
          <BanCell champion={cells[7]} setChampion={(champion) => setBanCellChampion(7, champion)} />
          <BanCell champion={cells[8]} setChampion={(champion) => setBanCellChampion(8, champion)} />
          <BanCell champion={cells[9]} setChampion={(champion) => setBanCellChampion(9, champion)} />
        </div>
      </div>
      <div className='bodyNoBans' >
      
        <div className="side-cells-blue">
          <DroppableCell champion={cells[0]} setChampion={(champion) => setCellChampion(0, champion)} />
          <DroppableCell champion={cells[1]} setChampion={(champion) => setCellChampion(1, champion)} />
          <DroppableCell champion={cells[2]} setChampion={(champion) => setCellChampion(2, champion)} />
          <DroppableCell champion={cells[3]} setChampion={(champion) => setCellChampion(3, champion)} />
          <DroppableCell champion={cells[4]} setChampion={(champion) => setCellChampion(4, champion)} />
        </div>
        <div >
        
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search champions..."
            className="search-input"
          />
        </div>
        <div className="champion-grid">
          {championsArray.filter(champion => champion.name.toLowerCase().includes(searchQuery.toLowerCase())).map(champion => (
            <ChampionCard key={champion.name} champion={champion} />
          ))}
        </div>
        </div>
        <div className="side-cells-red">
          <DroppableCell champion={cells[5]} setChampion={(champion) => setCellChampion(5, champion)} />
          <DroppableCell champion={cells[6]} setChampion={(champion) => setCellChampion(6, champion)} />
          <DroppableCell champion={cells[7]} setChampion={(champion) => setCellChampion(7, champion)} />
          <DroppableCell champion={cells[8]} setChampion={(champion) => setCellChampion(8, champion)} />
          <DroppableCell champion={cells[9]} setChampion={(champion) => setCellChampion(9, champion)} />
        </div>
      </div>
      </div>
      </>
    );
}

