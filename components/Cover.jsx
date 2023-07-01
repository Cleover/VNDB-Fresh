export default function Cover({ data }) {
    return (
      <div className="p-5 lg:p-20">
        <div className="grid gap-1 grid-cols-3 md:gap-4 md:grid-cols-4 xl:grid-cols-5">
          {data.results.map((vn) => (
            <div
              key={vn.id}
              className="relative"
              style={{
                width: "100%",
              }}
            >
              <img
                className="object-cover h-full w-full zoom-image"
                src={vn.image.url}
                alt={vn.title + "cover"}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 bg-opacity-80 py-2 px-4">
                <a
                  className="text-gray-800 text-sm font-semibold mr-2"
                  href={`../vn/${vn.id}`}
                >
                  {vn.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  