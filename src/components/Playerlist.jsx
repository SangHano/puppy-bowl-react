import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import PlayerForm from './NewPlayerForm'

const API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players`

const Playerlist = ()=>{
    const [players, setPlayers] = useState([]);
    

    useEffect(() => {
        const fetchAllPlayers = async () => {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                console.log('Data from API:', data.data.players); 
                setPlayers(data.data.players)
            } catch(error) {
                console.error('Error fetching players:', error) 
            }
        }
        fetchAllPlayers();
    }, []);  
    const handlePlayerAdd = (newPlayer) => {
        setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
    };

    //Delete Player here
    const handleDelete = (id) => {
        console.log(`Deleting player ${id}`);
        const remainingPlayers = players.filter(player => player.id !== id)
        setPlayers(remainingPlayers)
    }

    return (
        <>
            <PlayerForm onPlayerAdd={handlePlayerAdd} />
            <h3>List of Players</h3>
            {players && players.length > 0 && players.map(player => (
                <div key={player.id}>
                <h2>{player.name}</h2>
                <p>ID: {player.id}</p>
                <p>Breed: {player.breed}</p>
                <img src={player.imageUrl} alt={player.name} />
                <p>Team: {player.teamId || 'Unassigned'}</p>
                <Link to={`/player/${player.id}`}>See Details</Link>
                <button className="delete-button" onClick={() => handleDelete(player.id)}>Delete</button>
                </div>
          ))}
        </>
      )
    }
    
export default Playerlist;

