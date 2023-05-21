import {Router, Request, Response, NextFunction} from 'express';
var router = Router();


/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
