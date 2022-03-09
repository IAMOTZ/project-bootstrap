/**
 * @description A class method decorator that catches and properly handles any error
 * thrown from the decorated method(a controller)
 * What is a decorator? See class decorators https://github.com/tc39/proposal-decorators
 * @returns {function} An method creator that creates the wrapped controller method
 */
export const catchControllerError = (target, { name: controllerName }) => {
  function methodCreator(controller) {
    return async (req, res, next) => {
      try {
        console.log(`Executing the ${controllerName} controller`);
        await controller(req, res, next)
      } catch(err) {
        if (err.statusCode) {
          console.log(`${controllerName} controller failed with an http status code, sending back a failure response`);
          return res.status(err.statusCode).json({ message: err.message });
        }
        console.log(err, `${controllerName} controller failed without an http status code`);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  }
  return methodCreator;
};
