import express from 'express';
import { createAccessRequest, updateRequestStatus } from '../controllers/request';
import { verifyToken, authorizeRoles } from '../middlewares/auth';
const router = express.Router();
router.post('/', verifyToken, authorizeRoles('Employee'), createAccessRequest);
router.patch('/:id', verifyToken, authorizeRoles('Manager'), updateRequestStatus);
export default router;