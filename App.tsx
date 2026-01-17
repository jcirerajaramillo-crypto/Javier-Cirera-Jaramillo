
import React from 'react';
import Navbar from './components/Navbar';
import { MENU_ITEMS } from './constants';

const App: React.FC = () => {
  // Configuración de categorías para la sección de la carta
  const menuCategories = [
    { id: 'ensaladas', title: 'Ensaladas', filter: (item: any) => item.category === 'entrantes' },
    { id: 'picar', title: 'Para Picar', filter: (item: any) => item.category === 'vinos' },
    { id: 'carnes', title: 'Carnes', filter: (item: any) => item.category === 'principales' && !item.name.toLowerCase().includes('bacalao') && !item.name.toLowerCase().includes('boquerones') && !item.name.toLowerCase().includes('cazón') && !item.name.toLowerCase().includes('rejos') && !item.name.toLowerCase().includes('pulpo') && !item.name.toLowerCase().includes('canelón') },
    { id: 'pescados', title: 'Pescados y Mariscos', filter: (item: any) => item.category === 'principales' && (item.name.toLowerCase().includes('bacalao') || item.name.toLowerCase().includes('boquerones') || item.name.toLowerCase().includes('cazón') || item.name.toLowerCase().includes('rejos') || item.name.toLowerCase().includes('pulpo') || item.name.toLowerCase().includes('canelón')) },
    { id: 'postres', title: 'Postres', filter: (item: any) => item.category === 'postres' }
  ];

  // Especialidades de la casa
  const specialties = [
    { name: 'Canelón de Bogavante', price: '16.00€', desc: 'Nuestra joya artesana rellena de bogavante selecto.' },
    { name: 'Cachopo de Ternera', price: '22.00€', desc: 'Ternera de primera con jamón ibérico y queso fundente.' },
    { name: 'Bacalao Dorado', price: '14.00€', desc: 'El clásico luso con el punto perfecto de cremosidad.' }
  ];

  const currentUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-20 flex items-center justify-center border-b border-yellow-100 bg-gradient-to-b from-green-50/30 to-transparent">
        <div className="text-center px-4 max-w-4xl">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-green-600"></div>
            <div className="w-12 h-1 bg-yellow-400"></div>
          </div>
          <span className="uppercase tracking-[0.4em] text-[10px] mb-6 block font-bold text-green-800">Olivenza · Tradición Culinaria</span>
          <h1 className="text-6xl md:text-8xl mb-8 serif text-[#1A1A1A]">Liceo de Artesanos</h1>
          <p className="text-xl md:text-2xl font-light text-gray-500 max-w-2xl mx-auto serif italic leading-relaxed">
            "Donde la artesanía se convierte en sabor"
          </p>
        </div>
      </section>

      {/* Historia Section (Nuestro Legado) */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-green-600"></div>
        <div className="absolute top-0 left-1 w-1 h-full bg-yellow-400"></div>

        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-10 serif text-[#1A1A1A]">Nuestro Legado</h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
            Liceo de Artesanos es una institución en Olivenza dedicada a preservar los sabores que nos definen. Nuestra cocina es un homenaje a la artesanía local, donde cada plato se elabora con respeto al producto y al tiempo.
          </p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <span className="block text-4xl serif text-green-700">L.A</span>
              <span className="text-[10px] text-yellow-600 uppercase tracking-widest font-bold">Olivenza</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl serif text-green-700">100%</span>
              <span className="text-[10px] text-yellow-600 uppercase tracking-widest font-bold">Artesanal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades de la Casa - REUBICADA DEBAJO DE HISTORIA */}
      <section id="especialidades" className="py-24 bg-[#FDFBF7] relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-700 text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">Selección Maestra</span>
            <h2 className="text-4xl serif text-[#1A1A1A]">Especialidades de la Casa</h2>
            <div className="flex justify-center gap-1 mt-4">
               <div className="w-8 h-0.5 bg-green-600"></div>
               <div className="w-8 h-0.5 bg-yellow-400"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((item, idx) => (
              <div key={idx} className="p-8 border border-white bg-white rounded-sm text-center group hover:border-yellow-400 transition-colors duration-500 shadow-sm">
                <div className="w-12 h-12 bg-green-900 text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 serif text-xl italic">
                  {idx + 1}
                </div>
                <h3 className="text-2xl serif mb-3 text-green-900">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-6 italic leading-relaxed">"{item.desc}"</p>
                <div className="text-2xl font-serif text-green-800">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTA SECTION */}
      <section id="carta" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl serif text-[#1A1A1A]">La Carta</h2>
          <p className="text-green-700 uppercase tracking-[0.3em] text-[10px] font-bold">Selección Diaria</p>
        </div>
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {menuCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-xl serif text-green-800 mb-8 border-b-2 border-yellow-400 pb-2 inline-block w-full">{cat.title}</h3>
              <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-12">
                {MENU_ITEMS.filter(cat.filter).map(item => (
                  <div key={item.id} className="flex flex-col border-b border-gray-100 pb-2">
                    <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="font-serif text-green-800 text-sm">{item.price}</span>
                    </div>
                    {item.allergens.length > 0 && (
                        <div className="flex gap-1 mt-1">
                            {item.allergens.map(a => <span key={a} className="text-[7px] text-gray-400 uppercase tracking-tighter">{a}</span>)}
                        </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CÓDIGO QR */}
      <section className="py-20 bg-[#FDFBF7] border-y-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl serif mb-10 text-green-900">Carta Digital</h2>
          <div className="flex flex-col items-center">
            <div className="p-4 border-2 border-green-600 rounded-lg bg-white shadow-lg">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}&color=166534`}
                alt="QR de la Carta"
                className="w-32 h-32"
              />
            </div>
            <p className="mt-8 text-green-800 text-[10px] uppercase tracking-[0.2em] font-bold">Escanea para ver la carta en tu móvil</p>
          </div>
        </div>
      </section>

      {/* CONTACTO & HORARIOS */}
      <section id="contacto" className="py-24 bg-green-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl mb-8 serif text-yellow-400">Visítanos en Olivenza</h2>
          <p className="text-xl serif mb-4">Avenida Portugal, 14</p>
          <a href="tel:+34628594815" className="text-2xl serif text-yellow-400 block mb-8 transition-transform hover:scale-105">628 59 48 15</a>
          <p className="text-gray-400 text-sm uppercase tracking-widest">Sin reservas · Orden de llegada</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-4 h-1 bg-green-600"></div>
            <div className="w-4 h-1 bg-yellow-400"></div>
          </div>
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-6">
            © {new Date().getFullYear()} LICEO DE ARTESANOS OLIVENZA
          </p>
          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-2 font-bold">Enlace de la web:</p>
            <a 
              href={currentUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-white transition-colors text-sm font-light tracking-widest underline decoration-green-600 underline-offset-8"
            >
              {currentUrl.replace('https://', '').replace('http://', '')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
