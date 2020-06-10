import UserController from './user.controller.js';
import express from 'express';
const router = express.Router();

router.post('/create', UserController.create);

module.exports = router;