import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p>&copy; 2024 NewsReader. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/about" className="hover:text-blue-400">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
        </div>
        <div className="text-sm">
          <p>Designed with by NewsReader Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
