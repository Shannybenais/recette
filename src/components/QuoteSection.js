import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


export default function QuoteSection() {
  return (
    <div className="section quote p-6">
      {/* Quote Text */}
      <p className="quote-text text-xl leading-relaxed text-gray-800">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-2xl mr-2" />
        Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
      </p>

      {/* Quote Author */}
      <p className="quote-author text-gray-500 text-right mt-4">- Anthony Bourdain</p>
    </div>
  )
}
