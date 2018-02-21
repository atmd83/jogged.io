var express = require('express')
var router = express.Router()

var bodyParser     = require('body-parser');

var db = require('../config').db;
var pg = require ('pg');

var pool = new pg.Pool()

var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });

router.use(json_body_parser);
router.use(urlencoded_body_parser);





const config = require('../../knexfile');
const env = (process.env.NODE_ENV == 'production') ? 'production' : 'development';


pool.connect(function(err, client, done) {
	if(err) {
	  console.log(err);
	}
	client.on('notification', function(msg) {
	  console.log(msg);
	});
	var query = client.query("LISTEN watchers");


  });

  pool.end()

router.get('/', (req, res) => res.send('works'));


router.post('/', (req, res) => {

	const id = req.header('id');
	const app = req.header('app');
	const message = req.body.message;
	const level = req.body.level;


	db('records').insert({
		'user_id': id,
		'app_name': app,
		'message': message,
		'level': level,
		'created_at': Date.now(),
		'updated_at': Date.now()
	}).then( function (result) {
		res.json({ success: true, message: 'ok' });
	});
	// header contains user id and app name	
	// post contains { message: msg, level: level }
	//  https://jogged-api.herokuapp.com/[id]/[project]`);
});



module.exports = router;

