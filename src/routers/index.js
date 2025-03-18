import { Router } from 'express';
import questionnairesRouter from './questionnaires.js';

const router = Router();

router.use('/questionnaires', questionnairesRouter);

export default router;
