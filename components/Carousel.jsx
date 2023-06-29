export default function Carousel(data) {
  return (
    <div>
      <div className="overflow-x-auto whitespace-nowrap bg-gray-200 rounded-md p-2 sm:p-5">
        <div className="flex">
          {data.images.map((images) => (
            <img
              src={images.thumbnail.replace("/st/", "/sf/")}
              className="inline-block rounded h-36 mr-2 sm:h-64 sm:mr-4"
              style={{
                filter: `${
                  images.sexual > 0 || images.violence > 0
                    ? "blur(10px)"
                    : "none"
                }`,
              }}
              alt="image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
