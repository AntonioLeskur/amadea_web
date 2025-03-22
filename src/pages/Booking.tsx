import { useState, useRef, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import "react-datepicker/dist/react-datepicker.css";

emailjs.init("5j_Z7cESNVAiGAADa");

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    'Čišćenje stambenih prostora',
    'Čišćenje poslovnih prostora',
    'Čišćenje turističkih objekata',
    'Čišćenje nakon radova/ adaptacija',
    'Čišćenje okoliša',
    'Čišćenje ogledala/ Stakala',
    'Dubinsko čišćenje jastuka',
    'Dubinsko čišćenje tepiha',
    'Dubinsko čišćenje madraca (140 × 200)',
    'Dubinsko čišćenje madraca (160 × 200)',
    'Dubinsko čišćenje madraca (180 × 200)',
    'Dubinsko čišćenje madraca (200 × 200)',
    'Dubinsko čišćenje kutne garniture L',
    'Dubinsko čišćenje trosjeda',
    'Dubinsko čišćenje dvosjeda',
    'Pomoćni ležaj dvosjeda / trosjeda',
    'Dubinsko čišćenje fotelje',
    'Dubinsko čišćenje stolice',
    'Dubinsko čišćenje unutrašnjosti osobnih automobila (kompletno)',
    'Vanjsko čišćenje osobnih automobila',
    'Dubinsko čišćenje radnih automobila (kompletno)',
    'Vanjsko čišćenje radnih automobila',
    'Dubinsko čišćenje autosjedala',
    'Dubinsko čišćenje baby autosjedalice',
    'Čišćenje/ Dezinfekcija ozonom'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Format the date as DD.MM.YYYY
    const formattedDate = selectedDate.toLocaleDateString('hr-HR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Add the formatted date to the form before sending
    const formElement = formRef.current;
    const dateInput = document.createElement('input');
    dateInput.type = 'hidden';
    dateInput.name = 'date';
    dateInput.value = formattedDate;
    formElement.appendChild(dateInput);

    try {
      await emailjs.sendForm(
        'service_2y92lt5',
        'template_0x7atro',
        formRef.current,
        '5j_Z7cESNVAiGAADa'
      );
      setSubmitStatus('success');
      formRef.current.reset();
      setSelectedService('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      formElement.removeChild(dateInput); // Clean up the temporary input
    }
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=2000&q=80')"
    }}>
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Dogovorite termin</h1>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ime i prezime</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vrsta usluge</label>
                <select
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                >
                  <option value="">Odaberite uslugu</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresa</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Datum</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date || new Date())}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vrijeme</label>
                <select
                  name="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                >
                  {generateTimeOptions().map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Broj telefona</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Slanje...' : 'Pošalji zahtjev'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Zahtjev je uspješno poslan!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Došlo je do greške. Molimo pokušajte ponovno.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}