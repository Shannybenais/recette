import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="p-4">
                <img
                    className="h-16 w-16 rounded-full border-4 border-gray-100 shadow-lg -mt-10 mx-auto"
                    src={recipe.authorImg}
                    alt=""
                />
                <p className="text-lg font-bold text-gray-800 mt-4 text-center">
                    {recipe.title}
                </p>
                <p className="text-gray-600 text-sm mt-2 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <a
                    href="#!"
                    className="block mt-4 text-center text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                    VIEW RECIPE
                </a>
            </div>
        </div>
    );
}
