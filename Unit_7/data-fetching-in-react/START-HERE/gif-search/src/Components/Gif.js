import React from 'react';

/*A presentational component containing the template the displays
-only responsible for rendering an image element wrapped in a list item for each gif returned from the api. 
*/
const Gif = props => (
  <li className="gif-wrap">
    {/*give the image a source attribute, then set the value to props.url to receive the data passed to it via the URL prop */}
    <img src={ props.url }alt=""/>
  </li>
);

export default Gif;