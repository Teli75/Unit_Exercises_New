import React, {memo} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from "./Icon";

const Player = ({name, removePlayer, id, score, changeScore, isHighScore }) => {
    return (
      <div className="player">
        {console.log(name + ' rendered')}
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore}/>
          {name}
        </span>
  
  {/*counter gets a prop called changeScore, which comes from app.js
  When a button in the counter is clicked, the function will be executed */}
        <Counter 
        score={score}
        id={id}
        changeScore={changeScore}
        />
      </div>
    );
  }

  Player.propTypes= {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired,
    isHighScore: PropTypes.bool.isRequired
  }


  //Memo comparison function
  const playerPropsAreEqual = (prevProps, nextProps) => {
    //Changes a player instance only when a change in the score prop or isHighScore is detected
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;

  }

  export default memo(Player, playerPropsAreEqual);