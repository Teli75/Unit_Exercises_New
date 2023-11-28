import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './StopWatch';


const Header = ({title, players}) => {
  //const { players, title } = props;
    return (
      <header>
        <Stats 
          players={players} 
        />
        <h1>{title}</h1>
        {/*Stopwatch JSX tag*/}
        <Stopwatch />
      </header>
    );
  }
  Header.propTypes = {
    //validates the propTypes
    title: PropTypes.string.isRequired,
    //to make sure it's an array of objects
    players: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  Header.defaultProps = {
    title: "Scoreboard"
  }

  export default Header;