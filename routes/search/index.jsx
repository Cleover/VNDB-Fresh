export const handler = {
  async POST(req, ctx) {
    const form = await req.formData();
    const search = form.get("search")?.toString();
    const headers = new Headers();
    headers.set("Location", "/search/" + search);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Page() {
  return (
    <>
      <form method="post">
        <h1 className="text-3xl font-bold">Mebious</h1>
        <input
          type="text"
          name="search"
          value=""
          className="border-2 border-gray-500 rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-sm rounded-full shadow-sm"
        >
          Search!
        </button>
      </form>
    </>
  );
}
