// components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SmartDeals Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">Smart</span>
              <span className="text-purple-500">Deals</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your trusted marketplace for authentic local products. Discover the best deals from across
              Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/allProducts" className="hover:text-purple-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-purple-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-purple-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-purple-400 transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="hover:text-purple-400 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="hover:text-purple-400 transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/home-living" className="hover:text-purple-400 transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/category/groceries" className="hover:text-purple-400 transition-colors">
                  Groceries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact & Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <HiMail className="text-purple-400 text-xl flex-shrink-0" />
                <a href="mailto:support@Smartdeals.com" className="hover:text-purple-400 transition-colors">
                  support@Smartdeals.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="text-purple-400 text-xl flex-shrink-0" />
                <a href="tel:+880123456789" className="hover:text-purple-400 transition-colors">
                  +880 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiLocationMarker className="text-purple-400 text-xl flex-shrink-0 mt-1" />
                <span>
                  123 Commerce Street,
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Social Links</h4>
              <div className="flex gap-3">
                href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10
                rounded-full bg-slate-700 hover:bg-purple-600 flex items-center justify-center
                transition-colors"
                <a>
                  <a>
                    <FaXTwitter className="text-white text-lg" />
                  </a>
                </a>
                href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10
                rounded-full bg-slate-700 hover:bg-purple-600 flex items-center justify-center
                transition-colors"
                <a>
                  <FaLinkedinIn className="text-white text-lg" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
