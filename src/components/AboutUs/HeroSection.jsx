import imgHero from '../../assets/HeroSection/hero-about-us.png';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={imgHero}
            alt="About Us"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Know About Our Ecommerce</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit risus. Aliquam malesuada elit eros, malesuada ullamcorper erat vitae eget dolor lobortis. Accumsan fusce quisque quis bibendum quam.
          </p>
          <button className="bg-pink-500 text-white font-bold py-3 px-8 rounded hover:bg-pink-600 transition-colors cursor-pointer">
            Connect With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;