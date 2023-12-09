import { createSupabaseBrowser } from "./supabase";

const supabase = createSupabaseBrowser();
interface TeamMember {
  name: string;
  LinkedIn: string;
  photo: string;
  Twitter: string;
}

interface InsertProjectWithToolsAndTeamMembersParams {
  title: string;
  problem: string;
  motivation: string;
  solution: string;
  creatorID: string; // UUID is represented as a string in TypeScript
  imageURL: string;
  description: string;
  category: string;
  tools: string[];
  teamMembers: TeamMember[];
}

export async function insertProject(
  params: InsertProjectWithToolsAndTeamMembersParams
) {
  const { data, error } = await supabase.rpc(
    "insertProjectWithToolsAndTeamMembers",
    params
  );

  if (error) {
    console.error("Error calling function:", error);
    return;
  }

  console.log("Function response:", data);
}
