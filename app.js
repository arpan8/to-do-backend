const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./routes'))

const allowCrossDomain = function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
};

app.use(allowCrossDomain);

app.listen(port,()=>{
    console.log('listening on port '+ port);
});