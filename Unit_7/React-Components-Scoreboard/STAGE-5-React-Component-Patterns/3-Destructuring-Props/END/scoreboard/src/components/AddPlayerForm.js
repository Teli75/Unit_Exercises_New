import React, { useState } from 'react';

const AddPlayerForm = ({ addPlayer }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlayer(value);
        setValue("");
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                type="text"
                value={value}
                placeholder="Enter a player's name"
                onChange={(event) => setValue(event.target.value)}
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    );
}

export default AddPlayerForm;