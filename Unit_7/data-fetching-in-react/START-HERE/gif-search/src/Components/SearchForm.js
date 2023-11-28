//import React, { useState } from 'react';
import React, { useRef } from 'react';

/*This component has a searchText state that's specific to the component*/
const SearchForm = props => {
  //const [searchText, setSearchText] = useState('');
  const searchText = useRef('null');

  const handleSubmit = e => {
    e.preventDefault();
    //updates the query state which invokes the data to be fetched by the useEffect hook
    props.changeQuery( searchText.current.value );
    //resets the input field on submit
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={e => handleSubmit(e)} >
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search" 
            //it gets updated in this onChange event with the text users type
            // onChange={e => setSearchText(e.target.value)}
            ref={ searchText }
             name="search" 
             placeholder="Search..." />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>      
  );
}

export default SearchForm;