import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Pricing() {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { name: 'Čišćenje stambenih prostora', unit: 'satu', price: '18 €' },
    { name: 'Čišćenje poslovnih prostora', unit: 'satu', price: '15 €' },
    { name: 'Čišćenje turističkih objekata', unit: 'satu', price: '20 €' },
    { name: 'Čišćenje nakon radova/ adaptacija', unit: 'satu', price: '20 €' },
    { name: 'Čišćenje okoliša', unit: 'satu', price: '15 €' },
    { name: 'Čišćenje ogledala/ Stakala', unit: 'm²', price: '3 €' },
    { name: 'Dubinsko čišćenje jastuka', unit: 'kom', price: '3 €' },
    { name: 'Dubinsko čišćenje tepiha', unit: 'm²', price: '4 €' },
    { name: 'Dubinsko čišćenje madraca (140 × 200)', unit: 'kom', price: '30 €' },
    { name: 'Dubinsko čišćenje madraca (160 × 200)', unit: 'kom', price: '34 €' },
    { name: 'Dubinsko čišćenje madraca (180 × 200)', unit: 'kom', price: '37 €' },
    { name: 'Dubinsko čišćenje madraca (200 × 200)', unit: 'kom', price: '40 €' },
    { name: 'Dubinsko čišćenje kutne garniture L', unit: 'kom', price: '50-60 €' },
    { name: 'Dubinsko čišćenje trosjeda', unit: 'kom', price: '40 €' },
    { name: 'Dubinsko čišćenje dvosjeda', unit: 'kom', price: '30 €' },
    { name: 'Pomoćni ležaj dvosjeda / trosjeda', unit: 'kom', price: '7 €' },
    { name: 'Dubinsko čišćenje fotelje', unit: 'kom', price: '25 €' },
    { name: 'Dubinsko čišćenje stolice', unit: 'kom', price: '4 €' },
    { name: 'Dubinsko čišćenje unutrašnjosti osobnih automobila (kompletno)', unit: 'kom', price: '65 €' },
    { name: 'Vanjsko čišćenje osobnih automobila', unit: 'kom', price: '10 €' },
    { name: 'Dubinsko čišćenje radnih automobila (kompletno)', unit: 'kom', price: '70 €' },
    { name: 'Vanjsko čišćenje radnih automobila', unit: 'kom', price: '10 €' },
    { name: 'Dubinsko čišćenje autosjedala', unit: 'kom', price: '45 €' },
    { name: 'Dubinsko čišćenje baby autosjedalice', unit: 'kom', price: '15 €' },
    { name: 'Čišćenje/ Dezinfekcija ozonom', unit: 'kom', price: '15-25 €' },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80')"
    }}>
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">
            Cjenik usluga
          </h1>

          {/* Search bar */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pretražite usluge..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="mb-2 sm:mb-0 sm:mr-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-0">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 sm:hidden">
                      po {service.unit}
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end">
                    <span className="hidden sm:block text-sm text-gray-600 mr-6">
                      po {service.unit}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-green-600">
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}

              {filteredServices.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  Nema pronađenih usluga
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}