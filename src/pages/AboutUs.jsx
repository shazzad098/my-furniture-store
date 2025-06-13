import HeroSection from '../components/AboutUs/HeroSection'; // Correct path for HeroSection
import FeaturesSection from '../components/AboutUs/FeaturesSection'; // Correct path for FeaturesSection
import ClientTestimonials from '../components/AboutUs/ClientTestimonials'; // Correct path for ClientTestimonials

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Client Testimonials */}
      <ClientTestimonials />

    </div>
  );
};

export default AboutUs;