
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, UserPlus, Book, CalendarDays, FileText, ExternalLink } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-iem-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">IEM-Sci-Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-iem-dark transition-colors">
              Home
            </Link>
            
            <NavigationMenu className="text-white">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-iem-dark text-white">Academic Details</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[220px]">
                    <ul className="grid w-[250px] gap-2 p-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link to="/syllabus" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <Book className="h-4 w-4 mr-2" />
                            <span>Syllabus</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link to="/routine" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>Class Routine</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link to="/calendar" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            <span>Academic Calendar</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-iem-dark text-white">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[220px]">
                    <ul className="grid w-[250px] gap-2 p-2">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>LinkedIn Learning</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>NPTEL</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>Coursera</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-accent rounded-md w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>Udemy</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/faculty" className="px-3 py-2 rounded-md hover:bg-iem-dark transition-colors">
              Faculty
            </Link>
            <Link to="/leaderboard" className="px-3 py-2 rounded-md hover:bg-iem-dark transition-colors">
              Leaderboard
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-iem-dark transition-colors">
              About
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-iem-dark" asChild>
                <Link to="/login"><User size={16} className="mr-1" /> Login</Link>
              </Button>
              <Button size="sm" className="bg-iem-accent hover:bg-iem-dark text-white" asChild>
                <Link to="/register"><UserPlus size={16} className="mr-1" /> Register</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              className="text-white hover:text-gray-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-iem-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-iem-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Academic Details Section */}
            <div className="block px-3 py-2">
              <span className="font-medium">Academic Details</span>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/syllabus" 
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                    <span>Syllabus</span>
                  </div>
                </Link>
                <Link 
                  to="/routine" 
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>Class Routine</span>
                  </div>
                </Link>
                <Link 
                  to="/calendar" 
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Academic Calendar</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Courses Section */}
            <div className="block px-3 py-2">
              <span className="font-medium">Courses</span>
              <div className="pl-4 mt-2 space-y-2">
                <a 
                  href="https://www.linkedin.com/learning/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>LinkedIn Learning</span>
                  </div>
                </a>
                <a 
                  href="https://nptel.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>NPTEL</span>
                  </div>
                </a>
                <a 
                  href="https://www.coursera.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>Coursera</span>
                  </div>
                </a>
                <a 
                  href="https://www.udemy.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-iem-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>Udemy</span>
                  </div>
                </a>
              </div>
            </div>
            
            <Link 
              to="/faculty" 
              className="block px-3 py-2 rounded-md hover:bg-iem-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </Link>
            <Link 
              to="/leaderboard" 
              className="block px-3 py-2 rounded-md hover:bg-iem-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md hover:bg-iem-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-white text-white hover:bg-iem-dark w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}><User size={16} className="mr-1" /> Login</Link>
              </Button>
              <Button className="bg-iem-accent hover:bg-iem-dark text-white w-full" asChild>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}><UserPlus size={16} className="mr-1" /> Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
