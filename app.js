// create an express app
const express = require("express")
const app = express();

const mathjs = require("mathjs")

app.use(express.json());

app.post('/calculate', function(req, res){
  const first_number = req.body.first_number;
  const second_number = req.body.second_number;
  const operation = req.body.operation;

  if(operation == 'addition') {
    const result = eval(first_number+second_number)
    res.json({ result });
  }
  if(operation == 'subtraction') {
    const result = eval(first_number - second_number)
    res.json({ result });
  }
  if(operation == 'multiplication') {
    const result = eval(first_number * second_number)
    res.json({ result  });
  }
  res.end()
});



// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));