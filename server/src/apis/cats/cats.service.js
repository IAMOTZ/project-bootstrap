import ServiceError from '../core/Errors/ServiceError';
import Cat from '../../db/models/cat';


class CatsService {
  constructor() {
    this.cats = [];
  }

  getCats = async () => Cat.findAll();

  getCat = async (catId) => {
    const cat = await this.confirmCatExists(catId);
    return cat;
  }

  createCat = async ({ name, age }) => {
    const cat = new Cat({ name, age });
    await cat.save();
    return cat;
  }

  updateCat = async (catId, { name, age }) => {
    const cat = await this.confirmCatExists(catId);
    cat.name = name ?? cat.name;
    cat.age = age ?? cat.age;
    await cat.save();
    return cat;
  }

  deleteCat = async (catId) => {
    const cat = await this.confirmCatExists(catId);
    await cat.destroy();
  }

  confirmCatExists = async (catId) => {
    const cat = await Cat.findByPk(catId);

    if (!cat) throw new ServiceError(404, {}, 'Cat not found');
    return cat;
  }
}

export default new CatsService();
