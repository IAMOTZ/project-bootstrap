import ServiceError from '../core/Errors/ServiceError';
import Cat from './cats.model';

class CatsService {
  constructor() {
    this.cats = [];
  }

  getCats = async () => {
    return this.cats;
  }

  getCat = async (catId) => {
    const { cat } = await this.confirmCatExists(catId);
    return cat;
  }

  createCat = async ({ name, age }) => {
    const cat = new Cat(name, age, this.cats.length + 1);
    this.cats.push(cat);
    return cat;
  }

  updateCat = async (catId, { name, age }) => {
    const { cat } = await this.confirmCatExists(catId);
    cat.name = name;
    cat.age = age;
    return cat;
  }

  deleteCat = async (catId) => {
    const { index } = await this.confirmCatExists(catId);
    this.cats.splice(index, 1);
  }

  confirmCatExists = async (catId) => {
    const catIndex = this.cats.findIndex(cat => cat.id === catId);
    if (catIndex < 0) throw new ServiceError(404, {}, 'Cat not found');

    return { cat: this.cats[catIndex], index: catIndex };
  }
}

export default new CatsService();
