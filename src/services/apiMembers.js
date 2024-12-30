import supabase from "./supabase";

export async function getMembers({ filter, sortBy }) {
  let query = await supabase.from("members").select("*");
  const { data, error } = query;
  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }
  return data;
}

export async function getUniversities({ clubState }) {
  if (clubState === null) return [];

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

export async function deleteMember(id) {
  const { data, error } = await supabase.from("members").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Member could not be deleted");
  }

  return data;
}

export const fetchRoleEnumValues = async () => {
  const { data, error } = await supabase.rpc("get_role_enum_values");

  if (error) {
    console.error("Error fetching role enum values:", error);
    throw new Error("Failed to fetch role enum values.");
  }

  if (!data || data.length === 0) {
    console.error("No values found for the enum 'role_enum'.");
    throw new Error("No enum values found.");
  }

  return data.map((row) => row.value);
};
