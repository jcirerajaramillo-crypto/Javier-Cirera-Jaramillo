
import React from 'react';
import Navbar from './components/Navbar';
import { MENU_ITEMS, SIGNATURE_DISHES } from './constants';

const App: React.FC = () => {
  const menuCategories = [
    { key: 'entrantes', title: 'Ensaladas' },
    { key: 'vinos', title: 'Para Picar' },
    { key: 'principales', title: 'Carnes' },
    { key: 'postres_real', title: 'Pescados y Mariscos' },
    { key: 'postres', title: 'Postres' }
  ];

  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero Section - Acentos en Verde y Amarillo */}
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

      {/* Historia Section - Diseño con bloques de color */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        {/* Decoración lateral sutil */}
        <div className="absolute top-0 left-0 w-1 h-full bg-green-600"></div>
        <div className="absolute top-0 left-1 w-1 h-full bg-yellow-400"></div>

        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-10 serif text-[#1A1A1A]">Nuestro Legado</h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
            Liceo de Artesanos es una institución en Olivenza dedicada a preservar los sabores que nos definen. Nuestra cocina es un homenaje a la artesanía local, donde cada plato se elabora con respeto al producto y al tiempo. Técnicas heredadas y una pasión inquebrantable por el buen comer.
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

      {/* ESPECIALIDADES SECTION - Tarjetas con bordes de color */}
      <section id="platos-estrella" className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl serif text-[#1A1A1A]">Especialidades</h2>
            <div className="flex justify-center gap-1 mt-4">
               <div className="w-8 h-0.5 bg-green-600"></div>
               <div className="w-8 h-0.5 bg-yellow-400"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {SIGNATURE_DISHES.map((dish, idx) => (
              <div key={dish.id} className={`p-8 border-t-4 ${idx % 2 === 0 ? 'border-green-600' : 'border-yellow-400'} bg-[#FDFBF7] shadow-sm rounded-b-lg transition-transform hover:-translate-y-1`}>
                <span className="text-green-800 font-bold text-[10px] uppercase tracking-widest mb-4 block">Recomendado</span>
                <h3 className="text-2xl mb-4 serif text-[#1A1A1A]">{dish.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed italic">"{dish.description}"</p>
                <p className="text-2xl font-serif text-green-700 mb-6">{dish.price}</p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider leading-relaxed">
                    {dish.artisanNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTA SECTION - Estética clásica con tipografía en color */}
      <section id="carta" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6 text-center mb-24">
          <h2 className="text-4xl md:text-5xl mb-6 serif text-[#1A1A1A]">La Carta</h2>
          <p className="text-green-700 uppercase tracking-[0.3em] text-[10px] font-bold">Selección Diaria</p>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {menuCategories.map((cat) => (
            <div key={cat.key}>
              <h3 className="text-2xl serif text-green-800 mb-12 text-center uppercase tracking-widest border-b-2 border-yellow-400 pb-4 inline-block mx-auto w-full">{cat.title}</h3>
              <div className="grid gap-y-12 md:gap-x-20 md:grid-cols-2">
                {MENU_ITEMS.filter(item => {
                  if (cat.key === 'postres_real') return item.category === 'postres' && !['Arroz con Leche', 'Baba de Camello', 'Serradura'].includes(item.name);
                  if (cat.key === 'postres') return item.category === 'postres' && ['Arroz con Leche', 'Baba de Camello', 'Serradura'].includes(item.name);
                  return item.category === cat.key;
                }).map(item => (
                  <div key={item.id} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="text-base font-semibold text-[#1A1A1A] tracking-tight group-hover:text-green-700 transition-colors">{item.name}</h4>
                      <span className="font-serif text-green-800 ml-4 text-sm font-bold">{item.price}</span>
                    </div>
                    {item.description && <p className="text-gray-500 text-xs font-light mb-3 leading-relaxed uppercase tracking-wider">{item.description}</p>}
                    <div className="flex gap-2">
                      {item.allergens.map(al => (
                        <span key={al} className="text-[8px] text-yellow-600/60 font-bold uppercase tracking-tighter">{al}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CÓDIGO QR - Colores corporativos */}
      <section className="py-20 bg-white border-y-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl serif mb-10 text-green-900">Carta Digital</h2>
          <div className="flex flex-col items-center">
            <div className="p-4 border-2 border-green-600 rounded-lg bg-white shadow-lg">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}&color=166534`}
                alt="QR"
                className="w-32 h-32"
              />
            </div>
            <p className="mt-8 text-green-800 text-[10px] uppercase tracking-[0.2em] font-bold">Escanea para ver la carta en tu móvil</p>
          </div>
        </div>
      </section>

      {/* CONTACTO & HORARIOS - Fondo verde oscuro */}
      <section id="contacto" className="py-24 bg-green-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-12 serif text-yellow-400">Información</h2>
          <p className="text-gray-300 mb-20 text-lg font-light leading-relaxed">
            Atendemos por estricto orden de llegada. No aceptamos reservas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div>
              <span className="block text-[10px] text-yellow-400 uppercase tracking-[0.3em] font-bold mb-6">Ubicación</span>
              <p className="text-xl serif leading-snug">Avenida Portugal, 14<br/>Olivenza, Badajoz</p>
            </div>
            <div>
              <span className="block text-[10px] text-yellow-400 uppercase tracking-[0.3em] font-bold mb-6">Horarios</span>
              <div className="text-sm space-y-4 font-light text-gray-300 tracking-wide">
                <p>L-J (Cerrado Miércoles):<br/><span className="text-yellow-100 font-serif text-lg">18:00 - 23:00</span></p>
                <p>Viernes a Domingo:<br/><span className="text-yellow-100 font-serif text-lg">13:30 - 00:00</span></p>
              </div>
            </div>
            <div>
              <span className="block text-[10px] text-yellow-400 uppercase tracking-[0.3em] font-bold mb-6">Contacto</span>
              <a href="tel:+34628594815" className="text-2xl serif hover:text-yellow-400 transition-colors block mb-2">628 59 48 15</a>
              <a href="https://www.instagram.com/liceo.deartesanos/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-yellow-500/80 hover:text-white">@liceo.deartesanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-4 h-1 bg-green-600"></div>
            <div className="w-4 h-1 bg-yellow-400"></div>
          </div>
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.4em] font-bold">
            © {new Date().getFullYear()} LICEO DE ARTESANOS OLIVENZA · EXCELENCIA ARTESANA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
