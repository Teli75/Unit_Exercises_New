import React, { useRef } from "react";
import PropTypes from 'prop-types';


const AddPlayerForm = ({addPlayer}) => {
    //const [value, setValue] = useState("");
    const playerInput = useRef();

    const handleSubmit = (event) => {
        /*browser posts a req back to server which causes app to reload in browser,
        we would lose all our app state in the process, that's why we use preventDef */
        event.preventDefault();
        //Instead of passing the state by passing value, we pass Ref by passing playerInput
        addPlayer(playerInput.current.value);
        //setValue("");
        event.currentTarget.reset();
    }

    return (
        <form onSubmit= {(event) => handleSubmit(event)}>
            {console.log(playerInput)}
            <input 
                type= "text"
                ref={playerInput}
                //value= {value}
                placeholder="Enter a player's name"
                /* the event object provides a target property which points
                to the underlying input element in the dom. We can read the
                value from it and use it to update our state */
                //onChange={(event) => setValue(event.target.value) }
            />
            <input
            type="submit"
            value="Add Player"
            />
        </form>
    )
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
}
export default AddPlayerForm;