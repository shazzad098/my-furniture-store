import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/NotFound/NotFoundImg.png";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 text-center">
        {/* Error Message */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-12">
          The page you requested was not found!
        </p>

        {/* 404 Illustration */}
        <img
          src={NotFoundImg}
          alt="404 Illustration"
          className="mx-auto w-full max-w-lg mb-8"
        />

        {/* Back to Home Button */}
        <Link
          to="/"
          className="bg-pink-500 text-white font-bold py-3 px-8 rounded hover:bg-pink-600 transition-colors cursor-pointer inline-flex items-center"
        >
          <FiArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </div>

      
    </div>
  );
};

export default NotFound;
