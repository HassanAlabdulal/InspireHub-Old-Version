import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Parse the request body
    const { email, password, firstName, lastName, major, academicLevel } =
      await request.json();

    // Sign up the user
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;

    const user = data.user;
    if (user === null) throw new Error("User is null");

    // Insert profile data

    const { error: profileError } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: `${firstName} ${lastName}`,
        major,
        academic_level: academicLevel,
      });

    if (profileError) throw profileError;

    // Return success response
    return new Response(JSON.stringify({ message: "Sign up successful" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    // Return error response
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
