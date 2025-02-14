const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
let formDataStore = [];



app.post('/api', (req, res) => {
  const formData = req.body;
  formDataStore.push(formData);
  console.log('Form Data Received:', formData);
  res.json({ message: 'Data received successfully!' }); 
});


app.get('/api', (req, res) => {
  
  res.json(formDataStore); 
  res.json({ message: 'GET request to /api is working!' });
  console.log(req);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



