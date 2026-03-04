// import React, { useEffect } from 'react';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   // Add fade-in animation on scroll
//   useEffect(() => {
//     const sections = document.querySelectorAll('section');
//     const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = '1';
//       entry.target.style.transform = 'translateY(0)';
//     }
//   });
// }, { threshold: 0.1 });

// document.querySelectorAll('section').forEach(section => observer.observe(section));
//   }, []);

//   return (
//     <div>
//       <nav>
//         <div className="container">
//           <h1>Dnyaneshwari Garole</h1> {/* Replace with your name */}
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#experience">Experience</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Server, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL1Jlc291cmNlczw8L0ZvbnQ8PC9GMSAxIDAgUj4+Pj4vTWVkaWFCb3hbMCAwIDU5NSA4NDJdL0NvbnRlbnRzIDQgMCBSPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDQ0Pj4Kc3RyZWFtCkJUCi9GMSAyNCBUZgoxMDAgNzAwIFRkCihKYXZhIERldmVsb3BlciBSZXN1bWUpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKMSAwIG9iago8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2E+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlL1BhZ2VzL0NvdW50IDEvS2lkc1szIDAgUl0+PgplbmRvYmoKNSAwIG9iago8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKdHJhaWxlcgo8PC9TaXplIDYvUm9vdCA1IDAgUj4+CnN0YXJ0eHJlZgo1NDIKJSVFT0YK';
    link.download = 'Java_Developer_Resume.pdf';
    link.click();
    setFormStatus('Resume downloaded successfully!');
    setTimeout(() => setFormStatus(''), 3000);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully! (Demo mode)');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } else {
      setFormStatus('Please fill all fields');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-700">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-gray-700">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Priya Sharma</h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">Java Full Stack Developer (Fresher)</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Java Full Stack Developer (Fresher) with strong foundation in Core Java and backend development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a recent Computer Science Engineering graduate with a genuine passion for Java backend development. As a fresher Java Full Stack Developer, I bring fresh perspectives and strong foundational knowledge in Core Java and backend technologies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              During my internship, I gained hands-on experience working on Java-based development projects, where I learned to implement backend logic, work with databases, and understand REST API fundamentals. This practical exposure complemented my academic learning and strengthened my problem-solving abilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I have a strong interest in backend development using Java and am actively learning and improving my skills. I am eager to contribute to real-world projects and grow as a developer while working with experienced professionals. My focus is on writing clean, efficient code and continuously expanding my technical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Language */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Programming Language</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-700">• Java</li>
              </ul>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Server className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Backend Technologies</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Core Java</li>
                <li>• Advanced Java</li>
                <li>• JDBC</li>
                <li>• Servlets & JSP</li>
                <li>• Hibernate (JPA - basics)</li>
                <li>• REST APIs (basics)</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-orange-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Frontend (Basic)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• JavaScript</li>
                <li>• React (basic understanding)</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Database className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Databases</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
                <li>• MongoDB</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-red-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Eclipse / IntelliJ</li>
                <li>• Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Internship Experience</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Java Developer Intern</h3>
            <p className="text-gray-600 mb-4">Tech Solutions Pvt. Ltd. | June 2024 - August 2024</p>
            
            <div className="space-y-3 text-gray-700">
              <p>• Worked on Java backend logic for web applications, gaining practical experience in enterprise application development</p>
              <p>• Implemented CRUD operations using JDBC and Hibernate ORM, learning database interaction patterns</p>
              <p>• Wrote and optimized database queries for PostgreSQL, understanding query performance and indexing basics</p>
              <p>• Learned REST API basics by assisting in endpoint development and testing using Postman</p>
              <p>• Collaborated with senior developers, participated in code reviews, and learned industry best practices</p>
              <p>• Debugged and resolved issues in existing Java codebase, improving problem-solving skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic & Personal Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">School Management System</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive Java-based web application for managing school operations including student records, attendance tracking, and user authentication.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Java</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">JDBC</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Servlets/JSP</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Hibernate</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">PostgreSQL</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-2 bg-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fashion Recommendation System</h3>
                <p className="text-gray-600 mb-4">
                  Backend-focused Java project implementing recommendation logic based on user preferences and browsing history using algorithmic filtering.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Java</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">REST APIs</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">MySQL</span>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">JDBC</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-2 bg-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Attendance Management System</h3>
                <p className="text-gray-600 mb-4">
                  CRUD-based Java application for tracking and managing student attendance with features for generating reports and analytics.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Core Java</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">JDBC</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">SQL</span>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">MySQL</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-green-600 text-center font-medium">{formStatus}</p>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="mailto:priya.sharma@email.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Mail className="text-blue-600" size={20} />
                    <span>priya.sharma@email.com</span>
                  </a>
                  
                  <a href="https://linkedin.com/in/priyasharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Linkedin className="text-blue-600" size={20} />
                    <span>linkedin.com/in/priyasharma</span>
                  </a>
                  
                  <a href="https://github.com/priyasharma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Github className="text-blue-600" size={20} />
                    <span>github.com/priyasharma</span>
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700">
                  I'm actively looking for entry-level opportunities in Java backend development. Feel free to reach out if you'd like to discuss potential opportunities or collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Priya Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}