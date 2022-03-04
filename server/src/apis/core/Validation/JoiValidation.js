class JoiValidation {
  constructor(validationOptions = {}) {
    this.validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
      skipFunctions: true,
      ...validationOptions,
    };
  }

  validate(validationSchema, data) {
    const result = validationSchema.validate(data, this.validationOptions);
    if (result.error) {
      const formattedError = JoiValidation.formateJoiError(result.error);
      result.error = formattedError;
      return result;
    }
    return result.value;
  }

  static formateJoiError(joError) {
    const { details } = joError;
    const error = {};
    details.forEach((detail) => {
      if (error[detail.context.label]) {
        error[detail.context.label].push(detail.message);
      } else {
        error[detail.context.label] = [detail.message];
      }
    });
    return error;
  }
}

export default JoiValidation;
