/* eslint-disable no-console */
const SUPABASE_URL = "https://gxwgjhfyrlwiqakdeamc.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
  // from the dogs table, select all items
  const resp = await client.from("dogs").select("*");
  //   console.log(resp);

  // and return the response (checking for errors)
  return checkError(resp);
}

export async function getDog(id) {
  // from the dogs table, select a single dog who has the matching id
  const resp = await client.from("dogs").select("*").eq("id", id).single();
  // and return the response (checking for errors)
  console.log(resp);
  return checkError(resp);
}

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}
