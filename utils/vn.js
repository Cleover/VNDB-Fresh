import axiod from "https://deno.land/x/axiod/mod.ts";

export async function getVisualNovelData(filters, fields) {
  try {
    const response = await axiod.post(
      "https://api.vndb.org/kana/vn",
      {
        filters: filters,
        fields: fields,
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

export async function getRandomVisualNovel() {
  try {
    const response = await axiod.post(
      "https://api.vndb.org/kana/vn",
      {
        sort: "id",
        reverse: true,
        results: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    if (data.results.length > 0) {
      let randomVN = Math.floor(
        Math.random() * (parseInt(data.results[0].id.substring(1)) - 1 + 1) + 1
      );

      return "v" + randomVN;
    } else return null;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
