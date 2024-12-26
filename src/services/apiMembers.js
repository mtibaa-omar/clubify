import supabase, { supabaseUrl } from "./supabase";

export async function getMembers({ filter, sortBy }) {
  const { data, error } = await supabase.from("members").select("*");
  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }
  return data;
}

export async function getUniversities({ clubState }) {
  if (clubState === null) return;

  const { data, error } = await supabase
    .from("university")
    .select("*")
    .eq("state", clubState);
  if (error) {
    console.error(error);
    throw new Error("Universities could not be loaded");
  }
  return data;
}

export async function createMember(newMember) {
  const { data, error } = await supabase
    .from("members")
    .insert([{ ...newMember }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Member could not be added");
  }

  return data;
}
