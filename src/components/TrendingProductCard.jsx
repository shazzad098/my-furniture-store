const TrendingProductCard = ({
  image,
  name,
  newPrice,
  oldPrice,
  isFeatured = false,
}) => {
  // Use different styles based on the isFeatured prop
  const cardClasses = isFeatured
    ? "bg-blue-100 p-6 flex flex-col items-center text-center shadow-lg rounded-lg"
    : "bg-white p-4 flex items-center space-x-4 shadow-md rounded-lg";

  const content = (
    <div>
      <img
        src={image}
        alt={name}
        className={
          isFeatured
            ? "w-48 h-48 object-contain mb-4"
            : "w-24 h-24 object-contain"
        }
      />
      <div className={isFeatured ? "" : "text-left"}>
        <h3 className="font-bold text-gray-800">{name}</h3>
        <div className="flex space-x-2">
          <p className="text-gray-800 font-semibold">{newPrice}</p>
          <p className="text-gray-500 line-through">{oldPrice}</p>
        </div>
      </div>
    </div>
  );

  if (isFeatured) {
    return <div className={cardClasses}>{content}</div>;
  }

  return <div className={cardClasses}>{content}</div>;
};

export default TrendingProductCard;
