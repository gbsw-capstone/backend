import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config.js";

const sign = (user) => {
  const payload = {
    id: user.id,
  };
  const result = {
    token: jwt.sign(payload, JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: user.keepLogin ? "1440m" : "300m",
      issuer: "issuer",
    }),
  };
  return result;
};

const verify = async (token) => jwt.verify(token, JWT_SECRET);

export default {
  sign,
  verify
};
