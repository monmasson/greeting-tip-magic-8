const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 5000

const magicEight = require('./routes/magicRouter');

const app = express();


app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', magicRouter);


app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
}),

app.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})

module.exports = magicRouter