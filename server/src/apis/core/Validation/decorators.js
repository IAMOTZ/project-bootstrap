import Joi from 'joi';
import JoiValidation from './JoiValidation';

/**
 * @description A class method decorator that tranforms a ValidationDescriptor into an
 * express middleware validator. What is a decorator? See class decorators https://github.com/tc39/proposal-decorators
 * FYI: ValidationDescriptors i.e the method to decorate must return an object containing
 * schema and data.
 * @param {string} message The response message
 * @returns {function} An express middleware to handle validation
 */
export const createValidationMiddleware = message => (target, { name }) => {
  function methodWrapper(validationDescriptor) {
    return (req, res, next) => {
      if (!(this instanceof JoiValidation)) throw Error('createValidationMiddleware can only be used on JoiValidation class or sub-classes');

      const { schema, data } = validationDescriptor(req, res, next);
      if (typeof schema !== typeof Joi.object() || !data) throw Error(`validationDescriptor "${name}" must return schema and data`);
      const result = this.validate(schema, data);
      if (result.error) {
        return res.status(400).json({ message: message || 'Invalid Request', errors: result.error });
      }
      req.body = result;
      return next();
    };
  }
  return methodWrapper;
};
