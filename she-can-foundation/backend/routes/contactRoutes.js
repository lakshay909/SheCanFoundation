import express from 'express';
import submitContactForm, { getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/submit', submitContactForm);
router.get('/all', getMessages);

export default router;
