import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons"

export default function DishCard({ dish }) {
    return (
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                src={dish.img}
                alt={dish.name}
                className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
                <p className="text-sm text-gray-600">Recommandations: <b>{dish.recommendationsCount}</b></p>
                <p className="text-sm text-gray-600">Cuisine: <b>{dish.cuisine}</b></p>
                <div className="flex space-x-3 mt-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                    <FontAwesomeIcon icon={faThumbsUp} className="text-green-600" />
                    <FontAwesomeIcon icon={faHeart} className="text-red-500" />
                </div>
            </div>
        </div>
    )
}
