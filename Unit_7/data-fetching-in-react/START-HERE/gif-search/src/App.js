import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

/* We wire the app up to the giphy api results and display them as a list of animated gifs. 
In our app, the app component is the container responsible for rendering the markup of the app, as well as child components. 

The app component is aware of the app as a whole. Initializes and updates the gif state with the response data, but it will also provide the data and behavior to its child components. In react include data fetching in a container like app instead of in the child components bc it tightly couples the data to the view
*/
function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("candy");
  const [loading, setLoading] = useState (true);
  

  useEffect(() => {
    setLoading(true);
    //keeps track of which data fetch is the latest
    //set up clean up func by setting to true, then fetch the query data
    let activeFetch = true;
    setTimeout( () => {
      axios
    //get method performs the request just like the fetch method
    //change the url to the endpoint that returns a search 
      // .get(
      //   "https://api.giphy.com/v1/gifs/trending?api_key=4js8zLuZ7cD54R9jHuK17V790TFflJTa&limit=24&rating=g")
      //Use template literal, so we're able to embed the value of query into the url using interpolation.
      .get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=4js8zLuZ7cD54R9jHuK17V790TFflJTa&limit=24&rating=g`)
      //Pass then a function that updates the state
      //.then(function (response) {
      .then( response => {
        //Data contains the response provided by the server in json format
      if (activeFetch){
       setGifs( response.data.data );
       setLoading = false;
      }
      })
      //0.
      //.catch(function (error) {
      .catch( error => {
        console.log("Error fetching and parsing data", error);
      });   
    }, Math.ceil(Math.random()*10000));
    //a cleanup function that runs before next fetch. This prevents another change in the gif state
      return () => { activeFetch = false }
  }, [query]);
  /* Empty dep array, means we only fetch the data when the component is mounted to the dom.
  We want data to be fetched each time the query state changes. */

  //Function accepts the searchText value and it will update the query state with set query
  const handleQueryChange = searchText => {
    setQuery( searchText );
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          {/*passes function to SearchForm & invokes it when the changeQuery prop is called*/}
          <SearchForm 
            changeQuery={ handleQueryChange } />
        </div>
      </div>
      <div className="main-content">
        {
          (loading)
          ? <p> Loading...</p>
          : <GifList />
        }
        <GifList
          //Passes the gif state to the gifList component
          //Anytime the gif state gets updated, the GifList component will receive an array of objects via this data prop
          data={gifs}
        />
      </div>
    </div>
  );
}

export default App;

// //function App() {
//   //the state is the gif data we want to display
//   //gifs is going to be a collection of objects that will change via components
//   //state declaration
//   const [gifs, setGifs] = useState( []);
//   //set up all data fetching inside useEffect hook
//   /* If you need to load external data right when a component gets mounted to the dom or if your request is dependent on another variable like a search term. UseEffect allows us to control when the data is fetched. */
//   //I want the data to be fetched immediately after the component mounts. Inside useEffect set up function, we'll add the fetch method.
//   //The fetch method itself returns a promise, once the fetch promise is fullfilled you can use then methods.
//   useEffect(() => { fetch("https://api.giphy.com/v1/gifs/trending?api_key=4js8zLuZ7cD54R9jHuK17V790TFflJTa&limit=24&rating=g")
//   //each of these callbacks use the promise created by fetch to return a promise of their own
//   //return in json format
// .then(response => response.json())
// //updates the gif state by passing in a function that takes the json data via the parameter responseData and pass it to the setGifs function.
// .then(responseData => setGifs(responseData))
// //If servers are down you can use the catch method to handle any errors.
// //Arrow function, takes the parameter error and returns message.
// .catch(error => console.log("Error fetching and parsing data", error));
// }, []);
