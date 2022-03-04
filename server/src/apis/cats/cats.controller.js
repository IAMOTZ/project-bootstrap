import catsService from './cats.service';

class CatsController {
  constructor() {
    this.catsService = catsService;
  }

  getCats = async (req, res) => {
    const cats = await this.catsService.getCats();
    return res.status(200).json({ data: cats });
  }

  getCat = async (req, res) => {
    const cat = await this.catsService.getCat(+req.params.catId);
    return res.status(200).json({ data: cat });
  }

  createCat = async (req, res) => {
    const cat = await this.catsService.createCat(req.body);
    return res.status(201).json({ data: cat });
  }

  updateCat = async (req, res) => {
    const updatedCat = await this.catsService.updateCat(+req.params.catId, req.body);
    return res.status(200).json({ data: updatedCat });
  }

  deleteCat = async (req, res) => {
    await this.catsService.deleteCat(+req.params.catId);
    return res.status(204).end();
  }
}

export default new CatsController();
