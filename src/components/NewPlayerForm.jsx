import { useState } from 'react';

const API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players`

const PlayerForm = ({ onPlayerAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        imageUrl: '',
        teamId: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    
        if (response.ok) {
            const data = await response.json();
            if (data && data.data && data.data.player) {
                onPlayerAdd(data.data.player);
            } else {
                console.error('Unexpected response format:', data);
            }
        } else {
            console.error('Failed to add player');
        }
    };
    
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" />
            <input name="teamId" value={formData.teamId} onChange={handleChange} placeholder="Team ID" />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default PlayerForm;