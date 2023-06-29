import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./Styles.css";
import ChampionCard from './ChampionCard.js';
import DroppableCell from './DroppableCell';
import BanCell from './BanCell';
import { GrPowerReset } from 'react-icons/gr';


export default function ChampionGrid(){

    //State the fetched champions
    const [champions, setChampions] = useState([]);
    //State the search bar
    const [searchQuery, setSearchQuery] = useState('');
    // Initialize the state of the cells with null champions
    const [cells, setCells] = useState(Array(10).fill(null));
    const [banCells, setBanCells] = useState(Array(10).fill(null));
    // Selected champions so that we can't pick two champs at the same time.
    const [selectedChampions, setSelectedChampions] = useState(new Set());

    /* const inputRef = useRef(); */


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

  // Function to reset the state of the cells and the selected champions
  function reset() {
    setCells(Array(10).fill(null));
    setBanCells(Array(10).fill(null));
    setSelectedChampions(new Set());
  }
  
    return (
      <>
      <div className='champion-grid-container'>
      <div className='Bans'>
        <div className='Bans-Blue'>
        <BanCell
          champion={banCells[0]}
          setChampion={(champion) => setBanCellChampion(0, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
          isFirstCell={true}
        />
        <BanCell
          champion={banCells[1]}
          setChampion={(champion) => setBanCellChampion(1, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[2]}
          setChampion={(champion) => setBanCellChampion(2, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[3]}
          setChampion={(champion) => setBanCellChampion(3, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[4]}
          setChampion={(champion) => setBanCellChampion(4, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />

        </div>
        <div className='Bans-Red'>
        <BanCell
          champion={banCells[5]}
          setChampion={(champion) => setBanCellChampion(5, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[6]}
          setChampion={(champion) => setBanCellChampion(6, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[7]}
          setChampion={(champion) => setBanCellChampion(7, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[8]}
          setChampion={(champion) => setBanCellChampion(8, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        <BanCell
          champion={banCells[9]}
          setChampion={(champion) => setBanCellChampion(9, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions}
        />
        </div>
      </div>
      <div className='bodyNoBans' >
      
        <div className="side-cells-blue">
          <DroppableCell champion={cells[0]}
          setChampion={(champion) => setCellChampion(0, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} 
          isFirstCell={true}
          />
          <DroppableCell champion={cells[1]}
          setChampion={(champion) => setCellChampion(1, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[2]}
          setChampion={(champion) => setCellChampion(2, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[3]}
          setChampion={(champion) => setCellChampion(3, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[4]}
          setChampion={(champion) => setCellChampion(4, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
        </div>
        <div >
        
        <div className="search-bar">
          <input
            //ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onClick={() => setSearchQuery('')}
            onKeyDown={e => {
            if (e.key === 'Backspace') {
            setSearchQuery('');
            }
            }}
            placeholder="Search champions..."
            className="search-input"
          />
          {/* <button className='clear-button' onClick={() => {
          setSearchQuery('');
          inputRef.current.focus();
          }}>Clear</button> */}
        </div>
        
        <div className="champion-grid">
          {championsArray.filter(champion => champion.name.toLowerCase().includes(searchQuery.toLowerCase())).map(champion => (
            <ChampionCard key={champion.name} champion={champion} selectedChampions={selectedChampions} />
          ))}
        </div>
        </div>
        <div className="side-cells-red">
          <DroppableCell champion={cells[5]}
          setChampion={(champion) => setCellChampion(5, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[6]}
          setChampion={(champion) => setCellChampion(6, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[7]}
          setChampion={(champion) => setCellChampion(7, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[8]}
          setChampion={(champion) => setCellChampion(8, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />
          <DroppableCell champion={cells[9]}
          setChampion={(champion) => setCellChampion(9, champion)}
          selectedChampions={selectedChampions}
          setSelectedChampions={setSelectedChampions} />

        </div>
      </div>
      <button className="reset-button" onClick={reset} style={{ display: 'block', margin: '0 auto', fontSize: '20px', padding: '10px'}}>
        <GrPowerReset size={24} />
      </button>
      </div>
      </>
    );
}

