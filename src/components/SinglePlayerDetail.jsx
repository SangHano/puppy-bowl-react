import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players`
const PlayerDetail =()=> {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch(`${API_URL}/${playerId}`);
      const data = await response.json();
      setPlayer(data.data.player);
    }

    fetchPlayer();
  }, [playerId]);

  return player ? (
    <div>
      <h2>Player Details</h2>
      <p>Name: {player.name}</p>
      <p>ID: {player.id}</p>
      <p>Breed: {player.breed}</p>
      <img src={player.imageUrl} alt={player.name} />
      <p>Team: {player.teamId || 'Unassigned'}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default PlayerDetail;