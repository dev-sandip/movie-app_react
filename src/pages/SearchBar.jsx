import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <div className="my-4 text-center">
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          htmlFor="search"
          className="block text-4xl font-medium text-gray-700 mb-1"
        >
          Search Your Favourite Movie 📽️ ..
        </label>
        <input
          type="text"
          id="search"
          defaultValue={query}
          className="w-80  p-2 rounded-full border border-gray-300 focus:ring focus:ring-indigo-200 mb-2 mt-2"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {/* <button
          type="submit"
          className="bg-red-500 w-28 text-white rounded-xl p-2 hover:bg-red-600 transition duration-300"
        >
          Search
        </button> */}
      </form>
      {isError.show && (
        <div className="text-red-600 text-lg mt-2"> {isError.msg}</div>
      )}
    </div>
  );
};

export default SearchBar;
