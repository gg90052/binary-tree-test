import supabase from "./supabaseClient";

export async function getHolders() {
  const { data, error } = await supabase.from("customers").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
export async function getHolder(code) {
  let { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("code", code);

  if (error) {
    throw new Error(error.message);
  }
  if (data.length === 0) {
    throw new Error("查無保戶");
  } else {
    return data[0];
  }
}
