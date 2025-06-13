
const ProductCard = ({ image, name, code, price }) => {
  return (
    <div className="group text-center">
      <div className="bg-gray-100 p-8 flex items-center justify-center">
        {/* Note: Replace placeholder with actual image */}
        <img src={image} alt={name} className="w-full h-40 object-contain group-hover:scale-110 transition-transform cursor-pointer"/>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="text-sm text-gray-500">{code}</p>
        <p className="text-md text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;