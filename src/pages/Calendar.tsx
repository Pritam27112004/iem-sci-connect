
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const currentMonth = "April 2025";
  
  const events = [
    { date: "April 2", title: "Semester Registration", type: "academic" },
    { date: "April 5", title: "Classes Begin", type: "academic" },
    { date: "April 15", title: "Department Meeting", type: "department" },
    { date: "April 20", title: "Quiz 1", type: "exam" },
    { date: "April 25", title: "Science Exhibition", type: "event" },
    { date: "May 1", title: "Labour Day (Holiday)", type: "holiday" },
    { date: "May 10", title: "Mid-Semester Exams", type: "exam" },
    { date: "May 18", title: "Research Symposium", type: "event" },
    { date: "May 30", title: "Last Day of Classes", type: "academic" },
    { date: "June 5", title: "Final Exams Begin", type: "exam" },
  ];

  const getEventTypeClass = (type: string) => {
    switch(type) {
      case "academic": return "bg-blue-100 text-blue-800 border-blue-200";
      case "exam": return "bg-red-100 text-red-800 border-red-200";
      case "holiday": return "bg-green-100 text-green-800 border-green-200";
      case "event": return "bg-purple-100 text-purple-800 border-purple-200";
      case "department": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-iem-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-iem-light mb-4">
              <FileText className="h-8 w-8 text-iem-primary animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-iem-primary via-iem-secondary to-iem-primary bg-clip-text">Academic Calendar</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Academic events, holidays, and important dates for the current academic year
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" className="border-gray-300">
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <h2 className="text-2xl font-bold text-iem-primary flex items-center">
                <CalendarIcon className="h-6 w-6 mr-2" /> {currentMonth}
              </h2>
              <Button variant="outline" className="border-gray-300">
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-4 mb-4 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={index} className="font-semibold text-iem-primary">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-8">
              {/* Empty cells for previous month */}
              {[...Array(2)].map((_, index) => (
                <div key={`prev-${index}`} className="h-24 p-1 border rounded-md bg-gray-50 text-gray-400">
                  {30 + index}
                </div>
              ))}
              
              {/* Current month days */}
              {[...Array(30)].map((_, index) => (
                <div 
                  key={`day-${index + 1}`} 
                  className={`h-24 p-1 border rounded-md hover:shadow-md transition-shadow overflow-hidden ${
                    (index + 3) % 7 === 0 || (index + 2) % 7 === 0 ? 'bg-gray-50' : 'bg-white'
                  } ${index === 4 || index === 19 ? 'ring-2 ring-iem-primary/40' : ''}`}
                >
                  <div className="font-semibold mb-1">{index + 1}</div>
                  <div className="space-y-1 overflow-y-auto max-h-16 text-xs">
                    {events
                      .filter(event => event.date.includes(`April ${index + 1}`))
                      .map((event, eventIndex) => (
                        <div 
                          key={eventIndex}
                          className={`p-1 rounded border ${getEventTypeClass(event.type)} truncate transform hover:scale-105 transition-transform`}
                        >
                          {event.title}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
              
              {/* Empty cells for next month */}
              {[...Array(5)].map((_, index) => (
                <div key={`next-${index}`} className="h-24 p-1 border rounded-md bg-gray-50 text-gray-400">
                  {index + 1}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-iem-primary mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border ${getEventTypeClass(event.type)} flex justify-between items-center hover:shadow-md transition-shadow animate-fade-in`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div>
                      <div className="font-semibold">{event.title}</div>
                      <div className="text-sm">{event.date}</div>
                    </div>
                    <div className="capitalize px-2 py-1 rounded-full bg-white/50 text-xs font-medium">
                      {event.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
