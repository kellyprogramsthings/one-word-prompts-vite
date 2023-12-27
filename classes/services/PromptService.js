import Prisma from "@prisma/client";
import _ from "lodash";


const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


export class PromptService {
  async getPrompt(id) {
    return await prisma.prompt.findUnique({ where: { id: id } });
  }


  async getPromptNotInRecentPrompts() {
    let today = new Date();
    let thirtyDays = new Date(new Date().setDate(today.getDate() - 30));
    let chosenPrompt = await prisma.$queryRaw`
      SELECT p.* 
      FROM prompts p
      LEFT JOIN prompt_history ph ON ph.prompt_id = p.id
      WHERE ph.created_at <= ${thirtyDays}
        OR ph.id IS NULL
      ORDER BY random() 
      LIMIT 1;`;

    // queryRaw returns an array
    return chosenPrompt[0];
  }


  async getTodaysPrompt() {
    const today = new Date(new Date().setUTCHours(0,0,0,0));
    let currentPrompt = await prisma.promptHistory.findFirst({
      take: 1, orderBy: { createdAt: "desc" }
    });

    if (!currentPrompt || currentPrompt.createdAt < today) {
      const newPrompt = await this.getPromptNotInRecentPrompts();
      currentPrompt = await this.saveToPromptHistory(newPrompt.id);
    }

    return await prisma.prompt.findUnique({ 
      where: { id: currentPrompt.promptId } 
    });
  }


  async getMultiDayPrompts(numDays = 90) {
    // we'll just shift off the one for today rather than messing with dates
    let prompts = await prisma.promptHistory.findMany({
      include: {
        prompt: true
      },
      take: numDays + 1, 
      orderBy: { createdAt: "desc" }
    });
    prompts.shift();

    return _.map(prompts, p => {
      const newDate = new Date(p.createdAt.toDateString())
      const formattedDate = newDate.toLocaleDateString("en-US", options);
      return { id: p.id, promptId: p.promptId, date: formattedDate, promptName: p.prompt.name }
    })
  }


  async getRandomPrompt() {
    return this.getPromptNotInRecentPrompts();
  }


  async saveToPromptHistory(id) {
    return await prisma.promptHistory.create({ data: { promptId: id } });
  }


  // TODO: remove this when cronjob is set up.
  async backFillPrompts() {
    // dates get left blank if nobody visits on that day
  }
  

  async promptExists(name) {
    let prompt = await prisma.prompt.findUnique({ where: { name: name } });
    return (!!prompt);
  }


  getDatesInRange(startDate, endDate) {
    const start = new Date(new Date(startDate).setUTCHours(0, 0, 0, 0));
    const end = new Date(new Date(endDate).setUTCHours(0, 0, 0, 0));
    
    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates; 
  }
}