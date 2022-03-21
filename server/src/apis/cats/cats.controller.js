import { catchControllerError } from '../core/Errors/decorators';
import catsService from './cats.service';

class CatsController {
  constructor() {
    this.catsService = catsService;
  }

  @catchControllerError
  getCats = async (req, res) => {
    const cats = await this.catsService.getCats();
    return res.status(200).json({ data: cats });
  }

  @catchControllerError
  getCat = async (req, res) => {
    const cat = await this.catsService.getCat(req.params.catId);
    return res.status(200).json({ data: cat });
  }

  @catchControllerError
  createCat = async (req, res) => {
    const cat = await this.catsService.createCat(req.body);
    return res.status(201).json({ data: cat });
  }

  @catchControllerError
  updateCat = async (req, res) => {
    const updatedCat = await this.catsService.updateCat(req.params.catId, req.body);
    return res.status(200).json({ data: updatedCat });
  }

  @catchControllerError
  deleteCat = async (req, res) => {
    await this.catsService.deleteCat(req.params.catId);
    return res.status(204).end();
  }
}

export default new CatsController();
