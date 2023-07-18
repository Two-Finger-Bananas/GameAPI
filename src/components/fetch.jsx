import React, { useEffect, useState } from 'react';

export default function GameInfo() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=dcb174c931234789b61b6bb04af04752&page_size=50');
        const data = await response.json();
        setGameData(data.results);
      } catch (error) {
        console.log( error);
      }
    };

    fetchGameData();
  }, []);

  return (
    <div>
      {gameData.map((game) => (
        <div key={game.id}>
          <h2>name:{game.name}</h2>
          <p>Release Date: {game.released}</p>

          <p>Genres: {game.genres.map((genre) => genre.name).join(', ')}</p>
          <p>Platforms: {game.platforms.map((platform) => platform.platform.name).join(', ')}</p>
          {game.tags.filter((player) => player.name === 'Singleplayer' || player.name === 'Multiplayer').map((player) => player.name).join(', ')}
          <p> {game.background_image} </p>
          </div>
      ))}
    </div>
  );
}
