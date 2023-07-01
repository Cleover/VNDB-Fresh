import { getVisualNovelData } from "../../utils/vn.js";
import Cover from "../../components/Cover.jsx";

export const handler = {
  async GET(_, ctx) {
    const search = ctx.params.search;
    if (!search) return ctx.render(null);

    const vn = await getVisualNovelData(
      ["search", "=", search],
      [
        "id",
        "title",
        "image.url",
        "image.sexual",
        "image.violence",
      ].join(", "),
    );

    return ctx.render(vn);
  },
};

export default function Page({ data }) {
  if (!data || !data.results[0]) {
    return <h1>No VNs found</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <Cover data={data} />
    </div>
  );
}
