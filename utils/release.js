import axiod from "https://deno.land/x/axiod/mod.ts";

export async function getVisualNovelReleases(filters, fields) {
  try {
    const response = await axiod.post(
      "https://api.vndb.org/kana/release",
      {
        filters: filters,
        fields: fields,
        results: 100
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
