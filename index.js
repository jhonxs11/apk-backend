const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Test endpoint
app.post('/api/test', (req, res) => {
  console.log('📡 Test data received:', req.body);
  res.send('Test endpoint working!');
});

// ✅ Command endpoint — sends a command to the client
let latestCommand = '';
app.post('/api/command', (req, res) => {
  latestCommand = req.body.cmd || '';
  console.log(`✅ Received command: ${latestCommand}`);
  res.send(`Command "${latestCommand}" registered`);
});

// ✅ Client requests latest command
app.get('/api/command', (req, res) => {
  res.json({ command: latestCommand });
});

// ✅ Data endpoint — client sends back results here
app.post('/api/data', (req, res) => {
  const { type, data } = req.body;
  console.log(`📥 Data received [${type}]:`, data);
  res.send(`Data received for ${type}`);
});

// ✅ Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
