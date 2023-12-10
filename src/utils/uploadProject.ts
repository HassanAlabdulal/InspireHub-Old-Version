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
  tools: string;
  teamMembers: TeamMember[];
}

export async function insertProject(
  params: InsertProjectWithToolsAndTeamMembersParams
) {
  const { data: project, error: perror } = await supabase
    .from("Project")
    .insert({
      CreatorID: params.creatorID,
      problem: params.problem,
      solution: params.solution,
      title: params.title,
      category: params.category,
      description: params.description,
      motivation: params.motivation,
    })
    .select()
    .single();

  await supabase
    .from("Tools")
    .insert({ project_id: project?.id!, tool: params.tools });

  for (const member of params.teamMembers) {
    await supabase.from("TeamMembers").insert({
      project_id: project?.id!,
      name: member.name,
      Twitter: member.Twitter,
      LinkedIn: member.LinkedIn,
      photo: member.photo,
    });
  }
}
