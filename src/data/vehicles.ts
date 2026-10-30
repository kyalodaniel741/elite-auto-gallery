import type { Vehicle } from '../types'

export const vehicles: Vehicle[] = [
  {
    id: 1, name: 'S-Class 580 4MATIC', brand: 'Mercedes-Benz', year: 2024,
    price: 148000, mileage: '4,200 km', category: 'Saloon', featured: true, badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    description: 'A benchmark in modern luxury, blending serene comfort with effortless performance.'
  },
  {
    id: 2, name: 'Range Rover Autobiography', brand: 'Land Rover', year: 2023,
    price: 172000, mileage: '8,500 km', category: 'SUV', featured: true, badge: 'Prestige',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85',
    description: 'Commanding presence, handcrafted refinement and capability without compromise.'
  },
  {
    id: 3, name: '911 Carrera GTS', brand: 'Porsche', year: 2024,
    price: 136500, mileage: '2,100 km', category: 'Sports', featured: true, badge: 'Performance',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    description: 'Pure driver engagement, iconic design and everyday usability in one exceptional package.'
  },
  {
    id: 4, name: '7 Series 760i', brand: 'BMW', year: 2023,
    price: 129000, mileage: '6,800 km', category: 'Saloon',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85',
    description: 'Progressive technology and first-class comfort for those who lead from the front.'
  },
  {
    id: 5, name: 'Bentayga Azure', brand: 'Bentley', year: 2022,
    price: 219000, mileage: '9,300 km', category: 'SUV',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    description: 'A beautifully appointed grand touring SUV with unmistakable British character.'
  },
  {
    id: 6, name: 'DB12 Coupe', brand: 'Aston Martin', year: 2024,
    price: 248000, mileage: '1,700 km', category: 'Sports',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200&q=85',
    description: 'An expressive blend of elegant craftsmanship and exhilarating grand touring.'
  }
]