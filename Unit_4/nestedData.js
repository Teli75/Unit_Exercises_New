// const movies = [
//     ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//     ['Finding Dory'],
//     ['Jaws', 'On the Waterfront']
//   ];

//   //use reduce to collect the elements and put them in new array
//   //each array item is innerMovies
  
// const flatMovies = movies.reduce((arr, innerMovies) => [...arr,...innerMovies], []);
// //you can also use concat to accomplish this
// console.log(flatMovies);


//create an array of all favorite titles of all users
//map over 
const users = [
    {
      name: 'Samir',
      age: 27,
      favoriteBooks:[
        {title: 'The Iliad'},
        {title: 'The Brothers Karamazov'}
      ]
    },
    {
      name: 'Angela',
      age: 33,
      favoriteBooks:[
        {title: 'Tenth of December'},
        {title: 'Cloud Atlas'},
        {title: 'One Hundred Years of Solitude'}
      ]
    },
    {
      name: 'Beatrice',
      age: 42,
      favoriteBooks:[
        {title: 'Candide'}
      ]
    }
  ];
  
      // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
     
    const books = users
        .map(user => user.favoriteBooks
        .map(book => book.title))
        .reduce((allTitles, title) => [...allTitles,...title], []);

            // [
            //     [ { title: 'The Iliad' }, { title: 'The Brothers Karamazov' } ],
            //     [
            //       { title: 'Tenth of December' },
            //       { title: 'Cloud Atlas' },
            //       { title: 'One Hundred Years of Solitude' }
            //     ],
            //     [ { title: 'Candide' } ]
            //   ]
//       const books = users.reduce((containerArr, user) => 
//        [...containerArr,...users.favoriteBooks, []});
    
console.log(books);
// [
//     'The Iliad',
//     'The Brothers Karamazov',
//     'Tenth of December',
//     'Cloud Atlas',
//     'One Hundred Years of Solitude',
//     'Candide'
//   ]