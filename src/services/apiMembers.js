import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getMembers({
  selectedUniversity,
  selectedMandat,
  filter,
  sortBy,
  page,
}) {
  if (selectedUniversity === "0") return [];
  let query = supabase.from("members").select("*", { count: "exact" });
  query = query.eq("university_name", selectedUniversity);

  //Mandat
  query = query.eq("mandat", selectedMandat);

  //FILTER
  if (filter) query = query.eq(filter.field, filter.value);
  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("Members could not be loaded");
  }
  return { data, error, count };
}

export async function getMember(id) {
  let { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Member not found");
  }

  return data;
}

export async function getCounting() {
  try {
    // Count total members
    const { count: totalCount, error: totalError } = await supabase
      .from("members")
      .select("*", { count: "exact" });

    if (totalError) {
      console.error(totalError);
      throw new Error("Total count could not be retrieved");
    }

    // Count male members
    const { count: maleCount, error: maleError } = await supabase
      .from("members")
      .select("*", { count: "exact" })
      .eq("gender", "MALE");

    if (maleError) {
      console.error(maleError);
      throw new Error("Male count could not be retrieved");
    }

    // Count female members
    const { count: femaleCount, error: femaleError } = await supabase
      .from("members")
      .select("*", { count: "exact" })
      .eq("gender", "FEMALE");

    if (femaleError) {
      console.error(femaleError);
      throw new Error("Female count could not be retrieved");
    }

    // Count Clubs
    const { count: universityCount, clubsError } = await supabase
      .from("university")
      .select("*", { count: "exact" });
    if (clubsError) {
      console.error(clubsError);
      throw new Error("Club count could not be retrieved");
    }
    return { totalCount, maleCount, femaleCount, universityCount };
  } catch (err) {
    console.error(err);
    throw err;
  }
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

export async function updateMember(newMember, id) {
  const { data, error } = await supabase
    .from("members")
    .update({ ...newMember })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Member could not be updated");
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
