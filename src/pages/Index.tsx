
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Calendar } from "lucide-react";

const Index = () => {
  const subjects = [
    { name: "Mathematics", icon: <BookOpen className="h-8 w-8 text-iem-primary" /> },
    { name: "Physics", icon: <Award className="h-8 w-8 text-iem-primary" /> },
    { name: "Chemistry", icon: <Users className="h-8 w-8 text-iem-primary" /> },
    { name: "English & Communication", icon: <Calendar className="h-8 w-8 text-iem-primary" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Department Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-iem-primary">Basic Science & Humanities Department</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                The foundation of engineering education, providing first-year students with essential knowledge
                across key disciplines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subjects.map((subject, index) => (
                <Card key={index} className="border-t-4 border-t-iem-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">{subject.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Foundational courses for engineering students
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-iem-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-iem-primary">Platform Features</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Connecting students and faculty for enhanced academic engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-iem-primary mb-4">For Students</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">1</span>
                    <span className="ml-3 text-gray-700">Track your assignment completion stats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">2</span>
                    <span className="ml-3 text-gray-700">View faculty profiles and contact information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">3</span>
                    <span className="ml-3 text-gray-700">Compare performance with peers on the leaderboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">4</span>
                    <span className="ml-3 text-gray-700">Access study resources and department announcements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-iem-primary mb-4">For Faculty</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">1</span>
                    <span className="ml-3 text-gray-700">Create and manage your professional profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">2</span>
                    <span className="ml-3 text-gray-700">Share your research interests and publications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">3</span>
                    <span className="ml-3 text-gray-700">Monitor student progress and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-iem-accent flex items-center justify-center text-white">4</span>
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
