
import { ArrowRight, Book, School, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-iem-light via-white to-iem-light py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-iem-primary/5 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-iem-accent/5 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-iem-gold/5 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl md:pr-8 animate-fade-in" style={{ animationDuration: '1s' }}>
            <div className="flex items-center mb-6">
              <Logo size="large" className="mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-iem">
                Basic Science & Humanities
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-600">
              The foundation of engineering excellence at Institute of Engineering and Management
            </p>
            <p className="mt-6 text-gray-600">
              Connecting first-year students with faculty resources, monitoring progress, and building academic excellence through collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-iem-primary to-iem-dark hover:shadow-lg transition-all duration-300 text-white animate-fade-in animate-pulse-glow" style={{ animationDelay: '0.3s' }} asChild>
                <Link to="/faculty" className="group">Meet Our Faculty <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="border-iem-primary text-iem-primary hover:bg-iem-light hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }} asChild>
                <Link to="/register">Join the Platform</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block mt-10 md:mt-0 md:max-w-md animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <h3 className="text-iem-primary font-semibold text-lg mb-4">Platform Features</h3>
              <ul className="space-y-4">
                <li className="flex transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-iem-light to-white text-iem-primary">
                      <School size={20} className="animate-pulse" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Faculty Profiles</h4>
                    <p className="mt-1 text-sm text-gray-500">Comprehensive information about department professors</p>
                  </div>
                </li>
                <li className="flex transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-iem-light to-white text-iem-primary">
                      <Trophy size={20} className="animate-pulse" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Student Leaderboard</h4>
                    <p className="mt-1 text-sm text-gray-500">Track assignment completion and performance</p>
                  </div>
                </li>
                <li className="flex transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-iem-light to-white text-iem-primary">
                      <Book size={20} className="animate-pulse" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Academic Resources</h4>
                    <p className="mt-1 text-sm text-gray-500">Access to study materials and support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
