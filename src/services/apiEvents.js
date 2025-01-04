import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getEvents({ filterType, queryDate }) {
  let query = supabase.from("events").select("*");
  if (filterType === "last")
    query = query
      .gte("startDate", queryDate)
      .lte("startDate", getToday({ end: true }));
  if (filterType === "next")
    query = query
      .gte("startDate", getToday({ end: true }))
      .lte("startDate", queryDate);
  const { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Events not found");
  }

  return data;
}

export async function createEvent(newEvent) {
  console.log(newEvent);
  const { data, error } = await supabase
    .from("events")
    .insert([{ ...newEvent }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Event could not be created");
  }

  return data;
}

export async function deleteEvent(id) {
  const { data, error } = await supabase.from("events").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Event could not be deleted");
  }

  return data;
}
