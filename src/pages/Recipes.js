// src/pages/YourComponentPage.js

import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Data_Recipes";

export default function Data_Recipes() {
    return (
        <div>
            <PreviousSearches />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
