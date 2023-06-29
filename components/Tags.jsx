const TagContainer = ({ tags, spoiler }) => {
  const parsedSpoiler = parseInt(spoiler, 10);

  const filteredTags = tags.filter((tag) => {
    const parsedTagSpoiler = parseInt(tag.spoiler, 10);
    return parsedTagSpoiler <= parsedSpoiler;
  });

  return (
    <div>
      <ul className="flex flex-wrap text-xs font-medium text-center text-gray-500 border-b border-gray-200 sm:text-sm">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-2 text-blue-600 bg-gray-100 rounded-t-lg active sm:p-4"
          >
            No Spoilers
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 sm:p-4"
          >
            Minor Spoilers
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block p-2 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 sm:p-4"
          >
            Spoiler Me!
          </a>
        </li>
      </ul>
      <div className="flex justify-center mt-2">
        <div className="overflow-hidden h-56">
          <div className="p-1 flex flex-wrap">
            {filteredTags.map((tag) => (
              <span
                className="bg-green-100 text-green-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                key={tag.id}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="text-blue-500 font-semibold hover:underline">
          Show More
        </button>
      </div>
    </div>
  );
};

export default TagContainer;
