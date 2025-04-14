
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Mail, Phone, BookOpen, Users, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Mock data for faculty members
const facultyData = [
  {
    id: 1,
    name: "Dr. Amit Kumar",
    department: "Mathematics",
    designation: "Associate Professor",
    email: "amit.kumar@iemcal.com",
    phone: "+91 9876543210",
    specialization: "Applied Mathematics, Differential Equations",
    image: null,
    subjects: ["Calculus", "Linear Algebra"],
    qualifications: "Ph.D. in Mathematics, IIT Kharagpur",
    publications: 12,
    experience: "8 years"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    department: "Physics",
    designation: "Assistant Professor",
    email: "priya.sharma@iemcal.com",
    phone: "+91 9876543211",
    specialization: "Quantum Physics, Material Science",
    image: null,
    subjects: ["Mechanics", "Electromagnetism"],
    qualifications: "Ph.D. in Physics, IIT Delhi",
    publications: 8,
    experience: "5 years"
  },
  {
    id: 3,
    name: "Dr. Rajesh Verma",
    department: "Chemistry",
    designation: "Professor",
    email: "rajesh.verma@iemcal.com",
    phone: "+91 9876543212",
    specialization: "Organic Chemistry, Polymers",
    image: null,
    subjects: ["General Chemistry", "Organic Chemistry"],
    qualifications: "Ph.D. in Chemistry, Jadavpur University",
    publications: 15,
    experience: "12 years"
  },
  {
    id: 4,
    name: "Prof. Sneha Gupta",
    department: "English & Communication",
    designation: "Assistant Professor",
    email: "sneha.gupta@iemcal.com",
    phone: "+91 9876543213",
    specialization: "Technical Communication, Business English",
    image: null,
    subjects: ["Technical English", "Communication Skills"],
    qualifications: "M.Phil in English, Calcutta University",
    publications: 5,
    experience: "7 years"
  },
  {
    id: 5,
    name: "Dr. Sanjay Mondal",
    department: "Mathematics",
    designation: "Professor",
    email: "sanjay.mondal@iemcal.com",
    phone: "+91 9876543214",
    specialization: "Numerical Analysis, Computational Mathematics",
    image: null,
    subjects: ["Probability", "Statistics"],
    qualifications: "Ph.D. in Mathematics, ISI Kolkata",
    publications: 20,
    experience: "15 years"
  },
  {
    id: 6,
    name: "Dr. Meenakshi Das",
    department: "Physics",
    designation: "Associate Professor",
    email: "meenakshi.das@iemcal.com",
    phone: "+91 9876543215",
    specialization: "Optics, Solid State Physics",
    image: null,
    subjects: ["Optics", "Modern Physics"],
    qualifications: "Ph.D. in Physics, IIT Bombay",
    publications: 11,
    experience: "9 years"
  },
];

// Department icon mapping
const getDepartmentIcon = (department: string) => {
  switch(department) {
    case "Mathematics":
      return <BookOpen className="h-5 w-5" />;
    case "Physics":
      return <Award className="h-5 w-5" />;
    case "Chemistry":
      return <Users className="h-5 w-5" />;
    case "English & Communication":
      return <Calendar className="h-5 w-5" />;
    default:
      return <BookOpen className="h-5 w-5" />;
  }
};

// Get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  
  // Filter faculty based on search and department
  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter ? faculty.department === departmentFilter : true;
    
    return matchesSearch && matchesDepartment;
  });
  
  // Get unique departments for filter
  const departments = [...new Set(facultyData.map(faculty => faculty.department))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-iem-primary py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white">Faculty Directory</h1>
            <p className="mt-2 text-iem-light">
              Meet our distinguished faculty members from the Basic Science and Humanities Department
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and filters */}
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search by name or specialization"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Departments</SelectItem>
                  {departments.map((dept, index) => (
                    <SelectItem key={index} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Faculty cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty) => (
              <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="p-5">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16 border-2 border-iem-light">
                        {faculty.image ? (
                          <img src={faculty.image} alt={faculty.name} />
                        ) : (
                          <AvatarFallback className="bg-iem-secondary text-white">
                            {getInitials(faculty.name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-iem-primary">
                          {faculty.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          {getDepartmentIcon(faculty.department)}
                          <span className="ml-1 text-sm">{faculty.department}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{faculty.designation}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Expertise:</span> {faculty.specialization}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Experience:</span> {faculty.experience}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Qualifications:</span> {faculty.qualifications}
                      </p>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={16} className="mr-2 text-iem-secondary" />
                        <span>{faculty.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={16} className="mr-2 text-iem-secondary" />
                        <span>{faculty.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 border-t">
                    <Button variant="outline" className="w-full text-iem-primary border-iem-primary hover:bg-iem-light">
                      View Full Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredFaculty.length === 0 && (
            <div className="text-center p-12">
              <p className="text-gray-500">No faculty members found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
