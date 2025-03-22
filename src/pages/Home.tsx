import { Link } from 'react-router-dom';
import { Sparkles, Clock, ThumbsUp } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Profesionalne usluge čišćenja<br className="hidden sm:block" /> na otoku Korčuli
            </h1>
            <p className="text-lg sm:text-xl mb-8">Dubinsko čišćenje tapeciranih površina i čišćenje ozonom</p>
            <Link
              to="/booking"
              className="inline-block bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Dogovorite termin
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Profesionalna usluga</h3>
              <p className="text-sm sm:text-base text-gray-600">Stručno čišćenje profesionalnom opremom i ekološkim proizvodima</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fleksibilno zakazivanje</h3>
              <p className="text-sm sm:text-base text-gray-600">Rezervirajte termine prema vašim potrebama</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <ThumbsUp className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Garantirana kvaliteta</h3>
              <p className="text-sm sm:text-base text-gray-600">Vaše zadovoljstvo nam je na prvom mjestu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}