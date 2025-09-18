import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Download, Star, Calendar, ChevronRight, Monitor, Globe } from 'lucide-react';
<link href="/src/index.css" rel="stylesheet"></link>
import { motion } from "framer-motion";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scrolling
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Active section highlighting
const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'];

useEffect(() => {
  let activeSectionRef = '';

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // adjust trigger point

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          if (activeSectionRef !== section) {
            setActiveSection(section); 
            activeSectionRef = section;
          }
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  
// For visitors tracking
useEffect(() => {
  const trackVisit = async () => {
    try {
      const visitorData = {
        ipAddress: '', // optional; usually backend can get from req.ip
        userAgent: navigator.userAgent,
        referrer: document.referrer || '',
        page: 'home' // or dynamically set the current page
      };

      await fetch('https://portfolio-backend-yyxv.onrender.com/api/track-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitorData)
      });

      console.log('Visit tracked successfully');
    } catch (error) {
      console.error('Error tracking visit:', error);
    }
  };

  trackVisit();
}, []);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://portfolio-backend-yyxv.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try email directly.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 3, textShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
              >
               {/* Rishabh*/}
              </motion.div>
                          
            <div className="hidden md:flex space-x-8 ">
              {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 cursor-pointer ${
                    activeSection === section ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 bg-slate-800/90 p-4 rounded-lg" style={{ animationFillMode: 'forwards' }}>
              {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize hover:text-cyan-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center space-y-8 px-6 max-w-4xl">
          <div className="relative">
  <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl transform hover:scale-110 transition-all duration-300">
    <div className="w-full h-full rounded-full overflow-hidden">
      <img
        src="../profile.jpg" 
        alt="Rishabh Gupta"
        className="w-full h-full object-cover=50% object-center=50%"
      />
    </div>
  </div>
</div>


          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rishabh Gupta
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Aspiring Full-Stack Developer | Final Year B.Tech CSE Student
          </p>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer with hands-on experience in building and deploying scalable web applications using the MERN Stack. 
            Skilled in Java, JavaScript, Python, React, Node.js, and databases. Good foundation in Data Structures & Algorithms 
            with proven ability to deliver end-to-end projects.
          </p>

          <div className="flex justify-center space-x-6 mt-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a 
              href="mailto:rishabh134we@gmail.com" 
              className="border border-slate-500 px-8 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Contact Me</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate B.Tech Computer Science Engineering student at Dayananda Sagar University 
                with a strong foundation in full-stack development. My journey in tech has been driven by 
                curiosity and a desire to create meaningful digital solutions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                With hands-on experience in the MERN stack and expertise in Java, Python, and JavaScript, 
                I've successfully built and deployed multiple scalable web applications. I enjoy tackling 
                complex problems through clean, efficient code and am always eager to learn new technologies.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur">
                  <Code className="mx-auto mb-2 text-cyan-400" size={32} />
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-slate-400">Major Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur">
                  <Award className="mx-auto mb-2 text-cyan-400" size={32} />
                  <div className="text-2xl font-bold text-white">8.23</div>
                  <div className="text-slate-400">CGPA</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-cyan-400" size={20} />
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-cyan-400" size={20} />
                    <span>B.Tech CSE - Dayananda Sagar University</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-cyan-400" size={20} />
                    <span>Open to Full-time & Internships</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Star className="text-cyan-400" size={20} />
                    <span>MERN Stack Specialist</span>
                  </div> */}
                  {/* <div className="flex items-center space-x-3">
                    <Phone className="text-cyan-400" size={20} />
                    <span>+91 7896751316</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <Monitor className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend</h3>
              <div className="space-y-3">
                {['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'EJS'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <div className="w-20 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <Server className="text-blue-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
              <div className="space-y-3">
                {['Node.js', 'Express.js', 'Java', 'Python', 'C'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <div className="w-20 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <Database className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4 text-purple-400">Database & Tools</h3>
              <div className="space-y-3">
                {['MongoDB', 'MySQL', 'Git', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <div className="w-20 bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Agile Methodologies', 'OOP'].map((tech) => (
                <span key={tech} className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blogging Website */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-400">Daily Drift - Blogging Platform</h3>
                <a href="https://daily-drift.onrender.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} /></a>
              </div>
              <p className="text-slate-300 mb-4">
  
                Daily Drift – Full-stack blogging platform with CRUD features, JWT authentication, and a responsive UI. Built using Node.js, Express.js, EJS, and MongoDB. Users can securely create, edit, delete, and view posts.
                Built with Node.js, Express.js, EJS, and MongoDB 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'].map((tech) => (
                  <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://daily-drift.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Globe size={16} />
                  <span>Live Demo</span>
                </a>
                <span className="text-slate-400">Jan 2025 - Mar 2025</span>
              </div>
            </div>

            {/* AI Learning Platform */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">AI-Driven Learning Platform</h3>
                <a href="http://ai-powered-video-platform.netlify.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} /></a>
              </div>
              <p className="text-slate-300 mb-4">
                Multilingual learning tool with Assembly AI for speech recognition and Google Translator API 
                for real-time translation with subtitles. Enhanced accessibility by enabling subtitles and translations for educational
                 videos. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'Python', 'MongoDB', 'Assembly AI'].map((tech) => (
                  <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href="http://ai-powered-video-platform.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Globe size={16} />
                  <span>Live Demo</span>
                </a>
                <span className="text-slate-400">Feb 2025 - Jun 2025</span>
              </div>
            </div>

            {/* Hospital Management */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">Hospital Management System</h3>
               {/* <ExternalLink className="text-slate-400 hover:text-purple-400 cursor-pointer" size={20} /> */}
              </div>
              <p className="text-slate-300 mb-4">
                Doctor appointment booking system with Flask backend and MySQL database. 
                Automated patient-doctor scheduling with intuitive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-400">Apr 2024 - Jun 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Bachelor of Technology - Computer Science Engineering</h3>
                  <p className="text-lg text-white mb-2">Dayananda Sagar University</p>
                  <p className="text-slate-300 mb-2">Bengaluru, India</p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      CGPA: 8.23
                    </span>
                    <span className="text-slate-400">July 2022 - Present</span>
                  </div>
                </div>
                <GraduationCap className="text-cyan-400" size={40} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Senior Secondary (XII)</h3>
                <p className="text-white mb-1">Sishu Pathshala Higher Secondary School</p>
                <p className="text-slate-300 mb-2">Dhubri, Assam</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    85.2%
                  </span>
                  <span className="text-slate-400">Mar 2019 - Apr 2021</span>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Secondary (X)</h3>
                <p className="text-white mb-1">Happy Convent School</p>
                <p className="text-slate-300 mb-2">Dhubri, Assam</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    86.2%
                  </span>
                  <span className="text-slate-400">March 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Web Development Intern</h3>
                  <p className="text-lg text-white mb-2">Internpe</p>
                  <p className="text-slate-400 mb-4">September 2024 - October 2024</p>
                </div>
                <Briefcase className="text-cyan-400" size={32} />
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <span>Developed and optimized projects using HTML, CSS, JavaScript and Python</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <span>Resolved coding challenges and implemented efficient algorithms to improve performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <span>Collaborated with team members to debug, review, and deploy code within deadlines</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Front-end Developer Intern</h3>
                  <p className="text-lg text-white mb-2">OctaNet Services Pvt Ltd</p>
                  <p className="text-slate-400 mb-4">August 2024 - September 2024</p>
                </div>
                <Monitor className="text-blue-400" size={32} />
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                  <span>Created basic landing pages using HTML, CSS and JavaScript</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                  <span>Learned about team collaboration and teamwork to improve communication skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">ServiceNow Certified System Administrator</h3>
                  <p className="text-slate-300 mb-4">March 2025 - May 2025</p>
                  <a 
                    href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <Award className="text-cyan-400" size={32} />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">ServiceNow Certified Application Developer</h3>
                  <p className="text-slate-300 mb-4">April 2025 - July 2025</p>
                  <a 
                    href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <Award className="text-blue-400" size={32} />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">English</h4>
                  <p className="text-slate-300">Full Professional Proficiency</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">Hindi</h4>
                  <p className="text-slate-300">Full Professional Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:rishabh134we@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      rishabh134we@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
                  <Phone className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+917896751316" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +91 7896751316
                    </a>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
                  <MapPin className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-slate-300">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex space-x-6 pt-4">
                  <a 
                    href="https://github.com/RishabhGupta19" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rishabh-gupta-b8832b311" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400 resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`text-center p-3 rounded-lg ${
                    submitMessage.includes('success') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur border-t border-slate-700/50 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            &copy; 2025 Rishabh Gupta. Built with React, Node.js, and passion for clean code.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
              
