const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Test endpoint
app.post('/api/test', (req, res) => {
  console.log('Test data received:', req.body);
  res.send('Test endpoint working!');
});

// ✅ Location endpoint
app.post('/api/location', (req, res) => {
  console.log('Location received:', req.body);
  res.send('Location received');
});

// ✅ Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
