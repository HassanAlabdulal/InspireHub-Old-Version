import { z } from "zod";
import { openai } from "./openai";
import { zodToJsonSchema } from "zod-to-json-schema";

const SuggestionInputSchema = z.object({
  areasOfInterest: z.string(),
  skillsOrTechnologies: z.string(),
  IndustryRelevance: z.string(),
  projectType: z.string(),
  timeCommitment: z.string(),
  PreferredTools: z.string(),
  CollaborationPreference: z.string(),
  DifficultyLevel: z.string(),
});

export async function createSuggestion(
  input: z.infer<typeof SuggestionInputSchema>
) {
  const data = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a project creator system. You will create a project idea based on user input. You should respond only with the idea.",
      },
      {
        role: "user",
        content: JSON.stringify(input),
      },
    ],
  });

  return data.choices[0].message.content;
}
