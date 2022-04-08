const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const compression = require('compression');

module.exports = () => {
  const app = express();
  const apiHost = process.env.API_HOST || 'netiak.io';

  app.use(compression());
  app.set('view engine', 'hbs');
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
