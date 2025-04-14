import { ArrowRight, Book, Teacher, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-iem-light to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-iem-primary">
              Welcome to Basic Science & Humanities
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              The foundation of engineering excellence at Institute of Engineering and Management
            </p>
            <p className="mt-6 text-gray-600">
              Connecting first-year students with faculty resources, monitoring progress, and building academic excellence through collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-iem-primary hover:bg-iem-dark text-white" asChild>
                <Link to="/faculty">Meet Our Faculty <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="border-iem-primary text-iem-primary hover:bg-iem-light" asChild>
                <Link to="/register">Join the Platform</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block mt-10 md:mt-0 md:max-w-md">
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-100">
              <h3 className="text-iem-primary font-semibold text-lg mb-4">Platform Features</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-iem-light text-iem-primary">
                      <Teacher size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Faculty Profiles</h4>
                    <p className="mt-1 text-sm text-gray-500">Comprehensive information about department professors</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-iem-light text-iem-primary">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Student Leaderboard</h4>
                    <p className="mt-1 text-sm text-gray-500">Track assignment completion and performance</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-iem-light text-iem-primary">
                      <Book size={20} />
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
