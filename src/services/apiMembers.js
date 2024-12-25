import supabase, { supabaseUrl } from "./supabase";

export async function getMembers() {
  const { data, error } = await supabase.from("members").select("*");

  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }
  return data;
}

export async function createMember({ newMember }) {
  const { data, error } = await supabase
    .from("members")
    .insert([{ newMember }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Member could not be added");
  }

  return data;
}
