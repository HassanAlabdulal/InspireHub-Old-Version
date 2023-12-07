import { zodToJsonSchema } from "zod-to-json-schema";

import { z } from "zod";
import { openai } from "./openai";

const SuggestionInputSchema = z.object({
  areasOfInterest: z.string(),
  skillsOrTechnologies: z.string(),
  IndustryRelevance: z.string(),
  projectField: z.string(),
  timeCommitment: z.string(),
  PreferredTools: z.string(),
  CollaborationPreference: z.string(),
  DifficultyLevel: z.string(),
});

export async function createSuggestion(
  input: z.infer<typeof SuggestionInputSchema>
) {
  // Validate the input using the schema
  const validationResult = SuggestionInputSchema.safeParse(input);
  if (!validationResult.success) {
    // Handle the error appropriately, e.g., throw an error or return a specific message
    throw new Error("Invalid input for suggestion creation");
  }

  // If the input is valid, proceed with the API call
  const validInput = validationResult.data;
  const data = await openai.chat.completions.create({
    // model: "gpt-3.5-turbo",
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Project Suggester is a GPT designed to suggest projects to users based on their input, provided in a JSON schema. The GPT excels in analyzing details about the user's skills and interests from this structured data and generates project ideas that align with these inputs. It operates under the assumption that it should make informed guesses if the provided information is incomplete or not entirely clear, ensuring a seamless and efficient suggestion process. In terms of interaction, Project Suggester maintains a strictly professional and straightforward tone, focusing on delivering clear and concise project ideas without additional embellishments or creative flair. This approach ensures that the core function of providing tailored project suggestions remains the focal point of each interaction.",
      },
      {
        role: "user",
        content: JSON.stringify(validInput),
      },
    ],
  });

  return data.choices[0].message.content;
}
