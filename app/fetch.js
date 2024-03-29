import axios from "axios";

export async function GET(url) {
  let data = null;
  let error = null;
  await axios
    .get(process.env.NEXT_PUBLIC_API_URL + url)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      error = err?.response;
    });
  return { data, error };
}
