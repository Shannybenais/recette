import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
  const chiefs = [
    {
      name: "Juan Carlos",
      img: "/img/top-chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "/img/top-chiefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "/img/top-chiefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "/img/top-chiefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "/img/top-chiefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: "/img/top-chiefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];

  return (
    <div className="section chiefs">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Top Chiefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
        {chiefs.map((chief) => (
          <div key={chief.name} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={chief.img}
              alt={chief.name}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800">{chief.name}</h2>
              <p className="text-sm text-gray-600">{chief.cuisine}</p>
              <p className="text-sm text-gray-600">{chief.recipesCount} Recipes</p>
              <div className="flex space-x-2 mt-2">
                <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
                </svg>
                <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
                </svg>
                <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
