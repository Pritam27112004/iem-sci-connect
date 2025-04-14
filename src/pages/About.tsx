
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Library, Users } from "lucide-react";

const About = () => {
  const facilities = [
    {
      icon: <Library className="h-10 w-10 text-iem-primary" />,
      title: "Modern Laboratories",
      description: "State-of-the-art physics, chemistry and computer labs equipped with the latest equipment for practical learning."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-iem-primary" />,
      title: "Digital Library",
      description: "Comprehensive digital resources, textbooks, and research papers accessible to all first-year students."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-iem-primary" />,
      title: "Tutorial Rooms",
      description: "Dedicated spaces for small group discussions and personalized doubt-clearing sessions."
    },
    {
      icon: <Users className="h-10 w-10 text-iem-primary" />,
      title: "Mentorship Programs",
      description: "Faculty mentors assigned to student groups to provide academic and personal guidance."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-iem-primary to-iem-dark py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">About Our Department</h1>
            <p className="mt-4 text-xl text-iem-light max-w-3xl mx-auto">
              The Basic Science and Humanities Department forms the foundation of engineering education at IEM
            </p>
          </div>
        </div>
        
        {/* Department Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold text-iem-primary mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  The Basic Science and Humanities Department at the Institute of Engineering and Management is dedicated to providing a strong foundation in fundamental sciences and humanities subjects for all first-year engineering students.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that a solid grounding in mathematics, physics, chemistry, and communication skills is essential for developing well-rounded engineers who can tackle complex real-world problems with analytical thinking and effective communication.
                </p>
                <p className="text-gray-600">
                  Our department serves as the entry point for all engineering students, laying the groundwork for their specialized studies in subsequent years while fostering critical thinking, analytical skills, and scientific curiosity.
                </p>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h2 className="text-3xl font-bold text-iem-primary mb-6">Our Approach</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-iem-light text-iem-primary">1</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium text-gray-900">Conceptual Understanding</h4>
                      <p className="mt-1 text-gray-600">Emphasizing core concepts over rote memorization</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-iem-light text-iem-primary">2</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium text-gray-900">Practical Application</h4>
                      <p className="mt-1 text-gray-600">Bridging theoretical knowledge with real-world applications</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-iem-light text-iem-primary">3</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium text-gray-900">Interdisciplinary Learning</h4>
                      <p className="mt-1 text-gray-600">Connecting concepts across different scientific disciplines</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-iem-light text-iem-primary">4</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium text-gray-900">Interactive Teaching</h4>
                      <p className="mt-1 text-gray-600">Engaging students through discussions, projects, and technology</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subjects Offered */}
        <section className="py-16 bg-iem-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-iem-primary">Subjects Offered</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                Our curriculum covers essential foundational subjects for first-year engineering students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-iem-primary shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-iem-primary mb-3">Mathematics</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive study of mathematical concepts essential for engineering applications.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Calculus and Differential Equations</li>
                    <li>• Linear Algebra and Matrices</li>
                    <li>• Probability and Statistics</li>
                    <li>• Numerical Methods</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-iem-secondary shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-iem-primary mb-3">Physics</h3>
                  <p className="text-gray-600 mb-4">
                    Fundamental physical principles and their applications in engineering.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mechanics and Properties of Matter</li>
                    <li>• Electricity and Magnetism</li>
                    <li>• Optics and Wave Phenomena</li>
                    <li>• Modern Physics</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-iem-accent shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-iem-primary mb-3">Chemistry</h3>
                  <p className="text-gray-600 mb-4">
                    Chemical principles relevant to engineering materials and processes.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• General Chemistry</li>
                    <li>• Organic Chemistry</li>
                    <li>• Environmental Chemistry</li>
                    <li>• Material Science</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-iem-dark shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-iem-primary mb-3">English & Communication</h3>
                  <p className="text-gray-600 mb-4">
                    Developing effective communication skills for professional engineering practice.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Technical Communication</li>
                    <li>• Business English</li>
                    <li>• Presentation Skills</li>
                    <li>• Report Writing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-iem-primary">Our Facilities</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                State-of-the-art infrastructure to support learning and research
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-iem-light rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-iem-primary mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="py-16 bg-iem-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-iem-primary mb-6">Contact the Department</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 mb-4">
                  For inquiries related to the Basic Science and Humanities Department, please contact:
                </p>
                <p className="text-lg font-medium text-iem-primary">Dr. Sanjay Mondal</p>
                <p className="text-gray-600">Head of Department</p>
                <p className="text-gray-600">Email: hod.bsh@iemcal.com</p>
                <p className="text-gray-600">Phone: +91 (033) 2357-0000 Ext. 123</p>
                <p className="text-gray-600 mt-4">
                  Department Office: 2nd Floor, Main Academic Building<br />
                  IEM Campus, Y-12, Block-EP, Sector-V, Salt Lake, Kolkata, India
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
