import { Router } from 'express';
const router = Router();

import { register, login, checkId, verifyMail, verifyMailCode } from '../controllers/authController.js';

router.post('/register', register);
router.post('/login', login);

router.get('/check/id/:id', checkId)
router.post('/check/verify-mail', verifyMail);
router.post('/check/verify-mail-code', verifyMailCode);

export default router;