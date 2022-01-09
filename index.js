const express = require('express');
const path = require('path');

//configure app
const port = process.env.PORT || 5000;
const app = express();

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
