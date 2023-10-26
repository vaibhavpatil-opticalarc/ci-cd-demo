// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('changes')
  res.send('Hello, World!!!');
});


if (!module.parent) {
    // Start the server only if this module is the main module (not required by another script)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    })
};

module.exports = app;