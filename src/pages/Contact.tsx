import { Phone, Mail, MapPin } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init("5j_Z7cESNVAiGAADa");

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_2y92lt5',
        'template_98yt2w6',
        formRef.current,
        '5j_Z7cESNVAiGAADa'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=2000&q=80')"
    }}>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Kontaktirajte nas</h1>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Kontakt informacije</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">+385 97 6079 540</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-green-500" />
                    <a href="mailto:maja.separovic5@gmail.com" className="text-gray-700 hover:text-green-500">
                      maja.separovic5@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700">Otok Korčula, Hrvatska</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Pošaljite nam poruku</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ime i prezime</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Poruka</label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Slanje...' : 'Pošalji poruku'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">Poruka je uspješno poslana!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">Došlo je do greške. Molimo pokušajte ponovno.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}