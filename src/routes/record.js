var express = require('express')
var router = express.Router()

var bodyParser     = require('body-parser');



var json_body_parser = bodyParser.json();
var urlencoded_body_parser = bodyParser.urlencoded({ extended: true });

router.use(json_body_parser);
router.use(urlencoded_body_parser);




router.get('/', (req, res) => res.send('works'));


router.post('/', (req, res) => {

	const id = req.header('id');
	const app = req.header('app');
	const message = req.body.message;
	const level = req.body.level;

	// header contains user id and app name	
	// post contains { message: msg, level: level }
	//  https://jogged-api.herokuapp.com/[id]/[project]`);

	res.send('works')
});



module.exports = router;

