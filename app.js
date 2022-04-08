const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const compression = require('compression');

module.exports = () => {
  const app = express();

  app.use(compression());
  app.use(bodyParser.json());
   
 
  app.post('/',(req, res) => {
    console.log(req.body)
    res.send()
  })


  app.get('/',  (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })

  return app;
};
