// create an express app
const express = require("express")
const app = express();

app.use(express.json());

app.post('/calculate', function(req, res){
  const first_number = req.body.first_number;
  const second_number = req.body.second_number;
  const operation = req.body.operation;

  if(operation == 'add') {
    res.json({ result:  first_number + second_number });
  }
  if(operation == 'subtract') {
    res.json({ result:  first_number - second_number });
  }
  if(operation == 'multiply') {
    res.json({ result:  first_number * second_number });
  }
  res.end()
});



// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));