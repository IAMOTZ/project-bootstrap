import Joi from 'joi';
import JoiValidation from '../core/Validation/JoiValidation';

class CatsValidation extends JoiValidation {
  getCat = (req, res, next) => {
    const getCatSchema = Joi.object({
      catId: Joi.number().required(),
    });

    const requestData = this.validate(getCatSchema, { ...req.params });
    if (requestData.error) {
      return res.status(400).json({ message: 'Invalid Request', errors: requestData.error });
    }
    req.body = requestData;
    return next();
  }

  createCat = (req, res, next) => {
    const createCatSchema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number(),
    });

    const requestData = this.validate(createCatSchema, req.body);
    if (requestData.error) {
      return res.status(400).json({ message: 'Invalid Request', errors: requestData.error });
    }
    req.body = requestData;
    return next();
  }

  updateCat = (req, res, next) => {
    const updateCatSchema = Joi.object({
      catId: Joi.number().required(),
      name: Joi.string(),
      age: Joi.number(),
    });

    const requestData = this.validate(updateCatSchema, { ...req.body, ...req.params });
    if (requestData.error) {
      return res.status(400).json({ message: 'Invalid Request', errors: requestData.error });
    }
    req.body = requestData;
    return next();
  }

  deleteCat = (req, res, next) => {
    const deleteCatSchema = Joi.object({
      catId: Joi.number().required(),
    });

    const requestData = this.validate(deleteCatSchema, { ...req.params });
    if (requestData.error) {
      return res.status(400).json({ message: 'Invalid Request', errors: requestData.error });
    }
    req.body = requestData;
    return next();
  }
}

export default new CatsValidation();
