import jwt from "../utils/jwt.js"
import customAPIError from "../errors/custom-api.js";

const authentication = async (req, res, next) => {
  try {
    await jwt.verify(req.cookies.jwt)
  } catch(err) {
    if(err.name === "TokenExpiredError") next(new customAPIError(401, 'Expired jwt'));
    else next(new customAPIError(401, 'Invalid jwt token'));
  }
  next();
}

export default authentication;