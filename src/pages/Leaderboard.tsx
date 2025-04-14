
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Trophy, Medal, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock student data
const studentData = [
  {
    id: 1,
    name: "Rohan Sharma",
    roll: "IEM/FY/2023/001",
    branch: "Computer Science",
    completionRate: 97,
    assignments: { total: 30, completed: 29 },
    lastActive: "2 hours ago",
    rank: 1
  },
  {
    id: 2,
    name: "Anika Patel",
    roll: "IEM/FY/2023/042",
    branch: "Electronics",
    completionRate: 95,
    assignments: { total: 30, completed: 28 },
    lastActive: "1 day ago",
    rank: 2
  },
  {
    id: 3,
    name: "Dev Chatterjee",
    roll: "IEM/FY/2023/105",
    branch: "Mechanical",
    completionRate: 93,
    assignments: { total: 30, completed: 28 },
    lastActive: "5 hours ago",
    rank: 3
  },
  {
    id: 4,
    name: "Ishita Roy",
    roll: "IEM/FY/2023/078",
    branch: "Computer Science",
    completionRate: 90,
    assignments: { total: 30, completed: 27 },
    lastActive: "3 hours ago",
    rank: 4
  },
  {
    id: 5,
    name: "Arjun Singh",
    roll: "IEM/FY/2023/156",
    branch: "Civil",
    completionRate: 87,
    assignments: { total: 30, completed: 26 },
    lastActive: "12 hours ago",
    rank: 5
  },
  {
    id: 6,
    name: "Neha Banerjee",
    roll: "IEM/FY/2023/203",
    branch: "Electronics",
    completionRate: 83,
    assignments: { total: 30, completed: 25 },
    lastActive: "1 day ago",
    rank: 6
  },
  {
    id: 7,
    name: "Rahul Ghosh",
    roll: "IEM/FY/2023/118",
    branch: "Mechanical",
    completionRate: 80,
    assignments: { total: 30, completed: 24 },
    lastActive: "2 days ago",
    rank: 7
  },
  {
    id: 8,
    name: "Priya Gupta",
    roll: "IEM/FY/2023/064",
    branch: "Computer Science",
    completionRate: 77,
    assignments: { total: 30, completed: 23 },
    lastActive: "6 hours ago",
    rank: 8
  },
  {
    id: 9,
    name: "Vikram Das",
    roll: "IEM/FY/2023/132",
    branch: "Civil",
    completionRate: 73,
    assignments: { total: 30, completed: 22 },
    lastActive: "1 day ago",
    rank: 9
  },
  {
    id: 10,
    name: "Shreya Sen",
    roll: "IEM/FY/2023/091",
    branch: "Electronics",
    completionRate: 70,
    assignments: { total: 30, completed: 21 },
    lastActive: "8 hours ago",
    rank: 10
  }
];

// Get rank badge based on position
const getRankBadge = (rank: number) => {
  switch(rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />;
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />;
    case 3:
      return <Award className="h-6 w-6 text-amber-700" />;
    default:
      return <span className="font-semibold text-gray-600">{rank}</span>;
  }
};

// Progress bar color based on completion rate
const getProgressColor = (rate: number) => {
  if (rate >= 90) return "bg-green-500";
  if (rate >= 70) return "bg-blue-500";
  if (rate >= 50) return "bg-yellow-500";
  return "bg-red-500";
};

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  
  // Filter students based on search and branch
  const filteredStudents = studentData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.roll.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = branchFilter === "all" ? true : student.branch === branchFilter;
    
    return matchesSearch && matchesBranch;
  });
  
  // Get unique branches for filter
  const branches = [...new Set(studentData.map(student => student.branch))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-iem-primary to-iem-dark py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white">Student Leaderboard</h1>
            <p className="mt-2 text-iem-light">
              Track assignment completion performance for first-year students
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction card */}
          <Card className="mb-8 bg-white border-none shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-iem-primary">Assignment Completion Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This leaderboard showcases first-year students based on their Google Classroom assignment completion rates.
                Higher completion rates and timely submissions earn students better positions on the leaderboard.
              </p>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <div className="bg-green-500 h-3 w-3 rounded-full mr-1"></div>
                <span className="mr-4">90%+ Excellent</span>
                <div className="bg-blue-500 h-3 w-3 rounded-full mr-1"></div>
                <span className="mr-4">70-89% Good</span>
                <div className="bg-yellow-500 h-3 w-3 rounded-full mr-1"></div>
                <span className="mr-4">50-69% Average</span>
                <div className="bg-red-500 h-3 w-3 rounded-full mr-1"></div>
                <span>Below 50% Needs Improvement</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Search and filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search by name or roll number"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  {branches.map((branch, index) => (
                    <SelectItem key={index} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Leaderboard */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-iem-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold w-16">Rank</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Student</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Branch</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Completion</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Assignments</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">Last Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex justify-center items-center">
                          {getRankBadge(student.rank)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.roll}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{student.branch}</td>
                      <td className="py-4 px-4">
                        <div className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{student.completionRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${getProgressColor(student.completionRate)}`} 
                              style={{ width: `${student.completionRate}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {student.assignments.completed} / {student.assignments.total}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{student.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredStudents.length === 0 && (
              <div className="text-center p-8 text-gray-500">
                No students found matching your search criteria.
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Note: This leaderboard data is synced with Google Classroom and updates periodically.
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
