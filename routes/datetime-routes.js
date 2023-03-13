import { Router } from 'express';
export const router = Router();

import controller from '../controllers/datetime-controller.js';

// with "/:unixcode" parameter
router.get('/:unixcode', controller.unixToDateObj);

// without "/:unixcode" parameter
router.get('/', controller.emptyToDateObj);
