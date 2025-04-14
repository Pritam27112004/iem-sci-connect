
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-iem-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IEM-Sci-Connect</h3>
            <p className="text-sm opacity-80 max-w-xs">
              Basic Science and Humanities Department's official platform for students and faculty at Institute of Engineering and Management.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/faculty" className="hover:underline">Faculty Directory</Link></li>
              <li><Link to="/leaderboard" className="hover:underline">Student Leaderboard</Link></li>
              <li><Link to="/about" className="hover:underline">About the Department</Link></li>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>IEM Campus, Y-12, Block-EP, Sector-V, Salt Lake, Kolkata, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+91 (033) 2357-0000</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>bsc-department@iemcal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-iem-dark text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Institute of Engineering and Management. Basic Science and Humanities Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
