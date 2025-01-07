export default function HeroSection() {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center section hero">
      {/* Typography Section */}
      <div className="flex-1 md:pr-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
         Qui sommes nous ?
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Ce site est un lieu où vous pouvez ravir votre âme et votre estomac avec de délicieuses recettes de cuisine du monde entier.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
        Explorez maintenant
        </button>
      </div>

      {/* Gallery Section */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg"
            style={{ paddingTop: "100%" }}
          >
            <img
              src={src}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
