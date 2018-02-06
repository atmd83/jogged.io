const express = require('express')
const app = express()
var path = require('path')
const passport = require('passport');
var winston = require('winston');
var session = require('express-session')
var compression = require('compression')

var exphbs  = require('express-handlebars');


app.set('views', path.join(__dirname + '/views'));
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));

app.set('view engine', 'handlebars');

//app.enable('view cache');





var flash = require('express-flash');

app.use(compression())




app.use(session({
    secret: process.env.SECRET_KEY || "\xb4\nT'\xa64\xed[U\x8e\xdb\x10&'\xfa\xecS\xe8Om\xd8\xc8\xea\x19",
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());



const port = process.env.PORT || 3000;



const recordRoutes = require('./routes/record');





const authRoutes = require('./routes/auth');

const userRoutes = require('./routes/user');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
  return res.render('home');
});



app.use('/record', recordRoutes);





app.listen(port, () => winston.info(`App listening on port ${port}!`))



module.exports = app