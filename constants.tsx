
import { MenuItem, Testimonial } from './types';

export interface SignatureDish extends MenuItem {
  artisanNote: string;
  imageUrl: string;
  photoSpecs: string;
}

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sd1',
    name: 'Canelón Grande de Bogavante',
    description: 'Nuestra joya artesana rellena de bogavante selecto. Precio por unidad.',
    price: '9.00€',
    category: 'principales',
    allergens: ['Gluten', 'Crustáceos', 'Lácteos'],
    artisanNote: 'Elaboramos el relleno diariamente para asegurar que la textura del bogavante se mantenga firme y jugosa.',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    photoSpecs: 'Primer plano del relleno jugoso con su salsa cremosa.'
  },
  {
    id: 'sd2',
    name: 'Bacalao Dorado',
    description: 'Nuestra versión del clásico luso. Bacalao desmigado de primera calidad, patatas paja cortadas a mano y huevo de corral.',
    price: '14.00€',
    category: 'principales',
    allergens: ['Pescado', 'Huevo'],
    artisanNote: 'El secreto está en el punto del huevo: debe quedar meloso, nunca seco.',
    imageUrl: 'https://images.unsplash.com/photo-1534948665823-7683fd212ce5?auto=format&fit=crop&q=80&w=800',
    photoSpecs: 'Presentación tradicional con aceitunas negras sobre fuente blanca.'
  },
  {
    id: 'sd3',
    name: 'Cachopo de Ternera',
    description: 'Dos generosos filetes de ternera de la sierra, rellenos de jamón ibérico de bellota y queso fundente.',
    price: '22.00€',
    category: 'principales',
    allergens: ['Gluten', 'Lácteos', 'Huevo'],
    artisanNote: 'Un plato para compartir. Utilizamos un empanado doble para conseguir ese crujiente exterior.',
    imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?auto=format&fit=crop&q=80&w=800',
    photoSpecs: 'Corte transversal que muestra el queso fundido y el relleno ibérico.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // ENSALADAS
  { id: 'e1', name: 'Ensalada Variada', description: 'Mezclum de lechugas, tomate, cebolla y aceitunas.', price: '9.00€', category: 'entrantes', allergens: [] },
  { id: 'e2', name: 'Ensalada con Naranja y Nueces', description: 'Frescura cítrica con el toque crujiente de las nueces.', price: '12.00€', category: 'entrantes', allergens: ['Frutos de cáscara'] },
  { id: 'e3', name: 'Ensalada de Rulo de Cabra', description: 'Con queso de cabra caramelizado y vinagreta balsámica.', price: '12.00€', category: 'entrantes', allergens: ['Lácteos'] },

  // PARA PICAR
  { id: 'p1', name: 'Jamón Ibérico de Bellota', description: 'Corte artesano. Media ración (10€) o Ración entera.', price: '10.00€ / 20.00€', category: 'vinos', allergens: [] },
  { id: 'p2', name: 'Lomo Ibérico de Bellota', description: 'Sabor intenso. Media ración (10€) o Ración entera.', price: '10.00€ / 18.00€', category: 'vinos', allergens: [] },
  { id: 'p3', name: 'Queso de Oveja', description: 'Curación óptima. Media ración (7€) o Ración entera.', price: '7.00€ / 12.00€', category: 'vinos', allergens: ['Lácteos'] },
  { id: 'p4', name: 'Tosta de Anchoas del Cantábrico', description: 'Calidad superior sobre pan tostado (unidad).', price: '7.00€', category: 'vinos', allergens: ['Pescado', 'Gluten'] },
  { id: 'p5', name: 'Tosta de Salmón con Queso Fresco', description: 'Combinación clásica y suave.', price: '6.00€', category: 'vinos', allergens: ['Pescado', 'Lácteos', 'Gluten'] },
  { id: 'p6', name: 'Tosta de Solomillo a la Pimienta o al Whisky', description: 'Sabrosa y contundente.', price: '7.00€', category: 'vinos', allergens: ['Gluten'] },
  { id: 'p7', name: 'Boquerones en Vinagre', description: 'Media ración (7€) o Ración entera.', price: '7.00€ / 12.00€', category: 'vinos', allergens: ['Pescado'] },
  { id: 'p8', name: 'Pepito de Lomo con Pimiento y Tomate', description: 'El bocadillo tradicional de la casa.', price: '6.00€', category: 'vinos', allergens: ['Gluten'] },
  { id: 'p9', name: 'Croquetas Variadas', description: 'Artesanas y cremosas.', price: '14.00€', category: 'vinos', allergens: ['Gluten', 'Lácteos'] },
  { id: 'p10', name: 'Tartar de Salmón', description: 'Media ración (7€) o Ración entera.', price: '7.00€ / 14.00€', category: 'vinos', allergens: ['Pescado'] },
  { id: 'p11', name: 'Riñones al Jerez', description: 'Un clásico de nuestra cocina con el aroma del mejor Jerez.', price: '9.00€', category: 'vinos', allergens: [] },

  // ARROCES
  { id: 'a1', name: 'Risotto de Setas', description: 'Cremoso arroz con selección de setas de temporada.', price: '14.00€', category: 'principales', allergens: ['Lácteos'] },
  { id: 'a2', name: 'Arroz Meloso de Pulpo (para 4 personas)', description: 'Sabor intenso a mar, ideal para compartir.', price: '30.00€', category: 'principales', allergens: ['Moluscos'] },
  { id: 'a3', name: 'Arroz Meloso de Solomillo (para 4 personas)', description: 'Tierno solomillo integrado en arroz meloso.', price: '28.00€', category: 'principales', allergens: [] },

  // CARNES
  { id: 'c1', name: 'Solomillo Ibérico', description: 'Con salsa se incrementan 2 euros más.', price: '14.00€', category: 'principales', allergens: [] },
  { id: 'c2', name: 'Torreznos con Patatas, Pimientos y Huevos', description: 'Plato contundente y tradicional.', price: '18.00€', category: 'principales', allergens: ['Huevo'] },
  { id: 'c3', name: 'Lagarto Ibérico', description: 'Pieza jugosa a la parrilla.', price: '18.00€', category: 'principales', allergens: [] },
  { id: 'c4', name: 'Filetes de Lomo Empanados con Patatas', description: 'Un clásico que nunca falla.', price: '7.50€', category: 'principales', allergens: ['Gluten', 'Huevo'] },
  { id: 'c5', name: 'Rabo de Toro', description: 'Guiso tradicional de larga cocción.', price: '18.00€', category: 'principales', allergens: [] },
  { id: 'c6', name: 'Pluma Ibérica', description: 'Corte selecto del cerdo ibérico a la brasa.', price: '20.00€', category: 'principales', allergens: [] },

  // PESCADOS Y MARISCOS
  { id: 'pm1', name: 'Bacalao a la Nata', description: 'Suave y cremoso.', price: '15.00€', category: 'principales', allergens: ['Pescado', 'Lácteos'] },
  { id: 'pm2', name: 'Lomo de Bacalao a la Brasa con Guarnición', description: 'Sabor puro a parrilla.', price: '22.00€', category: 'principales', allergens: ['Pescado'] },
  { id: 'pm3', name: 'Bacalao Dorado', description: 'Receta tradicional lusa.', price: '14.00€', category: 'principales', allergens: ['Pescado', 'Huevo'] },
  { id: 'pm4', name: 'Boquerones Fritos', description: 'Fritura andaluza impecable.', price: '11.00€', category: 'principales', allergens: ['Pescado', 'Gluten'] },
  { id: 'pm5', name: 'Cazón en Adobo', description: 'Marinado tradicional.', price: '11.00€', category: 'principales', allergens: ['Pescado', 'Gluten'] },
  { id: 'pm6', name: 'Rejos Fritos', description: 'Crujientes y sabrosos.', price: '12.00€', category: 'principales', allergens: ['Moluscos', 'Gluten'] },
  { id: 'pm7', name: 'Pulpo a la Gallega', description: 'Con pimentón y cachelos.', price: '22.00€', category: 'principales', allergens: ['Moluscos'] },
  { id: 'pm9', name: 'Vieiras a la Plancha (6 unidades)', description: 'Delicadeza marina a la plancha.', price: '12.00€', category: 'principales', allergens: ['Moluscos'] },
  { id: 'pm10', name: 'Gambón a la Plancha', description: 'Precio por unidad.', price: '2.50€ / ud', category: 'principales', allergens: ['Crustáceos'] },
  { id: 'pm11', name: 'Colas de Gambón al Ajillo', description: 'Cocinadas con aceite de oliva, ajo y guindilla.', price: '15.00€', category: 'principales', allergens: ['Crustáceos'] },
  { id: 'pm12', name: 'Merluza a la Riojana', description: 'Merluza fresca con salsa tradicional riojana.', price: '15.00€', category: 'principales', allergens: ['Pescado'] },

  // POSTRES
  { id: 'po1', name: 'Arroz con Leche', description: 'Casero, con canela.', price: '4.00€', category: 'postres', allergens: ['Lácteos'] },
  { id: 'po4', name: 'Torrijas', description: 'Tradición dulce en cada bocado.', price: '5.00€', category: 'postres', allergens: ['Gluten', 'Lácteos', 'Huevo'] },
  { id: 'po5', name: 'Brownie', description: 'Bizcocho de chocolate intenso con nueces.', price: '5.00€', category: 'postres', allergens: ['Gluten', 'Lácteos', 'Frutos de cáscara'] },
  { id: 'po6', name: 'Blondie', description: 'La versión de chocolate blanco para los más dulces.', price: '5.00€', category: 'postres', allergens: ['Gluten', 'Lácteos'] }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', author: 'Elena García', text: 'Una experiencia gastronómica auténtica en Olivenza.', rating: 5 },
  { id: '2', author: 'Marc Thompson', text: 'Excellent traditional food and service.', rating: 5 }
];
