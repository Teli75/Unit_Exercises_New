const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

//CALL BACKS
// function getUsers(cb){
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) return cb(err);
//     const users = JSON.parse(data);
//     return cb(null, users);
//   });
// }

// app.get('/', (req,res) => {
//   getUsers((err, users)=>{
//     if(err){
//       res.render('error', {error:err});
//     } else {
//       res.render('index', {title: "Users", users: users.users})
//     }
//   });
// }); 

// PROMISES 
function getUsers(){
  //If it's successful it will resolve
  return new Promise((resolve, reject)=> {
    //Read data using fs module
    fs.readFile('data.json', 'utf-8', (err, data)=> {
      //If there's an err, call the reject param method
      if(err){
        reject(err);
      } else {
        //Parse data bc it was a str and set to var users
        const users = JSON.parse(data);
        //Resolve param method.
        resolve(users);
      }
    });
  });
}

// app.get('/', (req,res) => {
//   getUsers()
//   //Now that we have the users, render the page.
//     .then((users)=> {
//       throw new Error("Noooo");
//       res.render('index', {title: "Users", users: users.users});
//     })
//     //if getUsers() encounters an error, it will be passed to the catch method which also accepts a callback() to run when errs are caught. 
//     .catch((err)=> {
//       //1st param renders the err page and 2nd defines a param for the err.
//       res.render('error', {error: err});
//     });
// }); 

//async await syntax is easier to debug.
//async keyword will 
app.get('/', async(req,res) => {
  try{
  //the await keyword can be used with any function that returns a promise see line 33.
  const users = await getUsers();
  //After the getUsers() is called, the following code renders info to an hmtl page, just like the .then method would do so. 
  res.render('index', {title: "Users", users: users.users});
  } catch { //We can catch any errors and run the err page. 
    res.render('error', {error: err});
  }
}); 


app.listen(3000, () => console.log('App listening on port 3000!'));