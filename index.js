const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is Node.js app inside Docker!, This is a test message! This is about the Question2 of the assignment!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
