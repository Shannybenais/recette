import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


export default function QuoteSection() {
  return (
    <div className="section quote p-6">
      {/* Quote Text */}
      <p className="quote-text text-xl leading-relaxed text-gray-800">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-2xl mr-2" />
        
"La nourriture est tout ce que nous sommes. C'est une extension des sentiments nationalistes, des sentiments ethniques, de votre histoire personnelle, de votre province, de votre région, de votre tribu, de votre grand-mère. 
C'est indissociable de tout cela dès le départ."
      </p>

      
    </div>
  )
}
