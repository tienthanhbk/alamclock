const express = require('express');
const app = express();
const PORT = process.env.port || process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App is running on port ', PORT);
});
