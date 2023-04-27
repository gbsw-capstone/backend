import CustomApiError from '../errors/custom-api.js';

const errorHandler = (err, req, res, next) => {
  if(err instanceof CustomApiError) {
    return res.status(err.statusCode).json(err);
  }
  console.log(err);
  return res.status(500).json(err)
}  

export default errorHandler;