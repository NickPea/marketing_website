//

import express from 'express';
import SSRController from './app-controller';

const router = express.Router();

//routes
router.use(SSRController.getApp);

export default router