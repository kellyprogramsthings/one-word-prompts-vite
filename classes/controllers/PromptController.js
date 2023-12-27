import { PromptService } from '../services/PromptService.js';
import { errorCatch } from '../../utils/helpers.js';


// TODO: turn into a class


const promptService = new PromptService;


class PromptController {
  returnResponse(res, item, errorStatus = 500, message = "Something went wrong.") {
    if (item) {
      return res.status(200).json(item);
    }
    else {
      return res.status(errorStatus).json({ message: message });
    }
  }


  async getPrompt(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const prompt = await promptService.getPrompt(id);
      return this.returnResponse(res, prompt, 404, "That prompt doesn't exist.");
    }
    catch(e) {
      errorCatch(e);
      return res.status(500).json({ message: e.message })
    }
  }
  
  
  async getTodaysPrompt(_req, res) {
    try {
      const prompt = await promptService.getTodaysPrompt();
      return this.returnResponse(res, prompt, 500, "Could not retrieve today's prompt.");
    }
    catch(e) {
      errorCatch(e);
      return res.status(500).json({ message: e.message })
    }
  }
  
  
  async getMultiDayPrompts(_req, res) {
    try {
      const prompts = await promptService.getMultiDayPrompts(90);
      return this.returnResponse(res, prompts, 500, "Could not retrieve previous prompts.");
    }
    catch(e) {
      errorCatch(e);
      return res.status(500).json({ message: e.message })
    }
  };
  
  
  async getRandomPrompt(_req, res) {
    try {
      const prompt = await promptService.getRandomPrompt();
      return this.returnResponse(res, prompt, 500, "Could not retrieve random prompt.");
    }
    catch(e) {
      errorCatch(e);
      return res.status(500).json({ message: e.message })
    }
  }
}


export default PromptController;