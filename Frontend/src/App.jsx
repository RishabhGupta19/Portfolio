// import React, { useState, useEffect } from 'react';
 import profilePic from '../Profile.jpg';
// Removed unused SpeedInsights to reduce bundle size
// Defer react-icons to reduce initial bundle; loaded on intersection
// import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Download, Star, Calendar, ChevronRight, Monitor, Globe } from 'lucide-react';
// <link href="/src/index.css" rel="stylesheet"></link>
// import { motion } from "framer-motion"; // not used
// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Mouse tracking for interactive elements
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Smooth scrolling
//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   // Active section highlighting
// const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'];

// useEffect(() => {
//   let activeSectionRef = '';

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY + window.innerHeight / 2; // adjust trigger point

//     for (let section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         const elementTop = rect.top + window.scrollY;
//         const elementBottom = elementTop + rect.height;

//         if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
//           if (activeSectionRef !== section) {
//             setActiveSection(section); 
//             activeSectionRef = section;
//           }
//           break;
//         }
//       }
//     }
//   };

//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);
  
// // For visitors tracking
// useEffect(() => {
//   const trackVisit = async () => {
//     try {
//       const visitorData = {
//         ipAddress: '', // optional; usually backend can get from req.ip
//         userAgent: navigator.userAgent,
//         referrer: document.referrer || '',
//         page: 'home' // or dynamically set the current page
//       };

//       await fetch('https://portfolio-backend-yyxv.onrender.com/api/track-visit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(visitorData)
//       });

      
//     } catch (error) {
//       console.error('Error tracking visit:', error);
//     }
//   };

//   trackVisit();
// }, []);

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('https://portfolio-backend-yyxv.onrender.com/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
      
//       if (response.ok) {
//         setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setSubmitMessage('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       setSubmitMessage('Error sending message. Please try email directly.');
//     }
    
//     setIsSubmitting(false);
//     setTimeout(() => setSubmitMessage(''), 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
//       {/* Animated background elements */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div 
//           className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//           }}
//         />
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
//         <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-bounce" />
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 z-50 ">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <motion.div
//                 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 whileHover={{ scale: 1.1, rotate: 3, textShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
//               >
//                {/* Rishabh*/}
//               </motion.div>
                          
//             <div className="hidden md:flex space-x-8 ">
//               {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`capitalize transition-all duration-300 hover:text-cyan-400 cursor-pointer ${
//                     activeSection === section ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
//                   }`}
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               ☰
//             </button>
//           </div>

//           {/* Mobile menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 space-y-4 bg-slate-800/90 p-4 rounded-lg" style={{ animationFillMode: 'forwards' }}>
//               {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="block w-full text-left capitalize hover:text-cyan-400 transition-colors"
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
//         <div className="text-center space-y-8 px-6 max-w-4xl">
//           <div className="relative">
//   <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl transform hover:scale-110 transition-all duration-300">
//     <div className="w-full h-full rounded-full overflow-hidden">
//       <img
//         src={profilePic}
//         alt="Rishabh Gupta"
//         className="w-full h-full object-cover=50% object-center=50%"
//       />
//     </div>
//   </div>
// </div>


          
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Rishabh Gupta
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-slate-300 mb-8">
//             Aspiring Full-Stack Developer | Final Year B.Tech CSE Student
//           </p>
          
//           <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
//             Full-Stack Developer with hands-on experience in building and deploying scalable web applications using the MERN Stack. 
//             Skilled in Java, JavaScript, Python, React, Node.js, and databases. Good foundation in Data Structures & Algorithms 
//             with proven ability to deliver end-to-end projects.
//           </p>

//           <div className="flex justify-center space-x-6 mt-8">
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
//             >
//               Get In Touch
//             </button>
//             <a 
//               href="https://drive.google.com/drive/folders/1c7_kayTbqks-obkrFbPErSMj-ycbYHp_?usp=sharing" 
//               className="border border-slate-500 px-8 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2"
//               target="_blank"
//             >
             
//               <span>Resume</span>
//             </a>
//           </div>

//           <div className="flex justify-center space-x-6 mt-8">
//             <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Mail size={24} />
//             </a>
//             <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Github size={24} />
//             </a>
//             <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 I'm a passionate B.Tech Computer Science Engineering student at Dayananda Sagar University 
//                 with a strong foundation in full-stack development. My journey in tech has been driven by 
//                 curiosity and a desire to create meaningful digital solutions.
//               </p>
              
//               <p className="text-lg text-slate-300 leading-relaxed">
//                 With hands-on experience in the MERN stack and expertise in Java, Python, and JavaScript, 
//                 I've successfully built and deployed multiple scalable web applications. I enjoy tackling 
//                 complex problems through clean, efficient code and am always eager to learn new technologies.
//               </p>

//               <div className="grid grid-cols-2 gap-6 mt-8">
//                 <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur">
//                   <Code className="mx-auto mb-2 text-cyan-400" size={32} />
//                   <div className="text-2xl font-bold text-white">3+</div>
//                   <div className="text-slate-400">Major Projects</div>
//                 </div>
//                 <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur">
//                   <Award className="mx-auto mb-2 text-cyan-400" size={32} />
//                   <div className="text-2xl font-bold text-white">8.23</div>
//                   <div className="text-slate-400">CGPA</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-2xl">
//                 <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Facts</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="text-cyan-400" size={20} />
//                     <span>Bengaluru, India</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <GraduationCap className="text-cyan-400" size={20} />
//                     <span>B.Tech CSE - Dayananda Sagar University</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Briefcase className="text-cyan-400" size={20} />
//                     <span>Open to Full-time & Internships</span>
//                   </div>
//                   {/* <div className="flex items-center space-x-3">
//                     <Star className="text-cyan-400" size={20} />
//                     <span>MERN Stack Specialist</span>
//                   </div> */}
//                   {/* <div className="flex items-center space-x-3">
//                     <Phone className="text-cyan-400" size={20} />
//                     <span>+91 7896751316</span>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 px-6 bg-slate-900/50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Technical Skills
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
//               <Monitor className="text-cyan-400 mb-4" size={40} />
//               <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend</h3>
//               <div className="space-y-3">
//                 {['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'EJS'].map((skill) => (
//                   <div key={skill} className="flex justify-between items-center">
//                     <span>{skill}</span>
//                     <div className="w-20 bg-slate-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
//               <Server className="text-blue-400 mb-4" size={40} />
//               <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
//               <div className="space-y-3">
//                 {['Node.js', 'Express.js', 'Java', 'Python', 'C'].map((skill) => (
//                   <div key={skill} className="flex justify-between items-center">
//                     <span>{skill}</span>
//                     <div className="w-20 bg-slate-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
//               <Database className="text-purple-400 mb-4" size={40} />
//               <h3 className="text-xl font-bold mb-4 text-purple-400">Database & Tools</h3>
//               <div className="space-y-3">
//                 {['MongoDB', 'MySQL', 'Git', 'AWS', 'Docker'].map((skill) => (
//                   <div key={skill} className="flex justify-between items-center">
//                     <span>{skill}</span>
//                     <div className="w-20 bg-slate-700 rounded-full h-2">
//                       <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '75%'}}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <h3 className="text-2xl font-bold mb-6 text-white">Additional Technologies</h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               {['RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Agile Methodologies', 'OOP'].map((tech) => (
//                 <span key={tech} className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Blogging Website */}
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-bold text-cyan-400">Daily Drift - Blogging Platform</h3>
//                 <a href="https://daily-drift.onrender.com/" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} /></a>
//               </div>
//               <p className="text-slate-300 mb-4">
  
//                 Daily Drift – Full-stack blogging platform with CRUD features, JWT authentication, and a responsive UI. Built using Node.js, Express.js, EJS, and MongoDB. Users can securely create, edit, delete, and view posts.
//                 Built with Node.js, Express.js, EJS, and MongoDB 
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {['Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'].map((tech) => (
//                   <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-cyan-300">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <a 
//                   href="https://daily-drift.onrender.com/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
//                 >
//                   <Globe size={16} />
//                   <span>Live Demo</span>
//                 </a>
//                 <span className="text-slate-400">Jan 2025 - Mar 2025</span>
//               </div>
//             </div>

//             {/* AI Learning Platform */}
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-bold text-blue-400">AI-Driven Learning Platform</h3>
//                 <a href="http://ai-powered-video-platform.netlify.app/" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink className="text-slate-400 hover:text-cyan-400 cursor-pointer" size={20} /></a>
//               </div>
//               <p className="text-slate-300 mb-4">
//                 Multilingual learning tool with Assembly AI for speech recognition and Google Translator API 
//                 for real-time translation with subtitles. Enhanced accessibility by enabling subtitles and translations for educational
//                  videos. 
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {['React', 'Node.js', 'Python', 'MongoDB', 'Assembly AI'].map((tech) => (
//                   <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-blue-300">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <a 
//                   href="http://ai-powered-video-platform.netlify.app/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
//                 >
//                   <Globe size={16} />
//                   <span>Live Demo</span>
//                 </a>
//                 <span className="text-slate-400">Feb 2025 - Jun 2025</span>
//               </div>
//             </div>

//             {/* Hospital Management */}
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-bold text-purple-400">Hospital Management System</h3>
//                {/* <ExternalLink className="text-slate-400 hover:text-purple-400 cursor-pointer" size={20} /> */}
//               </div>
//               <p className="text-slate-300 mb-4">
//                 Doctor appointment booking system with Flask backend and MySQL database. 
//                 Automated patient-doctor scheduling with intuitive UI.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
//                   <span key={tech} className="bg-slate-700/50 px-2 py-1 rounded text-xs text-purple-300">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 <span className="text-slate-400">Apr 2024 - Jun 2024</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-20 px-6 bg-slate-900/50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>

//           <div className="space-y-8">
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-cyan-400 mb-2">Bachelor of Technology - Computer Science Engineering</h3>
//                   <p className="text-lg text-white mb-2">Dayananda Sagar University</p>
//                   <p className="text-slate-300 mb-2">Bengaluru, India</p>
//                   <div className="flex items-center space-x-4">
//                     <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
//                       CGPA: 8.23
//                     </span>
//                     <span className="text-slate-400">July 2022 - Present</span>
//                   </div>
//                 </div>
//                 <GraduationCap className="text-cyan-400" size={40} />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
//                 <h3 className="text-lg font-bold text-blue-400 mb-2">Senior Secondary (XII)</h3>
//                 <p className="text-white mb-1">Sishu Pathshala Higher Secondary School</p>
//                 <p className="text-slate-300 mb-2">Dhubri, Assam</p>
//                 <div className="flex items-center space-x-4">
//                   <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
//                     85.2%
//                   </span>
//                   <span className="text-slate-400">Mar 2019 - Apr 2021</span>
//                 </div>
//               </div>

//               <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
//                 <h3 className="text-lg font-bold text-purple-400 mb-2">Secondary (X)</h3>
//                 <p className="text-white mb-1">Happy Convent School</p>
//                 <p className="text-slate-300 mb-2">Dhubri, Assam</p>
//                 <div className="flex items-center space-x-4">
//                   <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
//                     86.2%
//                   </span>
//                   <span className="text-slate-400">March 2019</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       {/* <section id="experience" className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Work Experience
//             </span>
//           </h2>

//           <div className="space-y-8">
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-cyan-400 mb-2">Web Development Intern</h3>
//                   <p className="text-lg text-white mb-2">Internpe</p>
//                   <p className="text-slate-400 mb-4">September 2024 - October 2024</p>
//                 </div>
//                 <Briefcase className="text-cyan-400" size={32} />
//               </div>
//               <ul className="space-y-2 text-slate-300">
//                 <li className="flex items-start space-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
//                   <span>Developed and optimized projects using HTML, CSS, JavaScript and Python</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
//                   <span>Resolved coding challenges and implemented efficient algorithms to improve performance</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
//                   <span>Collaborated with team members to debug, review, and deploy code within deadlines</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-400 mb-2">Front-end Developer Intern</h3>
//                   <p className="text-lg text-white mb-2">OctaNet Services Pvt Ltd</p>
//                   <p className="text-slate-400 mb-4">August 2024 - September 2024</p>
//                 </div>
//                 <Monitor className="text-blue-400" size={32} />
//               </div>
//               <ul className="space-y-2 text-slate-300">
//                 <li className="flex items-start space-x-2">
//                   <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={16} />
//                   <span>Created basic landing pages using HTML, CSS and JavaScript</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={16} />
//                   <span>Learned about team collaboration and teamwork to improve communication skills</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Certificates Section */}
//       <section id="certificates" className="py-20 px-6 bg-slate-900/50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Certificates & Achievements
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-cyan-400 mb-2">ServiceNow Certified System Administrator</h3>
//                   <p className="text-slate-300 mb-4">March 2025 - May 2025</p>
//                   <a 
//                     href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
//                   >
//                     <ExternalLink size={16} />
//                     <span>View Certificate</span>
//                   </a>
//                 </div>
//                 <Award className="text-cyan-400" size={32} />
//               </div>
//             </div>

//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-400 mb-2">ServiceNow Certified Application Developer</h3>
//                   <p className="text-slate-300 mb-4">April 2025 - July 2025</p>
//                   <a 
//                     href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
//                   >
//                     <ExternalLink size={16} />
//                     <span>View Certificate</span>
//                   </a>
//                 </div>
//                 <Award className="text-blue-400" size={32} />
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold text-purple-400 mb-4">Languages</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <h4 className="text-lg font-semibold text-white mb-2">English</h4>
//                   <p className="text-slate-300">Full Professional Proficiency</p>
//                 </div>
//                 <div className="text-center">
//                   <h4 className="text-lg font-semibold text-white mb-2">Hindi</h4>
//                   <p className="text-slate-300">Full Professional Proficiency</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
//                   I'm always open to discussing new opportunities, interesting projects, 
//                   or just having a chat about technology. Feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
//                   <Mail className="text-cyan-400" size={24} />
//                   <div>
//                     <p className="text-white font-semibold">Email</p>
//                     <a href="mailto:rishabh134we@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
//                       rishabh134we@gmail.com
//                     </a>
//                   </div>
//                 </div> 

//                 {/* <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
//                   <Phone className="text-cyan-400" size={24} />
//                   <div>
//                     <p className="text-white font-semibold">Phone</p>
//                     <a href="tel:+917896751316" className="text-cyan-400 hover:text-cyan-300 transition-colors">
//                       +91 7896751316
//                     </a>
//                   </div>
//                 </div> */}
// {/* 
//                 <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur rounded-lg hover:bg-slate-700/50 transition-colors">
//                   <MapPin className="text-cyan-400" size={24} />
//                   <div>
//                     <p className="text-white font-semibold">Location</p>
//                     <p className="text-slate-300">Bengaluru, India</p>
//                   </div>
//                 </div>

//                 <div className="flex space-x-6 pt-4">
//                   <a 
//                     href="https://github.com/RishabhGupta19" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
//                   >
//                     <Github size={24} />
//                   </a>
//                   <a 
//                     href="https://linkedin.com/in/rishabh-gupta-b8832b311" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-3 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
//                   >
//                     <Linkedin size={24} />
//                   </a>
//                 </div> */}
//               </div>
//             </div>

//             <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 shadow-2xl">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
//                   <textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     rows={5}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-400 resize-none"
//                     placeholder="Your message here..."
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                       <span>Sending...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>

//                 {submitMessage && (
//                   <div className={`text-center p-3 rounded-lg ${
//                     submitMessage.includes('success') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
//                   }`}>
//                     {submitMessage}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900/80 backdrop-blur border-t border-slate-700/50 py-8 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-slate-400 mb-4">
//             &copy; 2025 Rishabh Gupta. Built with React, Node.js, and passion for clean code.
//           </p>
//           <div className="flex justify-center space-x-6">
//             <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Mail size={20} />
//             </a>
//             <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Github size={20} />
//             </a>
//             <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
//               <Linkedin size={20} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;
              


//Latest Code 




import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Download, Star, Calendar, ChevronRight, Monitor, Globe, Rocket, Zap, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  // icons sections 

  const icons = {
    React: <Monitor className="inline text-cyan-400 mr-2" />,
    "React.js": <Monitor className="inline text-cyan-400 mr-2" />,
    HTML5: <Code className="inline text-orange-500 mr-2" />,
    CSS3: <Code className="inline text-blue-500 mr-2" />,
    JavaScript: <Zap className="inline text-yellow-400 mr-2" />,
    EJS: <Code className="inline text-green-400 mr-2" />,

    "Node.js": <Server className="inline text-green-500 mr-2" />,
    "Express.js": <Server className="inline text-gray-300 mr-2" />,
    Java: <Code className="inline text-red-500 mr-2" />,
    Python: <Code className="inline text-yellow-400 mr-2" />,
    C: <Code className="inline text-blue-400 mr-2" />,

    MongoDB: <Database className="inline text-green-500 mr-2" />,
    MySQL: <Database className="inline text-blue-500 mr-2" />,
    Git: <Code className="inline text-red-500 mr-2" />,
    AWS: <Globe className="inline text-orange-500 mr-2" />,
    Docker: <Server className="inline text-blue-400 mr-2" />,
  };

const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];

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

const [currentTitle, setCurrentTitle] = useState(0);
const titles = [
  'Full-Stack Developer',
  'MERN Stack Developer', 
  'Software Engineer'
];

// Rotate titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
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

      
    } catch (error) {
      console.error('Error tracking visit:', error);
    }
  };

  trackVisit();
}, []);

  // Enhanced mouse and scroll tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

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
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translate(${scrollY * 0.5}px, ${scrollY * 0.3}px)`,
            transition: 'left 0.8s ease-out, top 0.8s ease-out'
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: '4s', transform: `translateY(${scrollY * 0.15}px)` }}
        />
        
        {/* Grid pattern */}
       <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }} />

      </div>
     

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <style>{`
          @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4); }
        }
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 z-50 shadow-lg shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold relative group">
              {/* <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rishabh Gupta
              </span> */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 capitalize transition-all duration-300 rounded-lg relative group ${
                    activeSection === section ? 'text-cyan-400' : 'hover:text-cyan-400'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-slate-800/90 p-4 rounded-xl backdrop-blur-lg border border-cyan-500/20">
              {['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-700/50"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with 3D elements */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center space-y-8 px-6 max-w-4xl relative z-10">
          {/* Animated profile with 3D effect */}
          <div className="relative inline-block mb-8 group">
            <div className="w-40 h-40 rounded-full mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-2xl shadow-cyan-500/50 transform hover:scale-110 transition-all duration-500 hover:rotate-6" style={{ animation: 'glow 3s infinite' }}>
              <div className="w-full h-full rounded-full bg-slate-800 relative overflow-hidden">
                {/* <User size={64} className="text-cyan-400 relative z-10" /> */}
                 <picture>
                   <source srcSet={new URL('../Profile.jpg?as=webp&width=320', import.meta.url).href} type="image/webp" />
                   <img 
                      src={profilePic}
                      alt="My Profile"
                      className="w-full h-full object-fit rounded-full relative z-10"
                      width={160}
                      height={160}
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                 </picture>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse" />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="space-y-4" style={{ animation: 'slideIn 0.8s ease-out' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                Rishabh Gupta
              </span>
              {/* <Rocket className="inline-block ml-4 text-cyan-400 animate-bounce" size={48} /> */}
            </h1>
            
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-slate-300">
              <Terminal className="text-cyan-400" size={28} />
              <span>{titles[currentTitle]}</span>
              <Zap className="text-yellow-400 animate-pulse" size={28} />
            </div>
          </div>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'slideIn 1s ease-out' }}>
            Full-Stack Developer with hands-on experience in building and deploying scalable web applications using the MERN Stack. 
            Skilled in Java, JavaScript, Python, React, Node.js, and databases. Strong foundation in Data Structures & Algorithms 
            with proven ability to deliver end-to-end projects.
          </p>

          <div className="flex justify-center space-x-6 mt-8" style={{ animation: 'slideIn 1.2s ease-out' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10" >Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor:pointer" />
            </button>
            <a 
              href="https://drive.google.com/drive/folders/1c7_kayTbqks-obkrFbPErSMj-ycbYHp_?usp=sharing" 
              target="_blank"
              className="relative border-2 border-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:-translate-y-1 group"
            >
              {/* <Download size={20} className="group-hover:animate-bounce" /> */}
              <span>Resume</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8 mt-8" style={{ animation: 'slideIn 1.4s ease-out' }}>
            <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Mail size={28} />
            </a>
            <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12">
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </section>

      {/* About Section with 3D cards */}
      <section id="about" className="py-30 px-6 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed backdrop-blur-sm bg-slate-800/30 p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                I'm a passionate B.Tech Computer Science Engineering final year student at Dayananda Sagar University 
                with a strong foundation in full-stack development. My journey in tech has been driven by 
                curiosity and a desire to create meaningful digital solutions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed backdrop-blur-sm bg-slate-800/30 p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                With hands-on experience in the MERN stack and expertise in Java, Python, and JavaScript, 
                I've successfully built and deployed multiple scalable web applications. I enjoy tackling 
                complex problems through clean, efficient code and am always eager to learn new technologies.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 card-3d group">
                  <Code className="mx-auto mb-3 text-cyan-400 group-hover:scale-125 transition-transform duration-300" size={40} />
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-slate-400">Major Projects</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 card-3d group">
                  <Award className="mx-auto mb-3 text-purple-400 group-hover:scale-125 transition-transform duration-300" size={40} />
                  <div className="text-3xl font-bold text-white">8.23</div>
                  <div className="text-slate-400">CGPA</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 card-3d">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Star className="animate-spin" style={{animationDuration: '3s'}} />
                  Quick Facts
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                    <MapPin className="text-cyan-400" size={24} />
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                    <GraduationCap className="text-cyan-400" size={24} />
                    <span>B.Tech CSE - Dayananda Sagar University</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                    <Briefcase className="text-cyan-400" size={24} />
                    <span>Open to Full-time & Internships</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                    <Star className="text-cyan-400" size={24} />
                    <span>MERN Stack</span>
                  </div>
                  
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with animated progress bars */}
      <section id="skills" className="py-28 px-6 bg-slate-900/30 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-cyan-500/20 card-3d">
              <Monitor className="text-cyan-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Frontend</h3>
              <div className="space-y-4">
                {[
                  { name: 'React.js', level: 90 },
                  { name: 'HTML5', level: 90 },
                  { name: 'CSS3', level: 90 },
                  { name: 'JavaScript', level: 90 },
                  { name: 'EJS', level: 80 }
                ].map((skill, index) => (
                  <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
                    <div className="flex justify-between mb-2">
                      {/* <span className="text-slate-300">{skill.name}</span> */}
                     <span className="text-slate-300 flex items-center">
                         {icons[skill.name]} {skill.name}
                       </span>

                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d">
              <Server className="text-blue-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Backend</h3>
              <div className="space-y-4">
                {[
                  { name: 'Node.js', level: 90 },
                  { name: 'Express.js', level: 90 },
                  { name: 'Java', level: 90 },
                  { name: 'Python', level: 85 },
                  { name: 'C', level: 75 }
                ].map((skill, index) => (
                  <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
                    <div className="flex justify-between mb-2">
                      {/* <span className="text-slate-300">{skill.name}</span> */}
                     <span className="text-slate-300 flex items-center">
                            {icons[skill.name]} {skill.name}
                          </span>

                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-purple-500/20 card-3d">
              <Database className="text-purple-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Database & Tools</h3>
              <div className="space-y-4">
                {[
                  { name: 'MongoDB', level: 85 },
                  { name: 'MySQL', level: 80 },
                  { name: 'Git', level: 88 },
                  { name: 'AWS', level: 75 },
                  { name: 'Docker', level: 70 }
                ].map((skill, index) => (
                  <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
                    <div className="flex justify-between mb-2">
                      {/* <span className="text-slate-300">{skill.name}</span> */}
                     <span className="text-slate-300 flex items-center">
                          {icons[skill.name]} {skill.name}
                        </span>

                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Agile Methodologies', 'OOP'].map((tech, index) => (
                <span 
                  key={tech} 
                  className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 hover:scale-110 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 cursor-pointer"
                  style={{ animation: `slideIn ${0.8 + index * 0.05}s ease-out` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with enhanced 3D cards */}
      <section id="projects" className="py-28 px-6 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '1400px' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Daily Drift - Blogging Platform',
                desc: 'Full-stack blogging platform with CRUD features, authentication(JWT), and responsive UI. Built with Node.js, Express.js, EJS, and MongoDB.',
                tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'],
                link: 'https://daily-drift.onrender.com/',
                date: 'Jan 2025 - Mar 2025',
                color: 'cyan'
              },
              {
                title: 'AI-Driven Learning Platform',
                desc: 'Multilingual learning tool with Assembly AI for speech recognition and Google Translator API for real-time translation with subtitles.',
                tech: ['React', 'Node.js', 'Python', 'MongoDB', 'Assembly AI'],
                link: 'http://ai-powered-video-platform.netlify.app/',
                date: 'Feb 2025 - Jun 2025',
                color: 'blue'
              },
              {
                title: 'Personal Expense Tracker',
                desc: 'A full-stack personal expense tracker web application built with the MERN Stack featuring CRUD operations, expense categorization, filtering, sorting, and real-time statistics with a responsive UI.',
                tech: ['Node.js', 'Express.js', 'MongoDB','React' , 'CSS','MERN','REST API'],
                link: 'https://personal-expense-tracker-rouge-seven.vercel.app/',
                date: 'Aug 2025 - Sep 2025',
                color: 'cyan'
              },
              {
                title: 'Hospital Management System',
                desc: 'Doctor appointment booking system with Flask backend and MySQL database. Automated patient-doctor scheduling with intuitive UI.',
                tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
                link: null,
                date: 'Apr 2024 - Jun 2024',
                color: 'purple'
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-${project.color}-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-${project.color}-500/20 hover:border-${project.color}-500/50 card-3d group`}
                style={{ animation: `slideIn ${0.5 + index * 0.2}s ease-out` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold text-${project.color}-400 group-hover:scale-105 transition-transform duration-300`}>
                    {project.title}
                  </h3>
                  <ExternalLink className={`text-slate-400 hover:text-${project.color}-400 cursor-pointer group-hover:rotate-45 transition-all duration-300`} size={24} />
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`bg-slate-700/50 px-3 py-1 rounded-full text-xs text-${project.color}-300 hover:bg-slate-600/50 transition-colors duration-300 border border-${project.color}-500/30`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-${project.color}-400 hover:text-${project.color}-300 transition-all duration-300 transform hover:translate-x-2`}
                    >
                      <Globe size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <span className="text-slate-400 text-sm">{project.date}</span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section with timeline */}
      <section id="education" className="py-28 px-6 bg-slate-900/30 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Education
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 border border-cyan-500/20 card-3d">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 hover:scale-105 transition-transform duration-300 inline-block">
                    Bachelor of Technology - Computer Science Engineering
                  </h3>
                  <p className="text-xl text-white mb-2">Dayananda Sagar University</p>
                  <p className="text-slate-300 mb-4">Bengaluru, India</p>
                  <div className="flex items-center space-x-4 flex-wrap gap-2">
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
                      CGPA: 8.23
                    </span>
                    <span className="text-slate-400 flex items-center gap-2">
                      <Calendar size={18} />
                      July 2022 - Present
                    </span>
                  </div>
                </div>
                <GraduationCap className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={48} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Senior Secondary (XII)</h3>
                <p className="text-white mb-2">Sishu Pathshala Higher Secondary School</p>
                <p className="text-slate-300 mb-4">Dhubri, Assam</p>
                <div className="flex items-center space-x-4 flex-wrap gap-2">
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
                    85.2%
                  </span>
                  <span className="text-slate-400">Mar 2019 - Apr 2021</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 border border-purple-500/20 card-3d">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Secondary (X)</h3>
                <p className="text-white mb-2">Happy Convent School</p>
                <p className="text-slate-300 mb-4">Dhubri, Assam</p>
                <div className="flex items-center space-x-4 flex-wrap gap-2">
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
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
      {/* <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Work Experience
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 border border-cyan-500/20 card-3d group">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                    Web Development Intern
                  </h3>
                  <p className="text-xl text-white mb-2">Internpe</p>
                  <p className="text-slate-400 mb-4">September 2024 - October 2024</p>
                </div>
                <Briefcase className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span>Developed and optimized projects using HTML, CSS, JavaScript and Python</span>
                </li>
                <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span>Resolved coding challenges and implemented efficient algorithms to improve performance</span>
                </li>
                <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <span>Collaborated with team members to debug, review, and deploy code within deadlines</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d group">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                    Front-end Developer Intern
                  </h3>
                  <p className="text-xl text-white mb-2">OctaNet Services Pvt Ltd</p>
                  <p className="text-slate-400 mb-4">August 2024 - September 2024</p>
                </div>
                <Monitor className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                  <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span>Created basic landing pages using HTML, CSS and JavaScript</span>
                </li>
                <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
                  <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <span>Learned about team collaboration and teamwork to improve communication skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Certificates Section */}
      <section id="certificates" className="py-28 px-6 bg-slate-900/30 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Certificates & Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-cyan-500/20 card-3d group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:scale-105 transition-transform duration-300">
                    ServiceNow Certified System Administrator
                  </h3>
                  <p className="text-slate-300 mb-6">March 2025 - May 2025</p>
                  <a 
                    href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <ExternalLink size={18} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <Award className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-blue-500/20 card-3d group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300">
                    ServiceNow Certified Application Developer
                  </h3>
                  <p className="text-slate-300 mb-6">April 2025 - July 2025</p>
                  <a 
                    href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <ExternalLink size={18} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <Award className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-10 max-w-2xl mx-auto border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 card-3d">
              <h3 className="text-3xl font-bold text-purple-400 mb-8">Languages</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110">
                  <h4 className="text-xl font-semibold text-white mb-3">English</h4>
                  <p className="text-slate-300">Full Proficiency</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110">
                  <h4 className="text-xl font-semibold text-white mb-3">Hindi</h4>
                  <p className="text-slate-300">Full Proficiency</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with enhanced form */}
      <section id="contact" className="py-28 px-6 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
              Get In Touch
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Let's Connect!</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-5 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 border border-cyan-500/20 hover:border-cyan-500/50 group">
                  <Mail className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:rishabh134we@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      rishabh134we@gmail.com
                    </a>
                  </div>
                </div>

                

                {/* <div className="flex items-center space-x-4 p-5 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 border border-cyan-500/20 hover:border-cyan-500/50 group">
                  <MapPin className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-slate-300">Bengaluru, India</p>
                  </div>
                </div> */}

                {/* <div className="flex space-x-6 pt-4">
                  <a 
                    href="https://github.com/RishabhGupta19" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-500/50"
                  >
                    <Github size={28} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rishabh-gupta-b8832b311" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-500/50"
                  >
                    <Linkedin size={28} />
                  </a>
                </div> */}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 card-3d">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <User size={18} className="text-cyan-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail size={18} className="text-cyan-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Send size={18} className="text-cyan-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 resize-none transition-all duration-300"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`text-center p-4 rounded-lg border ${
                    submitMessage.includes('success') 
                      ? 'bg-green-500/20 text-green-400 border-green-500/50' 
                      : 'bg-red-500/20 text-red-400 border-red-500/50'
                  } animate-pulse`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with gradient */}
      <footer className="bg-slate-900/80 backdrop-blur border-t border-cyan-500/20 py-10 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-slate-400 mb-6 text-lg">
            &copy; 2025 Rishabh Gupta. Built with React, Node.js, and passion for clean code.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Mail size={24} />
            </a>
            <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
