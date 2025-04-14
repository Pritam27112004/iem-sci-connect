
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, Phone, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Amitabh Sharma",
    position: "Professor & Head",
    department: "Computer Science",
    education: "Ph.D. (IIT Bombay), M.Tech (IIT Delhi)",
    email: "amitabh.sharma@iem.edu.in",
    phone: "+91 9876543210",
    office: "CS Building, Room 301",
    joinDate: "2010",
    subjects: ["Data Structures", "Algorithm Design", "Compiler Design"],
    researchAreas: ["Machine Learning", "Artificial Intelligence", "Big Data Analytics"],
    publications: 45,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Dr. Priya Banerjee",
    position: "Associate Professor",
    department: "Electronics",
    education: "Ph.D. (Jadavpur University), M.E. (Bengal Engineering College)",
    email: "priya.banerjee@iem.edu.in",
    phone: "+91 9876543211",
    office: "EC Building, Room 205",
    joinDate: "2012",
    subjects: ["Digital Electronics", "VLSI Design", "Microprocessors"],
    researchAreas: ["VLSI", "Embedded Systems", "IoT Devices"],
    publications: 32,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Prof. Rajiv Mishra",
    position: "Assistant Professor",
    department: "Mechanical",
    education: "Ph.D. (IIT Kharagpur), B.Tech (NIT Durgapur)",
    email: "rajiv.mishra@iem.edu.in",
    phone: "+91 9876543212",
    office: "ME Building, Room 110",
    joinDate: "2015",
    subjects: ["Thermodynamics", "Fluid Mechanics", "CAD/CAM"],
    researchAreas: ["Thermal Engineering", "Renewable Energy", "Fluid Dynamics"],
    publications: 18,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Dr. Ananya Das",
    position: "Professor",
    department: "Computer Science",
    education: "Ph.D. (IISc Bangalore), M.Tech (IIT Kanpur)",
    email: "ananya.das@iem.edu.in",
    phone: "+91 9876543213",
    office: "CS Building, Room 304",
    joinDate: "2009",
    subjects: ["Database Systems", "Web Technologies", "Software Engineering"],
    researchAreas: ["Database Systems", "Web Mining", "Software Architecture"],
    publications: 52,
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 5,
    name: "Prof. Sunil Kumar",
    position: "Assistant Professor",
    department: "Civil",
    education: "M.Tech (IIT Roorkee), B.Tech (NIT Warangal)",
    email: "sunil.kumar@iem.edu.in",
    phone: "+91 9876543214",
    office: "CE Building, Room 120",
    joinDate: "2017",
    subjects: ["Structural Analysis", "Concrete Technology", "Soil Mechanics"],
    researchAreas: ["Structural Engineering", "Construction Technology", "Earthquake Resistant Structures"],
    publications: 12,
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    id: 6,
    name: "Dr. Meenakshi Gupta",
    position: "Associate Professor",
    department: "Electronics",
    education: "Ph.D. (IIT Delhi), M.Tech (NIT Allahabad)",
    email: "meenakshi.gupta@iem.edu.in",
    phone: "+91 9876543215",
    office: "EC Building, Room 210",
    joinDate: "2013",
    subjects: ["Communication Systems", "Signal Processing", "Control Systems"],
    researchAreas: ["Wireless Communication", "Signal Processing", "5G Technology"],
    publications: 28,
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    id: 7,
    name: "Prof. Deepak Chatterjee",
    position: "Assistant Professor",
    department: "Mechanical",
    education: "M.Tech (Jadavpur University), B.Tech (IEM Kolkata)",
    email: "deepak.chatterjee@iem.edu.in",
    phone: "+91 9876543216",
    office: "ME Building, Room 112",
    joinDate: "2016",
    subjects: ["Engineering Mechanics", "Machine Design", "Manufacturing Technology"],
    researchAreas: ["Mechanical Design", "Manufacturing Processes", "Industrial Engineering"],
    publications: 8,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 8,
    name: "Dr. Rohit Sen",
    position: "Professor",
    department: "Computer Science",
    education: "Ph.D. (ISI Kolkata), M.Tech (Jadavpur University)",
    email: "rohit.sen@iem.edu.in",
    phone: "+91 9876543217",
    office: "CS Building, Room 305",
    joinDate: "2011",
    subjects: ["Computer Networks", "Information Security", "Cloud Computing"],
    researchAreas: ["Network Security", "Cloud Computing", "Cryptography"],
    publications: 38,
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    id: 9,
    name: "Prof. Kavita Sharma",
    position: "Assistant Professor",
    department: "Civil",
    education: "M.Tech (NIT Durgapur), B.Tech (BIT Mesra)",
    email: "kavita.sharma@iem.edu.in",
    phone: "+91 9876543218",
    office: "CE Building, Room 122",
    joinDate: "2018",
    subjects: ["Environmental Engineering", "Surveying", "Transportation Engineering"],
    researchAreas: ["Environmental Engineering", "Sustainable Construction", "Green Buildings"],
    publications: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    id: 10,
    name: "Dr. Amit Ray",
    position: "Associate Professor",
    department: "Electronics",
    education: "Ph.D. (IIT Madras), M.Tech (IIT Guwahati)",
    email: "amit.ray@iem.edu.in",
    phone: "+91 9876543219",
    office: "EC Building, Room 212",
    joinDate: "2014",
    subjects: ["Analog Electronics", "Digital System Design", "Semiconductor Devices"],
    researchAreas: ["VLSI Design", "Nanoelectronics", "Power Electronics"],
    publications: 22,
    image: "https://randomuser.me/api/portraits/men/29.jpg"
  }
];

// Get unique departments
const departments = [...new Set(facultyData.map(faculty => faculty.department))];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  
  // Filter faculty based on search and department
  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faculty.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" ? true : faculty.department === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-iem-primary to-iem-dark py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white">Our Faculty</h1>
            <p className="mt-2 text-iem-light">
              Meet our distinguished faculty members who are experts in their fields
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search faculty by name or position"
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
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((department, index) => (
                        <SelectItem key={index} value={department}>{department}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Faculty Directory */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty) => (
              <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex items-center p-4 border-b">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                    <p className="text-sm text-gray-500">{faculty.position}</p>
                    <p className="text-xs text-iem-primary">{faculty.department}</p>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <Tabs defaultValue="contact">
                    <TabsList className="w-full">
                      <TabsTrigger value="contact" className="flex-1">Contact</TabsTrigger>
                      <TabsTrigger value="academic" className="flex-1">Academic</TabsTrigger>
                      <TabsTrigger value="research" className="flex-1">Research</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="contact" className="mt-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Mail className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{faculty.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{faculty.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Joined {faculty.joinDate}</span>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="academic" className="mt-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Education:</p>
                        <p className="text-sm text-gray-600">{faculty.education}</p>
                        <p className="text-sm font-medium mt-2">Subjects:</p>
                        <div className="flex flex-wrap gap-1">
                          {faculty.subjects.map((subject, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="research" className="mt-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Research Areas:</p>
                        <div className="flex flex-wrap gap-1">
                          {faculty.researchAreas.map((area, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-medium mt-2">Publications:</p>
                        <p className="text-sm text-gray-600">{faculty.publications} published papers</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No faculty members found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
