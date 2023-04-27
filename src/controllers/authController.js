import customAPIError from '../errors/custom-api.js';
import User from '../models/user.js';
import jwt from '../utils/jwt.js';
import verificationCode from '../utils/verificationCode.js';
import mailer from '../utils/mailer.js';


/** 아이디와 비밀번호로 로그인 */
const login = async (req, res, next) => { 
  try {
    const { id, password } = req.body;
    const user = await User.findUserById(id);
  
    if(!user) return next(new customAPIError(400, 'Invalid ID'));
    if(password !== user.password) return next(new customAPIError(400, 'Invalid password'));

    const token = jwt.sign(req.body);
  
    res.cookie('jwt', token.token, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
    res.status(200).json({ success: true, message: `Login success` });
  } catch(err) {
    next(new customAPIError(500, 'Error in select db - findUserById'));
  }
}

/** 아이디와 비밀번호로 회원가입 */
const register = async (req, res, next) => {
  try {
    await User.saveUserInfo(req.body);
    res.status(200).json({ success: true, message: 'Register success' });
  } catch(err) {
    next(new customAPIError(500, 'Error in insert db - saveUserInfo'));
  }
}

/** 아이디 중복 체크 */
const checkId = async (req, res, next) => {
  try {
    const { isExistence } = await User.checkIdExistence(req.params.id);

    if(isExistence) return next(new customAPIError(409, 'Exists already ID'));
    res.status(200).json({ success: true, message: 'ID is avaliable' })
  } catch(err) {
    console.log(err);
    next(new customAPIError(500, 'Error in select db - checkIdExistence'));
  }
}

/** 메일로 인증 코드 보내기 */
const verifyMail = async (req, res, next) => {
  const { email } = req.query;
  const code = verificationCode.createCode(email);

  try {
    await mailer.sendVerificationCode(email, code);
  } catch(err) {
    return next(new customAPIError(500, 'Error in sending email verification code'));
  }
  
  return res.status(200).json({ success: true, message: 'Successfully send code' });
}

/** 메일 인증 코드 체크 */
const verifyMailCode = async (req, res) => {
  const { email, code } = req.body;
  const success = verificationCode.verifyCode(email, code);

  if(success) return res.status(200).json({ success: true, message: 'Successfully verify email code' })
  next(new customAPIError(400, 'Invalid email verification code'));
}

export {
  register,
  login,
  checkId,
  verifyMail,
  verifyMailCode,
}