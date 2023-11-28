import React from 'react';
import Gif from './Gif';
import NoGifs from "./NoGifs";

/* Contains the wrapping ul element that will display our list of gifs via 
the gif component */
//Received data from app and is responsible for how it looks
//props are how components talk to each other
const GifList = props => { 
  const results = props.data;

  let gifs;
  if (results.length > 0 ) {
    gifs = results.map( gif => 
  <Gif 
    url={gif.images.fixed_height.url}
    key={gif.id}
  />)
  } else {
    gifs = <NoGifs />
  }
  //we can use the map method to map over the array and return a gif component for each object in the array. The function takes the parameter gif and returns a gif component
  
  

  
  return(
    <ul className="gif-list">
      {/* why not just use the map method in the return?  */}
      {gifs}
    </ul> 
  );
}

export default GifList;
