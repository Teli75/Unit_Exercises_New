import React, { useRef, useState, useEffect } from "react";

import Header from "./Header"
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";


const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  //const [nextPlayerId, setNextPlayerId] = useState(5);
  const [highScore, setHighScore] = useState();
  const nextPlayerId = useRef(5);

  useEffect(() => {
    const scores = players.map(player => player.score);
    //Iterates over array to find the max number
    setHighScore(Math.max(...scores));
    /* dependancy added so that only when the [players] state changes, the side
    effect will run */
  }, [players]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
      setPlayers(prevPlayers => prevPlayers.map( player => {
        if (player.id === id){
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id
          }
        }
        return player;
      }));
    }

  const handleAddPlayer = (name) => {
    /* pass setPlayers a function that receives prevPlayers, then use the
    spread operator to bring in a copy of the exisiting player objects
    in state into this updated players array. This merges the existing
    objects in the orig player state with the new array being created here.
    That way we are not modifying/mutating the orig players array */
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name,
        score: 0, 
        id: nextPlayerId.current++
      }
    ]);
    //nextPlayerId.current +=1
    //Increments NextPlayer
    //setNextPlayerId(prevId => prevId + 1);
  }

  return (
    <div className="scoreboard">
      <Header
      //We can ommit title because of the default prop in Header.js
        //title="Scoreboard"
        players={players}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
          isHighScore={player.score === highScore && highScore !== 0}
        />
      )}
      <AddPlayerForm addPlayer={handleAddPlayer}/>
    </div>
  );

}

export default App;
