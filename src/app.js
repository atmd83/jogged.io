const express = require('express')
const app = express()


var winston = require('winston');

var compression = require('compression')



app.use(compression())





const config = require('../knexfile');
const env = (process.env.NODE_ENV == 'production') ? 'production' : 'development';
var pg = require('knex')(config[env]);

console.log(pg)









const port = process.env.PORT || 3000;



const recordRoutes = require('./routes/record');



app.get('/', (req, res) => res.send('Hello World!'))



app.use('/record', recordRoutes);





app.listen(port, () => winston.info(`App listening on port ${port}!`))



