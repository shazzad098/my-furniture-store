import ProductCard from './ProductCard';
import img1 from '../assets/FeaturedProducts/img1.png';
import img2 from '../assets/FeaturedProducts/img2.png';
import img3 from '../assets/FeaturedProducts/img3.png';
import img4 from '../assets/FeaturedProducts/img4.png';
// Sample data for our products
const products = [
  { id: 1, name: 'Cantilever chair', code: 'Y523201', price: '$42.00', image: img1 },
  { id: 2, name: 'Bulleon chair', code: 'Y523202', price: '$55.00', image: img2 },
  { id: 3, name: 'Dolly chair', code: 'Y523203', price: '$38.00', image: img3},
  { id: 4, name: 'Stylish chair', code: 'Y523204', price: '$120.00', image: img4 },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              code={product.code}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;