
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-iem-primary to-iem-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in" style={{ animationDuration: '0.6s' }}>
            <div className="flex items-center mb-4">
              <Logo size="small" className="mr-2 bg-white p-1 rounded" />
              <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-white to-iem-light bg-clip-text">IEM-Sci-Connect</h3>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Basic Science and Humanities Department's official platform for students and faculty at Institute of Engineering and Management.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-iem-accent/80 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-iem-accent/80 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-iem-accent/80 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-iem-accent/80 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-white to-iem-light bg-clip-text">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/" className="hover:text-iem-gold transition-colors">Home</Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/faculty" className="hover:text-iem-gold transition-colors">Faculty Directory</Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/leaderboard" className="hover:text-iem-gold transition-colors">Student Leaderboard</Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/about" className="hover:text-iem-gold transition-colors">About the Department</Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/login" className="hover:text-iem-gold transition-colors">Login</Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform">
                <Link to="/register" className="hover:text-iem-gold transition-colors">Register</Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-transparent bg-gradient-to-r from-white to-iem-light bg-clip-text">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center transform hover:translate-x-1 transition-transform">
                <MapPin size={16} className="mr-2 text-iem-gold" />
                <span>IEM Campus, Y-12, Block-EP, Sector-V, Salt Lake, Kolkata, India</span>
              </li>
              <li className="flex items-center transform hover:translate-x-1 transition-transform">
                <Phone size={16} className="mr-2 text-iem-gold" />
                <span>+91 (033) 2357-0000</span>
              </li>
              <li className="flex items-center transform hover:translate-x-1 transition-transform">
                <Mail size={16} className="mr-2 text-iem-gold" />
                <span>bsc-department@iemcal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm opacity-70 animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.6s' }}>
          <p>&copy; {new Date().getFullYear()} Institute of Engineering and Management. Basic Science and Humanities Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
