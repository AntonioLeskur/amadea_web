import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "Prezadovoljni smo uslugom čišćenja Green&Cleana koji je posao obavio stručno, brzo i uljudno.",
      author: "Serafino Lanza",
      role: "Vlasnica apartmana",
      image: "/images/1.jpg"
    },
    {
      text: "Nakon obavljenog posla Green&Cleana, moja garnitura izgleda kao nova! Svaka preporuka!",
      author: "Almira Šeparović",
      role: "Vlasnik kuće",
      image: "/images/3.jpg"
    },
    {
      text: "Ekipa iz Green&Cleana dovela je moj apartman do savršenstva te ga ponovno mogu bez srama iznajmljivati gostima.",
      author: "Suzana Franulović",
      role: "Iznajmljivač apartmana",
      image: "/images/2.jpg"
    },
    {
      text: "Zahvaljujem na odličnoj usluzi!!!",
      author: "Nikolina Tomašić",
      role: "Vlasnica kuće",
      image: "/images/4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?auto=format&fit=crop&w=2000&q=80')"
    }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Preporuke klijenata</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
                <img 
                  src={review.image} 
                  alt="Before and after cleaning" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div>
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}