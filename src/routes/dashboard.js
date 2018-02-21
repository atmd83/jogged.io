const express = require('express');
const router = express.Router();

const authHelpers = require('../config/_helpers');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  console.log(req.user)
  handleResponse(res, 200, 'success');
});

function handleResponse(res, code, statusMsg) {
  res.render('dashboard');
}
module.exports = router;
