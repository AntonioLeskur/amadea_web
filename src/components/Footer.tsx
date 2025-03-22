import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/share/1BecRBvEAb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-500"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/green_and_clean_2024?utm_source=qr&igsh=ZzFyNGR4Zjd4eDc5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-green-500"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>+385 97 6079 540</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <a href="mailto:maja.separovic5@gmail.com" className="hover:text-green-500">
              maja.separovic5@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} Green&Clean. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}