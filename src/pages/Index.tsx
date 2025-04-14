
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Calendar, Code, Database, Compass, Terminal, PieChart, DollarSign, FileText, Cpu, Zap, Microscope, Briefcase } from "lucide-react";

const Index = () => {
  const subjects = [
    { name: "Mathematics", icon: <BookOpen className="h-8 w-8 text-iem-primary" /> },
    { name: "Physics", icon: <Award className="h-8 w-8 text-iem-primary" /> },
    { name: "Chemistry", icon: <Users className="h-8 w-8 text-iem-primary" /> },
    { name: "English & Communication", icon: <Calendar className="h-8 w-8 text-iem-primary" /> },
    { name: "Programming for Problem Solving", icon: <Code className="h-8 w-8 text-iem-primary" /> },
    { name: "Python for Data Science", icon: <Database className="h-8 w-8 text-iem-primary" /> },
    { name: "Mechanics", icon: <Compass className="h-8 w-8 text-iem-primary" /> },
    { name: "MATLAB", icon: <Terminal className="h-8 w-8 text-iem-primary" /> },
    { name: "DTI", icon: <PieChart className="h-8 w-8 text-iem-primary" /> },
    { name: "Economics", icon: <DollarSign className="h-8 w-8 text-iem-primary" /> },
    { name: "ESP", icon: <FileText className="h-8 w-8 text-iem-primary" /> },
    { name: "SDP", icon: <FileText className="h-8 w-8 text-iem-primary" /> },
    { name: "Electronics", icon: <Cpu className="h-8 w-8 text-iem-primary" /> },
    { name: "Electrical", icon: <Zap className="h-8 w-8 text-iem-primary" /> },
    { name: "Biology", icon: <Microscope className="h-8 w-8 text-iem-primary" /> },
    { name: "Entrepreneurship", icon: <Briefcase className="h-8 w-8 text-iem-primary" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Department Intro */}
        <section className="py-16 bg-gradient-to-b from-white to-iem-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-iem-primary via-iem-secondary to-iem-primary bg-clip-text">Basic Science & Humanities Department</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                The foundation of engineering education, providing first-year students with essential knowledge
                across key disciplines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="border-t-4 border-t-iem-primary transition-all hover:shadow-lg hover:-translate-y-1 group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-iem-primary transition-colors">{subject.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      Foundational courses for engineering students
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-iem-light to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-iem-accent/5 animate-pulse" style={{ animationDuration: '10s' }}></div>
            <div className="absolute -left-10 bottom-10 w-40 h-40 rounded-full bg-iem-primary/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-iem-primary via-iem-secondary to-iem-primary bg-clip-text">Platform Features</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Connecting students and faculty for enhanced academic engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-iem-primary to-iem-secondary bg-clip-text mb-4">For Students</h3>
                <ul className="space-y-3">
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">1</span>
                    <span className="ml-3 text-gray-700">Track your assignment completion stats</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">2</span>
                    <span className="ml-3 text-gray-700">View faculty profiles and contact information</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">3</span>
                    <span className="ml-3 text-gray-700">Compare performance with peers on the leaderboard</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">4</span>
                    <span className="ml-3 text-gray-700">Access study resources and department announcements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-iem-primary to-iem-secondary bg-clip-text mb-4">For Faculty</h3>
                <ul className="space-y-3">
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">1</span>
                    <span className="ml-3 text-gray-700">Create and manage your professional profile</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">2</span>
                    <span className="ml-3 text-gray-700">Share your research interests and publications</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">3</span>
                    <span className="ml-3 text-gray-700">Monitor student progress and engagement</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-1 transition-transform">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-iem-accent to-iem-secondary flex items-center justify-center text-white">4</span>
                    <span className="ml-3 text-gray-700">Connect with other department faculty members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
