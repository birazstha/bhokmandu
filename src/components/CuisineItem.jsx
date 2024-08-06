export default function CuisineItem({ cuisine }) {
  return (
    <div className="w-[350px] transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-xl rounded-lg mb-5">
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={cuisine.image}
          alt="Aloo Tama"
        />
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold">{cuisine.title}</p>
        <p>{cuisine.description}</p>
      </div>
    </div>
  );
}
