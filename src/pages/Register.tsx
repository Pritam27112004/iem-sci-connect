
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [userType, setUserType] = useState("student");
  const { toast } = useToast();
  
  // Student form state
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
    branch: "",
    year: "1",
  });
  
  // Faculty form state
  const [facultyForm, setFacultyForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    designation: "",
    qualification: "",
    experience: "",
  });
  
  const handleStudentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value
    });
  };
  
  const handleFacultyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFacultyForm({
      ...facultyForm,
      [name]: value
    });
  };
  
  const handleStudentRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (
      !studentForm.firstName ||
      !studentForm.lastName ||
      !studentForm.email ||
      !studentForm.password ||
      !studentForm.confirmPassword ||
      !studentForm.rollNumber ||
      !studentForm.branch
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all required fields",
      });
      return;
    }
    
    if (studentForm.password !== studentForm.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match",
      });
      return;
    }
    
    // In a real app, this would call an API to register the user
    toast({
      title: "Registration Successful",
      description: "Your student account has been created. Please login.",
    });
    
    console.log("Student Registration:", studentForm);
  };
  
  const handleFacultyRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (
      !facultyForm.firstName ||
      !facultyForm.lastName ||
      !facultyForm.email ||
      !facultyForm.password ||
      !facultyForm.confirmPassword ||
      !facultyForm.department ||
      !facultyForm.designation
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all required fields",
      });
      return;
    }
    
    if (facultyForm.password !== facultyForm.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match",
      });
      return;
    }
    
    // In a real app, this would call an API to register the user
    toast({
      title: "Registration Successful",
      description: "Your faculty account has been created. Please login.",
    });
    
    console.log("Faculty Registration:", facultyForm);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="student" onValueChange={setUserType}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" className="flex items-center justify-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                Student
              </TabsTrigger>
              <TabsTrigger value="faculty" className="flex items-center justify-center">
                <BookOpen className="mr-2 h-4 w-4" />
                Faculty
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <Card>
                <CardHeader>
                  <CardTitle>Student Registration</CardTitle>
                  <CardDescription>
                    Create your student account to access the IEM-Sci-Connect platform
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleStudentRegister}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-firstName">First Name</Label>
                        <Input 
                          id="student-firstName" 
                          name="firstName"
                          value={studentForm.firstName}
                          onChange={handleStudentInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-lastName">Last Name</Label>
                        <Input 
                          id="student-lastName" 
                          name="lastName"
                          value={studentForm.lastName}
                          onChange={handleStudentInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email Address</Label>
                      <Input 
                        id="student-email" 
                        type="email" 
                        name="email"
                        placeholder="your.email@iemcal.com" 
                        value={studentForm.email}
                        onChange={handleStudentInputChange}
                      />
                      <p className="text-xs text-gray-500">
                        Please use your institutional email for Google Classroom integration
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-password">Password</Label>
                        <Input 
                          id="student-password" 
                          type="password" 
                          name="password"
                          value={studentForm.password}
                          onChange={handleStudentInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-confirmPassword">Confirm Password</Label>
                        <Input 
                          id="student-confirmPassword" 
                          type="password" 
                          name="confirmPassword"
                          value={studentForm.confirmPassword}
                          onChange={handleStudentInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="student-rollNumber">Roll Number</Label>
                      <Input 
                        id="student-rollNumber" 
                        name="rollNumber"
                        placeholder="e.g. IEM/FY/2023/001" 
                        value={studentForm.rollNumber}
                        onChange={handleStudentInputChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-branch">Branch</Label>
                        <Select 
                          value={studentForm.branch} 
                          onValueChange={(value) => setStudentForm({...studentForm, branch: value})}
                        >
                          <SelectTrigger id="student-branch">
                            <SelectValue placeholder="Select branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Computer Science">Computer Science</SelectItem>
                            <SelectItem value="Electronics">Electronics</SelectItem>
                            <SelectItem value="Electrical">Electrical</SelectItem>
                            <SelectItem value="Mechanical">Mechanical</SelectItem>
                            <SelectItem value="Civil">Civil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Year</Label>
                        <RadioGroup 
                          defaultValue="1" 
                          value={studentForm.year}
                          onValueChange={(value) => setStudentForm({...studentForm, year: value})}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="year-1" />
                            <Label htmlFor="year-1">1st Year</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-iem-primary hover:bg-iem-dark">
                      Register as Student
                    </Button>
                    <div className="text-center text-sm">
                      Already have an account?{" "}
                      <Link to="/login" className="text-iem-secondary hover:underline">
                        Login here
                      </Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="faculty">
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Registration</CardTitle>
                  <CardDescription>
                    Create your faculty profile for the Basic Science & Humanities Department
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleFacultyRegister}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="faculty-firstName">First Name</Label>
                        <Input 
                          id="faculty-firstName" 
                          name="firstName"
                          value={facultyForm.firstName}
                          onChange={handleFacultyInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="faculty-lastName">Last Name</Label>
                        <Input 
                          id="faculty-lastName" 
                          name="lastName"
                          value={facultyForm.lastName}
                          onChange={handleFacultyInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="faculty-email">Email Address</Label>
                      <Input 
                        id="faculty-email" 
                        type="email" 
                        name="email"
                        placeholder="faculty.name@iemcal.com" 
                        value={facultyForm.email}
                        onChange={handleFacultyInputChange}
                      />
                      <p className="text-xs text-gray-500">
                        Please use your official institutional email address
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="faculty-password">Password</Label>
                        <Input 
                          id="faculty-password" 
                          type="password" 
                          name="password"
                          value={facultyForm.password}
                          onChange={handleFacultyInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="faculty-confirmPassword">Confirm Password</Label>
                        <Input 
                          id="faculty-confirmPassword" 
                          type="password" 
                          name="confirmPassword"
                          value={facultyForm.confirmPassword}
                          onChange={handleFacultyInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="faculty-department">Department</Label>
                        <Select 
                          value={facultyForm.department} 
                          onValueChange={(value) => setFacultyForm({...facultyForm, department: value})}
                        >
                          <SelectTrigger id="faculty-department">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Mathematics">Mathematics</SelectItem>
                            <SelectItem value="Physics">Physics</SelectItem>
                            <SelectItem value="Chemistry">Chemistry</SelectItem>
                            <SelectItem value="English & Communication">English & Communication</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="faculty-designation">Designation</Label>
                        <Select 
                          value={facultyForm.designation} 
                          onValueChange={(value) => setFacultyForm({...facultyForm, designation: value})}
                        >
                          <SelectTrigger id="faculty-designation">
                            <SelectValue placeholder="Select designation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Professor">Professor</SelectItem>
                            <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                            <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                            <SelectItem value="Lecturer">Lecturer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="faculty-qualification">Highest Qualification</Label>
                      <Input 
                        id="faculty-qualification" 
                        name="qualification"
                        placeholder="e.g. Ph.D. in Physics from IIT Kharagpur" 
                        value={facultyForm.qualification}
                        onChange={handleFacultyInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="faculty-experience">Years of Experience</Label>
                      <Input 
                        id="faculty-experience" 
                        name="experience"
                        placeholder="e.g. 8 years" 
                        value={facultyForm.experience}
                        onChange={handleFacultyInputChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-iem-primary hover:bg-iem-dark">
                      Register as Faculty
                    </Button>
                    <div className="text-center text-sm">
                      Already have a faculty account?{" "}
                      <Link to="/login" className="text-iem-secondary hover:underline">
                        Login here
                      </Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
