
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all fields",
      });
      return;
    }
    
    // In a real app, this would call an API to authenticate the user
    toast({
      title: "Login Successful",
      description: `Logging in as ${userType}: ${email}`,
    });
    
    // For demo purposes, we're just showing a success toast
    console.log("Login with:", { email, password, userType });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
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
                  <CardTitle>Student Login</CardTitle>
                  <CardDescription>
                    Login to access your student dashboard, view your assignment completion stats, and check the leaderboard.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email Address</Label>
                      <Input 
                        id="student-email" 
                        type="email" 
                        placeholder="your.email@iemcal.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="student-password">Password</Label>
                        <Link to="/forgot-password" className="text-xs text-iem-secondary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="student-password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-iem-primary hover:bg-iem-dark">
                      Login
                    </Button>
                    <div className="text-center text-sm">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-iem-secondary hover:underline">
                        Register here
                      </Link>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="faculty">
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Login</CardTitle>
                  <CardDescription>
                    Login to manage your faculty profile, update your professional information, and connect with students.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="faculty-email">Email Address</Label>
                      <Input 
                        id="faculty-email" 
                        type="email" 
                        placeholder="faculty.name@iemcal.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="faculty-password">Password</Label>
                        <Link to="/forgot-password" className="text-xs text-iem-secondary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="faculty-password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-iem-primary hover:bg-iem-dark">
                      Login
                    </Button>
                    <div className="text-center text-sm">
                      Don't have a faculty account?{" "}
                      <Link to="/register" className="text-iem-secondary hover:underline">
                        Register here
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

export default Login;
