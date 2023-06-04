// var express = require('express');
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.send('Express');
});

// module.exports = router;
export default router;
