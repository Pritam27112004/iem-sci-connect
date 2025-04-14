
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book } from "lucide-react";

const Syllabus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Book className="h-12 w-12 mx-auto text-iem-primary mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Course Syllabus</h1>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive syllabus for all courses offered by the Basic Science & Humanities Department
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-center text-gray-500 italic">
              Syllabus content will be available soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Syllabus;
