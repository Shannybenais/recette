export default function ImproveSkills() {
    const list = [
      "Learn new recipes",
      "Experiment with food",
      "Write your own recipes",
      "Know nutrition facts",
      "Get cooking tips",
      "Get ranked"
    ];
  
    return (
      <div className="flex flex-col md:flex-row items-center section improve-skills">
        {/* Image Section */}
        <div className="col img flex-1">
          <img className="w-full" src="/img/gallery/img_10.jpg" alt="Cooking Image" />
        </div>
  
        {/* Typography Section */}
        <div className="col typography flex-1 md:pl-4 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Improve Your Culinary Skills</h1>
          {list.map((item, index) => (
            <p
              className={`skill-item text-gray-600 font-bold mb-2 pl-2 border-l-4 border-primary transform transition-all duration-300 opacity-0 animate-slide-in-right`}
              style={{
                animationDelay: `${(index + 2) * 0.1}s`
              }}
              key={index}
            >
              {item}
            </p>
          ))}
          <button className="btn mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up Now
          </button>
        </div>
      </div>
    );
  }
  