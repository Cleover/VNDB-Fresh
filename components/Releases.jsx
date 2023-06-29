export default function Releases({ releases }) {
  // {
  //   official: false,
  //   languages: [ { lang: "ru" } ],
  //   id: "r49133",
  //   patch: true,
  // }

  const groupedReleases = {};

  releases.forEach((release) => {
    release.languages.forEach((lang) => {
      const languageCode = lang.lang;

      if (!groupedReleases[languageCode]) {
        groupedReleases[languageCode] = [];
      }

      groupedReleases[languageCode].push(release);
    });
  });

  const color = "red";

  return (
    <div className="pt-3">
      {Object.keys(groupedReleases).map((langKey, index) => {
        const langReleases = groupedReleases[langKey];
        return (
          <div key={langKey} data-accordion="collapse">
            {index > 0 && (
              <div className="pt-3 pb-3">
                <hr />
              </div>
            )}
            <div className="pl-3 pr-3 flex items-center">
              <span
                className={`bg-gray-100 text gray-800 text-xs font-medium px-2.5 py-0.5 rounded pl-1 pr-1`}
              >
                {langKey}
              </span>
              <button
                className="bg-white"
                data-accordion-target={`#${langKey}-releases`}
                type="button"
                aria-expanded="false"
                aria-controls={`${langKey}-releases`}
              >
                <svg
                  data-accordion-icon
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
              </button>
            </div>
            <div
              id={`${langKey}-releases`}
              className="hidden container mx-auto text-xs sm:text-sm"
            >
              {langReleases.map((release) => (
                <div className="flex justify-between pt-1">
                  <div className="flex items-center">
                    <div
                      className="mr-4"
                      style={{
                        width: "4.5rem",
                      }}
                    >
                      <p className="text-gray-500">{release.released}</p>
                    </div>
                    <div className="mr-4 w-7">
                      {release.minage && (
                        <span
                          className={`bg-${color}-100 text-${color}-800 text-xs font-medium px-2.5 py-0.5 rounded pl-1 pr-1`}
                        >
                          {release.minage}+
                        </span>
                      )}
                    </div>
                    <div className="mr-4 flex items-center">
                      <a href="#" className="text-blue-500">
                        {release.title}
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-100 mx-4 align-bottom mt-3" />
                  <div className="flex items-center">
                    {release.platforms.map((platform) => (
                      <img
                        src={`/icons/platform/${platform}.svg`}
                        title="Web"
                        className="inline-block h-3 mr-2"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
