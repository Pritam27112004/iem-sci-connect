
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Calendar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <FileText className="h-12 w-12 mx-auto text-iem-primary mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Academic Calendar</h1>
            <p className="mt-4 text-lg text-gray-600">
              Academic events, holidays, and important dates for the current academic year
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-center text-gray-500 italic">
              Academic calendar content will be available soon. Please check back later.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
