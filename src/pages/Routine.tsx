
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Routine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-iem-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-iem-light mb-4">
              <CalendarDays className="h-8 w-8 text-iem-primary animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-iem-primary via-iem-secondary to-iem-primary bg-clip-text">Class Routine</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Weekly schedule for all courses offered by the Basic Science & Humanities Department
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <div className="flex items-center space-x-2 md:w-1/2">
                <Input 
                  type="text" 
                  placeholder="Search by semester, section or subject..." 
                  className="border-iem-primary/30 focus:border-iem-primary"
                />
                <Button variant="ghost" className="text-iem-primary">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="bg-iem-primary hover:bg-iem-dark">
                  View Full Schedule
                </Button>
                <Button variant="outline" className="border-iem-primary text-iem-primary hover:bg-iem-light">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-iem-primary to-iem-dark text-white">
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left">Monday</th>
                    <th className="p-3 text-left">Tuesday</th>
                    <th className="p-3 text-left">Wednesday</th>
                    <th className="p-3 text-left">Thursday</th>
                    <th className="p-3 text-left">Friday</th>
                  </tr>
                </thead>
                <tbody>
                  {['9:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '12:15 - 1:15', '2:00 - 3:00', '3:00 - 4:00'].map((time, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-iem-light/20 transition-colors`}>
                      <td className="p-3 border-b font-medium">{time}</td>
                      <td className="p-3 border-b">
                        <div className="transform hover:scale-105 transition-transform p-1">
                          {index === 0 ? 'Mathematics (A1)' : 
                           index === 1 ? 'Physics Lab (B2)' : 
                           index === 2 ? 'Chemistry (C1)' : 
                           index === 3 ? 'Programming (D2)' : 
                           index === 4 ? 'Tutorial' : 'English'}
                        </div>
                      </td>
                      <td className="p-3 border-b">
                        <div className="transform hover:scale-105 transition-transform p-1">
                          {index === 0 ? 'Physics (A1)' : 
                           index === 1 ? 'Mathematics (B2)' : 
                           index === 2 ? 'Programming Lab (C1)' : 
                           index === 3 ? 'Chemistry (D2)' : 
                           index === 4 ? 'English' : 'Tutorial'}
                        </div>
                      </td>
                      <td className="p-3 border-b">
                        <div className="transform hover:scale-105 transition-transform p-1">
                          {index === 0 ? 'Chemistry (A1)' : 
                           index === 1 ? 'Physics (B2)' : 
                           index === 2 ? 'Mathematics (C1)' : 
                           index === 3 ? 'English (D2)' : 
                           index === 4 ? 'Programming' : 'Chemistry Lab'}
                        </div>
                      </td>
                      <td className="p-3 border-b">
                        <div className="transform hover:scale-105 transition-transform p-1">
                          {index === 0 ? 'Programming (A1)' : 
                           index === 1 ? 'Chemistry (B2)' : 
                           index === 2 ? 'Physics (C1)' : 
                           index === 3 ? 'Mathematics (D2)' : 
                           index === 4 ? 'Chemistry Lab' : 'Physics Lab'}
                        </div>
                      </td>
                      <td className="p-3 border-b">
                        <div className="transform hover:scale-105 transition-transform p-1">
                          {index === 0 ? 'English (A1)' : 
                           index === 1 ? 'Programming (B2)' : 
                           index === 2 ? 'Mathematics Lab (C1)' : 
                           index === 3 ? 'Physics (D2)' : 
                           index === 4 ? 'Programming Lab' : 'Mathematics'}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Note: A1, B2, C1, D2 represent different sections of first-year students.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Routine;
