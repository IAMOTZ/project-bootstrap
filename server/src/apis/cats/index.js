import { Router } from 'express';
import controller from './cats.controller';
import validation from './cats.validation';

const router = Router();

router.get('/', controller.getCats);
router.get('/:catId', validation.getCat, controller.getCat);
router.post('/', validation.createCat, controller.createCat);
router.put('/:catId', validation.updateCat, controller.updateCat);
router.delete('/:catId', validation.deleteCat, controller.deleteCat);

export default router;
