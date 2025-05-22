import express from 'express';
import { createSoftware } from '../controllers/software';
import { verifyToken, authorizeRoles } from '../middlewares/auth';
const router = express.Router();
router.post('/', verifyToken, authorizeRoles('Admin'), createSoftware);
export default router;