const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 42}
  ];

  const usersObject = users.reduce((usersObject, user) => {
    usersObject[user.name] = user.age;
    return usersObject;
  }, {});
    
  console.log(usersObject);

  //{ Samir: 27, Angela: 33, Beatrice: 42 }