import { getRandomVisualNovel } from "../../utils/vn.js";

export const handler = {
  async GET() {
    const randomID = await getRandomVisualNovel();
    const headers = new Headers();
    headers.set("Location", "/vn/" + randomID);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Random() {
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
}
