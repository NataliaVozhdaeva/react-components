import API_PATH from "./constants";

const base = API_PATH;

export const getResource = async (url: string | undefined) => {
  console.log("url ", url);
  if (!url) url = "";
  const res = await fetch(`${base}${url}`);

  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};
