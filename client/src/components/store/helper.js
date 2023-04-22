import axios from "axios";

export async function getServerData(url) {
  const data = await (await axios.get(url))?.data;
  return data;
}
