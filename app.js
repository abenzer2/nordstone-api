// create an express app
const express = require("express")
const app = express()

app.get('/', function(req, res){
  res.json({ user: 'geek' });
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));