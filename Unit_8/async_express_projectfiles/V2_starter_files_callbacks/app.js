const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

//CALL BACKS
//This function retrieves data from data.json file. This function takes a callback as a param
function getUsers(cb){
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) return cb(err);
    //Once you're finished retrieving data, call func we pass to you and pass the list of users into that function. 
    const users = JSON.parse(data);
    //returns a call to this callback function and passes to that cb the data it has retrieved from the file.
    return cb(null, users);
  });
}

//
app.get('/', (req,res) => {
  getUsers((err, users) => {
    //If there's an error we'll render the err page passing the err to the err template.
    if (err) {
      res.render('error', {error: err})
    } else {
      res.render('index', {title: "Users", users: users.users })
    }
  });
}); 


//Pyramid of doom or callback hell
app.get('/:id', (req, res) => {
  getUser(req.params.id, (err, user)=>{
    if(err){
      res.render('error', {error: err});
    } else {
      getFollowers(user, (err, followers) =>{
        if(err){
          res.render('error', {error: err});
        } else {
          res.render('profile', {title: "Profile Page", user: user, followers: followers});
        }
      }); 
    }
  });
 });


app.listen(3000, () => console.log('App listening on port 3000!'));