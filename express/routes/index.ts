import {Router, Request, Response, NextFunction} from 'express';
var router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
