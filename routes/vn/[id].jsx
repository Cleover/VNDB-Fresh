import { getVisualNovelData } from "../../utils/vn.js";
import { getVisualNovelReleases } from "../../utils/release.js";
import Sidebar from "../../components/Sidebar.jsx";
import Carousel from "../../components/Carousel.jsx";
import Tags from "../../components/Tags.jsx";
import Releases from "../../components/Releases.jsx";

export const handler = {
  async GET(_, ctx) {
    const vnID = ctx.params.id;
    if (!vnID) return ctx.render(null);
    const vn = await getVisualNovelData(
      ["id", "=", vnID],
      [
        "title",
        "titles.title",
        "titles.official",
        "tags.id",
        "tags.name",
        "tags.spoiler",
        "aliases",
        "released",
        "image.url",
        "image.sexual",
        "image.violence",
        "description",
        "screenshots.thumbnail",
        "screenshots.sexual",
        "screenshots.violence",
      ].join(", "),
    );

    const releases = await getVisualNovelReleases(
      ["vn", "=", ["id", "=", vnID]],
      [
        "id",
        "title",
        "languages.lang",
        "platforms",
        "released",
        "minage",
        "patch",
        "official",
      ].join(", "),
    );

    if (releases && releases.results && vn && vn.results[0]) {
      vn.results[0].releases = releases.results;
    }

    return ctx.render(vn);
  },
};

export default function Page({ data }) {
  if (!data && data.results[0]) {
    return <h1>Invalid VN ID</h1>;
  }

  data = data.results[0];

  // replace new lines with html breaks
  data.description = data.description.replace(/\n/g, "<br />");
  data.description = data.description.replace(
    /\[spoiler\]/g,
    '<span class="spoiler">',
  );
  data.description = data.description.replace(/\[\/spoiler\]/g, "</span>");

  data.titles = data.titles.slice(1);

  return (
    <div>
      <Sidebar />
      <div
        className="lg:ml-64 flex items-center justify-center h-24 sm:h-48"
        style={{ overflow: "hidden" }}
      >
        <div
          className="fill-current w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${
              data.screenshots[1]
                ? data.screenshots[1].thumbnail.replace("/st/", "/sf/")
                : ""
            })`,
            zIndex: -1,
            filter: "blur(5px)",
            transform: "scale(1.05)",
          }}
        >
        </div>
      </div>
      <div class="p-4 lg:ml-64">
        <div className="flex pb-5 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex">
              <div className="lg:p-5">
                <img
                  className="max-w-full rounded-lg"
                  src={data.image.url}
                  alt="Cover Art"
                  style={{
                    marginTop: "-50%",
                    border: "5px solid #fff",
                    zIndex: 1,
                    maxHeight: "250%",
                  }}
                />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold mb-2 break-words">
                  {data.title}
                </h1>
                <h2 className="text-1xl mb-2 break-words">
                  Released {data.released}
                </h2>
                <h5
                  className="text-sm mb-4 break-words"
                  dangerouslySetInnerHTML={{
                    __html: data.aliases.join("<br/>"),
                  }}
                >
                </h5>
              </div>
            </div>
            <div className="flex-1">
              <Tags tags={data.tags} spoiler="0" />
            </div>
          </div>
          <div className="flex flex-col rounded bg-gray-50 w-full lg:w-1/2">
            <link rel="stylesheet" href="/spoiler.css" />
            <p
              className="text-base p-5 break-words"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
        <ul className="flex flex-wrap text-xs font-medium text-center text-gray-500 border-b border-gray-200 sm:text-sm">
          <li className="mr-2">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-2 text-blue-600 bg-gray-100 rounded-t-lg active sm:p-4"
            >
              Releases
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 sm:p-4"
            >
              Tags
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 sm:p-4"
            >
              Characters
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 sm:p-4"
            >
              Staff
            </a>
          </li>
        </ul>
        <Releases releases={data.releases} />
        <br />
        <Carousel images={data.screenshots} />
      </div>
    </div>
  );
}
