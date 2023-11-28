// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

// const users = userNames
//     .filter(firstName => firstName.startsWith('S'))
//    // .map(name => ({name: user}));
//shorthand you can just use the 'name'
//     .map(name => ({name}));
    
// console.log(users);


const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 42},
    {name: 'Shaniqua', age: 30},
    {name: 'Marvin', age: 23},
    {name: 'Sean', age: 47}
  ];

  //create an array of users string names that are over 30
  const usersOver30 = users
    .filter( users => users.age > 30)
    .map(users => users.name);

  console.log(usersOver30);