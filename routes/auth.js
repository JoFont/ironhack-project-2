const router = require('express').Router();

module.exports = router.get('/', (req, res, next) => {
  res.render('auth', { name: 'James Dean' });
});
