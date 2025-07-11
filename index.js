const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.send('Data received');
});

app.get('/', (req, res) => {
  res.send('Kid monitoring backend is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
