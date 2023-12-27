-- AddForeignKey
ALTER TABLE "prompt_history" ADD CONSTRAINT "prompt_history_prompt_id_fkey" FOREIGN KEY ("prompt_id") REFERENCES "prompts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
