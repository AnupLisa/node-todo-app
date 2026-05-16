const express = require('express');
const path = require('path');

const app = express();

// Use environment port (important for deployment) or fallback to 3000
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Listen on all network interfaces (important for EC2)
app.listen(port, '0.0.0.0', () => {
  console.log(`Love Calculator running on port ${port}`);
});
