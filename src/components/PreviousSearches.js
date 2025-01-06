import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
    const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];

    return (
        <div className="py-6">
            <h2 className="text-2xl font-bold mb-4">Previous Searches</h2>
            <div className="flex flex-wrap gap-2 mb-4">
                {searches.map((search, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-200"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {search}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Search ..."
                    className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}
