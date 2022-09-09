// create an express app
const express = require("express")
const app = express();

app.use(express.json());

app.post('/add', function(req, res){
  const first_number = req.body.first_number;
  const second_number = req.body.second_number;
  res.json({ result:  first_number + second_number });
});

app.post('/subtract', function(req, res){
  const first_number = req.body.first_number;
  const second_number = req.body.second_number;
  res.json({ result:  first_number - second_number });
});

app.post('/multiply', function(req, res){
  const first_number = req.body.first_number;
  const second_number = req.body.second_number;
  res.json({ result:  first_number * second_number });
});


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));