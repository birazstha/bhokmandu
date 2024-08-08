export default function Search({handleSearch}) {
  return (
    <input
      type="text"
      placeholder="Enter your favorite Cuisine."
      onChange={handleSearch}
      className="border-[1.2px] border-gray-400 w-full mb-8 p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 transition duration-300"
    />
  );
}
