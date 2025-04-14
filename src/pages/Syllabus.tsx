
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Syllabus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-iem-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-iem-light mb-4">
              <Book className="h-8 w-8 text-iem-primary animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-iem-primary via-iem-secondary to-iem-primary bg-clip-text">Course Syllabus</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive syllabus for all courses offered by the Basic Science & Humanities Department
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gradient-to-br from-iem-light to-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h2 className="text-xl font-semibold text-iem-primary mb-4">First Semester</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Mathematics - I</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Physics - I</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Chemistry</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Programming for Problem Solving</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-iem-light to-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h2 className="text-xl font-semibold text-iem-primary mb-4">Second Semester</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Mathematics - II</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Physics - II</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">English & Communication</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                  <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                    <span className="font-medium">Python for Data Science</span>
                    <Button variant="outline" size="sm" className="text-iem-primary border-iem-primary hover:bg-iem-light">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Syllabus;
