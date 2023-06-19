import React from "react";

function ChampionCard({ champion }) {
    return (
      <div className="champion-card">
        <img src={champion.image} alt={champion.name} />
        <p>{champion.name}</p>
      </div>
    );
  }