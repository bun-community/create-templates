import {Router, Request, Response, NextFunction} from 'express';
const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Express' });
});

export default router;
