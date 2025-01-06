import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function ChiefCard({ chief }) {
    return (
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                src={chief.img}
                alt={chief.name}
                className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{chief.name}</h3>
                <p className="text-sm text-gray-600">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="text-sm text-gray-600">Cuisine: <b>{chief.cuisine}</b></p>
                <div className="flex space-x-3 mt-2">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                    <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
                    <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                </div>
            </div>
        </div>
    )
}
