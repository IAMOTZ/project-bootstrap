import Joi from 'joi';
import { createValidationMiddleware } from '../core/Validation/decorators';
import JoiValidation from '../core/Validation/JoiValidation';

class CatsValidation extends JoiValidation {
  @createValidationMiddleware()
  getCat = req => ({
    schema: Joi.object({
      catId: Joi.number().required(),
    }),
    data: req.params,
  })

  @createValidationMiddleware()
  createCat = req => ({
    schema: Joi.object({
      name: Joi.string().required(),
      age: Joi.number(),
    }),
    data: req.body,
  })

  @createValidationMiddleware()
  updateCat = req => ({
    schema: Joi.object({
      catId: Joi.number().required(),
      name: Joi.string(),
      age: Joi.number(),
    }),
    data: { ...req.params, ...req.body },
  })

  @createValidationMiddleware()
  deleteCat = req => ({
    schema: Joi.object({
      catId: Joi.number().required(),
    }),
    data: req.params,
  })
}


export default new CatsValidation();
