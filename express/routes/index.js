import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  const message = `request.url: ${req.url}\n`;
  res.send(message);
});

export default router;
