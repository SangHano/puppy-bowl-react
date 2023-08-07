import { useState, useEffect } from 'react'
import Playerlist from './Playerlist'

const API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players`

const MainPage = ()=>{
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <button type="submit" onClick={handleSearch}>Search</button>
            {filteredPlayers && filteredPlayers.length > 0 && filteredPlayers.map(player => (
                <div key={player.id}>
                <h2>{player.name}</h2>
                <p>ID: {player.id}</p>
                </div>
          ))}
        </>
      )
    }
    
export default MainPage;




