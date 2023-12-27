import { Router } from 'express';
import PromptController from './classes/controllers/PromptController.js';

const router = Router();
const promptController = new PromptController

router.get("/todaysprompt", (req, res) => {promptController.getTodaysPrompt(req, res);});
router.get("/multidayprompts", (req, res) => {promptController.getMultiDayPrompts(req, res);});
router.get("/randomprompt", (req, res) => {promptController.getRandomPrompt(req, res);});

export default router;