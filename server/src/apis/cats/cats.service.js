import ServiceError from '../core/Errors/ServiceError';
import Cat from '../../db/models/cat';


class CatsService {
  constructor() {
    this.cats = [];
  }

  getCats = async () => Cat.find();

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
    await this.confirmCatExists(catId);
    await Cat.deleteOne({ _id: catId });
  }

  confirmCatExists = async (catId) => {
    const cat = await Cat.findById(catId);

    if (!cat) throw new ServiceError(404, {}, 'Cat not found');
    return cat;
  }
}

export default new CatsService();
