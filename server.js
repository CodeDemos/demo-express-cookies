'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/api/:make/:model/:year', (req, res) => {
  
  console.log(req.params);
  // const make = req.params.make;
  // const model = req.params.model;
  // const year = req.params.year;

  const {make, model, year} = req.params;

  console.log('cookies', req.cookies);
  console.log('header', req.get('Content-Type'));
  
  res.json( { foo: "bar", make, model, year } );
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
