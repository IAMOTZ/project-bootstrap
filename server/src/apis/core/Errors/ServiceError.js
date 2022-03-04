class ServiceError extends Error {
  constructor(statusCode, data, message) {
    // @todo: If message is not provided,
    // we should be able to use the default message that maps to the statusCode
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default ServiceError;
