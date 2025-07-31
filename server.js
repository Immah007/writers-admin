const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Additional routes
app.get('/employer-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'employer-login.html'));
});

app.get('/writer-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'writer-login.html'));
});

app.get('/alternative', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'alternative.html'));
});

app.get('/employer', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'employer.html'));
});

app.get('/writer', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'writer.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
