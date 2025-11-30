// // import React, { useState, useEffect } from 'react';
//  import profilePic from '../Profile.jpg';
// import { SpeedInsights } from "@vercel/speed-insights/react";
// import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
// import { SiExpress, SiEjs, SiMongodb, SiMysql, SiC } from "react-icons/si";
// import AIFitnessSection from './AIFitneddSection.jsx';
// import PortfolioAIChatbot from './AI';
// import Typewriter from './typewriter.jsx';


// //Latest Code 




// import React, { useState, useEffect, useRef } from 'react'; 
// import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Download, Star, Calendar, ChevronRight, Monitor, Globe, Rocket, Zap, Terminal } from 'lucide-react';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   // icons sections 

//   const icons = {
//   React: <FaReact className="inline text-cyan-400 mr-2" />,
//   "React.js": <FaReact className="inline text-cyan-400 mr-2" />,
//   HTML5: <FaHtml5 className="inline text-orange-500 mr-2" />,
//   CSS3: <FaCss3Alt className="inline text-blue-500 mr-2" />,
//   JavaScript: <FaJs className="inline text-yellow-400 mr-2" />,
//   EJS: <SiEjs className="inline text-green-400 mr-2" />,

//   "Node.js": <FaNodeJs className="inline text-green-500 mr-2" />,
//   "Express.js": <SiExpress className="inline text-gray-300 mr-2" />,
//   Java: <FaJava className="inline text-red-500 mr-2" />,
//   Python: <FaPython className="inline text-yellow-400 mr-2" />,
//   C: <SiC className="inline text-blue-400 mr-2" />,

//   MongoDB: <SiMongodb className="inline text-green-500 mr-2" />,
//   MySQL: <SiMysql className="inline text-blue-500 mr-2" />,
//   Git: <FaGitAlt className="inline text-red-500 mr-2" />,
//   AWS: <FaAws className="inline text-orange-500 mr-2" />,
//   Docker: <FaDocker className="inline text-blue-400 mr-2" />,
// };

// const sections = ['home', 'about', 'skills', 'projects','ai-fitness', 'education', 'experience', 'certificates', 'contact'];

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

// const [currentTitle, setCurrentTitle] = useState(0);
// const titles = [
//   'Full-Stack Developer',
//   'MERN Stack Developer', 
//   'Software Engineer'
// ];

// // Rotate titles every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitle((prev) => (prev + 1) % titles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);


//   // For visitors tracking
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

//   // Enhanced mouse and scroll tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

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
//     <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
//       {/* Animated 3D Background */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         {/* Floating gradient orbs */}
//         <div 
//           className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//             transform: `translate(${scrollY * 0.5}px, ${scrollY * 0.3}px)`,
//             transition: 'left 0.8s ease-out, top 0.8s ease-out'
//           }}
//         />
//         <div 
//           className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
//           style={{ transform: `translateY(${scrollY * 0.2}px)` }}
//         />
//         <div 
//           className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce"
//           style={{ animationDuration: '4s', transform: `translateY(${scrollY * 0.15}px)` }}
//         />
        
//         {/* Grid pattern */}
//        <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           transform: `translateY(${scrollY * 0.1}px)`
//         }} />

//       </div>
     

//       {/* Floating particles */}
//       <div className="fixed inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-cyan-400 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
//               animationDelay: `${Math.random() * 5}s`,
//               opacity: 0.3 + Math.random() * 0.3
//             }}
//           />
//         ))}
//       </div>

//       <style>{`
//           @keyframes fadeInOut {
//           0% { opacity: 0; transform: translateY(10px); }
//           10% { opacity: 1; transform: translateY(0); }
//           90% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-10px); }
//         }
      
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-40px) translateX(-10px); }
//           75% { transform: translateY(-20px) translateX(5px); }
//         }
//         @keyframes slideIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
//           50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4); }
//         }
//         .card-3d {
//           transform-style: preserve-3d;
//           transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
//         }
//         .card-3d:hover {
//           transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 z-50 shadow-lg shadow-cyan-500/5">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-bold relative group">
//               {/* <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Rishabh Gupta
//               </span> */}
//               <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
//             </div>
            
//             <div className="hidden md:flex space-x-1">
//               {['home', 'about', 'skills', 'projects', 'ai-fitness','education', 'experience', 'certificates','contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className={`px-4 py-2 capitalize transition-all duration-300 rounded-lg relative group ${
//                     activeSection === section ? 'text-cyan-400' : 'hover:text-cyan-400'
//                   }`}
//                 >
//                   {section.replace('-', ' ')}
//                   {activeSection === section && (
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             <button 
//               className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <div className="space-y-1.5">
//                 <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//                 <div className={`w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
//                 <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//               </div>
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="md:hidden mt-4 space-y-2 bg-slate-800/90 p-4 rounded-xl backdrop-blur-lg border border-cyan-500/20">
//               {['home', 'about', 'skills', 'projects','ai-fitness', 'education', 'certificates', 'contact'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="block w-full text-left capitalize hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-700/50"
//                 >
//                   {section}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section with 3D elements */}
//       <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
//         <div className="text-center space-y-8 px-6 max-w-4xl relative z-10">
//           {/* Animated profile with 3D effect */}
//           <div className="relative inline-block mb-8 group">
//             <div className="w-40 h-40 rounded-full mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-1 shadow-2xl shadow-cyan-500/50 transform hover:scale-110 transition-all duration-500 hover:rotate-6" style={{ animation: 'glow 3s infinite' }}>
//               <div className="w-full h-full rounded-full bg-slate-800 relative overflow-hidden">
//                 {/* <User size={64} className="text-cyan-400 relative z-10" /> */}
//                  <img 
//                     src={profilePic}  
//                     alt="My Profile"
//                     className="w-full h-full object-fit rounded-full relative z-10"
//                   />
                
//                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse" />
//               </div>
//             </div>
//             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           </div>
          
//           <div className="space-y-4" style={{ animation: 'slideIn 0.8s ease-out' }}>
//             <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
//                 Rishabh Gupta
//               </span>
//               {/* <Rocket className="inline-block ml-4 text-cyan-400 animate-bounce" size={48} /> */}
//             </h1>
            
//             <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-slate-300">
//               <Terminal className="text-cyan-400" size={28} />
//               <span><Typewriter 
//                               texts={[
//                                 "Aspiring Full-Stack Developer",
//                                 "MERN Stack Developer",
//                                 "Software Developer"
//                               ]}
//                             />
//               </span>
//               <Zap className="text-yellow-400 animate-pulse" size={28} />
//             </div>
//           </div>
          
//           <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'slideIn 1s ease-out' }}>
//             Full-Stack Developer with hands-on experience in building and deploying scalable web applications using the MERN Stack. 
//             Skilled in Java, JavaScript, Python, React, Node.js, and databases. Strong foundation in Data Structures & Algorithms 
//             with proven ability to deliver end-to-end projects.
//           </p>

//           <div className="flex justify-center space-x-6 mt-8" style={{ animation: 'slideIn 1.2s ease-out' }}>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden cursor-pointer"
//             >
//               <span className="relative z-10" >Get In Touch</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor:pointer" />
//             </button>
//             <a 
//               href="https://drive.google.com/file/d/1vnC7RseR0Z27zipMfGqIxNh8b3kgW4GO/view?usp=sharing" 
//               target="_blank"
//               className="relative border-2 border-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:-translate-y-1 group"
//             >
//               {/* <Download size={20} className="group-hover:animate-bounce" /> */}
//               <span>Resume</span>
//             </a>
//           </div>

//           <div className="flex justify-center space-x-8 mt-8" style={{ animation: 'slideIn 1.4s ease-out' }}>
//             <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
//               <Mail size={28} />
//             </a>
//             <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12">
//               <Github size={28} />
//             </a>
//             <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12">
//               <Linkedin size={28} />
//             </a>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//           <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div> */}
//       </section>

//       {/* About Section with 3D cards */}
//       <section id="about" className="py-30 px-6 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               About Me
//             </span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-slate-300 leading-relaxed backdrop-blur-sm bg-slate-800/30 p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
//                 I'm a passionate B.Tech Computer Science Engineering final year student at Dayananda Sagar University 
//                 with a strong foundation in full-stack development. My journey in tech has been driven by 
//                 curiosity and a desire to create meaningful digital solutions.
//               </p>
              
//               <p className="text-lg text-slate-300 leading-relaxed backdrop-blur-sm bg-slate-800/30 p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105">
//                 With hands-on experience in the MERN stack and expertise in Java, Python, and JavaScript, 
//                 I've successfully built and deployed multiple scalable web applications. I enjoy tackling 
//                 complex problems through clean, efficient code and am always eager to learn new technologies.
//               </p>

//               <div className="grid grid-cols-2 gap-6 mt-8">
//                 <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 card-3d group">
//                   <Code className="mx-auto mb-3 text-cyan-400 group-hover:scale-125 transition-transform duration-300" size={40} />
//                   <div className="text-3xl font-bold text-white">5+</div>
//                   <div className="text-slate-400">Major Projects</div>
//                 </div>
//                 <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl backdrop-blur border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 card-3d group">
//                   <Award className="mx-auto mb-3 text-purple-400 group-hover:scale-125 transition-transform duration-300" size={40} />
//                   <div className="text-3xl font-bold text-white">8.23</div>
//                   <div className="text-slate-400">CGPA</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 card-3d">
//                 <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
//                   <Star className="animate-spin" style={{animationDuration: '3s'}} />
//                   Quick Facts
//                 </h3>
//                 <div className="space-y-5">
//                   <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                     <MapPin className="text-cyan-400" size={24} />
//                     <span>Bengaluru, India</span>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                     <GraduationCap className="text-cyan-400" size={24} />
//                     <span>B.Tech CSE - Dayananda Sagar University</span>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                     <Briefcase className="text-cyan-400" size={24} />
//                     <span>Open to Full-time & Internships</span>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                     <Star className="text-cyan-400" size={24} />
//                     <span>MERN Stack</span>
//                   </div>
                  
//                 </div>
//               </div>
//               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section with animated progress bars */}
//       <section id="skills" className="py-28 px-6 bg-slate-900/30 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Technical Skills
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-cyan-500/20 card-3d">
//               <Monitor className="text-cyan-400 mb-6" size={48} />
//               <h3 className="text-2xl font-bold mb-6 text-cyan-400">Frontend</h3>
//               <div className="space-y-4">
//                 {[
//                   { name: 'React.js', level: 90 },
//                   { name: 'HTML5', level: 90 },
//                   { name: 'CSS3', level: 90 },
//                   { name: 'JavaScript', level: 90 },
//                   { name: 'EJS', level: 80 }
//                 ].map((skill, index) => (
//                   <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
//                     <div className="flex justify-between mb-2">
//                       {/* <span className="text-slate-300">{skill.name}</span> */}
//                      <span className="text-slate-300 flex items-center">
//                          {icons[skill.name]} {skill.name}
//                        </span>

//                       <span className="text-cyan-400">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
//                         style={{ 
//                           width: `${skill.level}%`,
//                           animation: 'slideIn 1s ease-out'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d">
//               <Server className="text-blue-400 mb-6" size={48} />
//               <h3 className="text-2xl font-bold mb-6 text-blue-400">Backend</h3>
//               <div className="space-y-4">
//                 {[
//                   { name: 'Node.js', level: 90 },
//                   { name: 'Express.js', level: 90 },
//                   { name: 'Java', level: 90 },
//                   { name: 'Python', level: 85 },
//                   { name: 'C', level: 75 }
//                 ].map((skill, index) => (
//                   <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
//                     <div className="flex justify-between mb-2">
//                       {/* <span className="text-slate-300">{skill.name}</span> */}
//                      <span className="text-slate-300 flex items-center">
//                             {icons[skill.name]} {skill.name}
//                           </span>

//                       <span className="text-blue-400">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
//                         style={{ 
//                           width: `${skill.level}%`,
//                           animation: 'slideIn 1s ease-out'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-purple-500/20 card-3d">
//               <Database className="text-purple-400 mb-6" size={48} />
//               <h3 className="text-2xl font-bold mb-6 text-purple-400">Database & Tools</h3>
//               <div className="space-y-4">
//                 {[
//                   { name: 'MongoDB', level: 85 },
//                   { name: 'MySQL', level: 80 },
//                   { name: 'Git', level: 88 },
//                   { name: 'AWS', level: 75 },
//                   { name: 'Docker', level: 70 }
//                 ].map((skill, index) => (
//                   <div key={skill.name} style={{ animation: `slideIn ${0.5 + index * 0.1}s ease-out` }}>
//                     <div className="flex justify-between mb-2">
//                       {/* <span className="text-slate-300">{skill.name}</span> */}
//                      <span className="text-slate-300 flex items-center">
//                           {icons[skill.name]} {skill.name}
//                         </span>

//                       <span className="text-purple-400">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
//                         style={{ 
//                           width: `${skill.level}%`,
//                           animation: 'slideIn 1s ease-out'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-16 text-center">
//             <h3 className="text-2xl font-bold mb-8 text-white">Additional Technologies</h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               {['RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Agile Methodologies', 'OOP','Socket.io','RAG Pipeline Implementation','FastApi'].map((tech, index) => (
//                 <span 
//                   key={tech} 
//                   className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-full text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50 hover:scale-110 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 cursor-pointer"
//                   style={{ animation: `slideIn ${0.8 + index * 0.05}s ease-out` }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section with enhanced 3D cards */}
//       <section id="projects" className="py-28 px-6 relative">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Featured Projects
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Daily Drift - Blogging Platform',
//                 desc: 'Full-stack blogging platform with CRUD features, authentication(JWT), and responsive UI. Built with Node.js, Express.js, EJS, and MongoDB.',
//                 tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'CSS'],
//                 link: 'https://daily-drift.onrender.com/',
//                 date: 'Jan 2025 - Mar 2025',
//                 color: 'cyan'
//               },
//               {
//                 title: 'AI InterView Prep',
//                 desc: 'This AI-Powered Interview Prep App simulates job interviews by using Gemini to generate personalized questions from a Job Description (JD) and evaluate user responses against their uploaded Resume using RAG.',
//                 tech: ['Node.js', 'Express.js', 'MongoDB', 'Tailwind', 'JWT','Bcryptjs','Multer','PDF-Parse','Cloudinary','Gemini API','RAG (Retrieval-Augmented Generation)'],
//                 link: 'https://ai-interview-prep-bice-eight.vercel.app/',
//                 date: 'Oct 2025 - Oct 2025',
//                 color: 'cyan'
//               },
//               {
//                 title: 'AI-Driven Learning Platform',
//                 desc: 'Multilingual learning tool with Assembly AI for speech recognition and Google Translator API for real-time translation with subtitles.',
//                 tech: ['React', 'Node.js', 'Python', 'MongoDB', 'Assembly AI'],
//                 link: 'http://ai-powered-video-platform.netlify.app/',
//                 date: 'Feb 2025 - Jun 2025',
//                 color: 'blue'
//               },
//                {
//                 title: 'Secret Chatting App',
//                 desc: 'A real-time peer-to-peer secret chat application that allows users to create or join private chat rooms using a unique 4-digit code.The messages are instant, private, and persist locally until the user manually disconnects — ensuring both speed and privacy.',
//                 tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO','CORS'],
//                 link: 'https://secret-chatting-app.vercel.app/',
//                 date: 'Oct 2025 - Oct 2025',
//                 color: 'blue'
//               },
//               {
//                 title: 'Personal Expense Tracker',
//                 desc: 'A full-stack personal expense tracker web application built with the MERN Stack featuring CRUD operations, expense categorization, filtering, sorting, and real-time statistics with a responsive UI.',
//                 tech: ['Node.js', 'Express.js', 'MongoDB','React' , 'CSS','MERN','REST API'],
//                 link: 'https://personal-expense-tracker-rouge-seven.vercel.app/',
//                 date: 'Aug 2025 - Sep 2025',
//                 color: 'cyan'
//               },
//               {
//                 title: 'Hospital Management System',
//                 desc: 'Doctor appointment booking system with Flask backend and MySQL database. Automated patient-doctor scheduling with intuitive UI.',
//                 tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
//                 link: 'https://github.com/RishabhGupta19/Doctor-appointment-System',
//                 date: 'Apr 2024 - Jun 2024',
//                 color: 'purple'
//               }
//             ].map((project, index) => (
//               <div 
//                 key={project.title}
//                 className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-${project.color}-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-${project.color}-500/20 hover:border-${project.color}-500/50 card-3d group`}
//                 style={{ animation: `slideIn ${0.5 + index * 0.2}s ease-out` }}
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className={`text-xl font-bold text-${project.color}-400 group-hover:scale-105 transition-transform duration-300`}>
//                     {project.title}
//                   </h3>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink 
//                           className={`text-slate-400 hover:text-${project.color}-400 cursor-pointer group-hover:rotate-45 transition-all duration-300`} 
//                           size={24} 
//                         />
//                       </a>
//                 </div>
//                 <p className="text-slate-300 mb-6 leading-relaxed">
//                   {project.desc}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech) => (
//                     <span key={tech} className={`bg-slate-700/50 px-3 py-1 rounded-full text-xs text-${project.color}-300 hover:bg-slate-600/50 transition-colors duration-300 border border-${project.color}-500/30`}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-center">
//                   {project.link && (
//                     <a 
//                       href={project.link}
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className={`flex items-center space-x-2 text-${project.color}-400 hover:text-${project.color}-300 transition-all duration-300 transform hover:translate-x-2`}
//                     >
//                       <Globe size={18} />
//                       <span>Live Demo</span>
//                     </a>
//                   )}
//                   <span className="text-slate-400 text-sm">{project.date}</span>
//                 </div>
//                 <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//      <AIFitnessSection></AIFitnessSection>

//       {/* Education Section with timeline */}
//       <section id="education" className="py-28 px-6 bg-slate-900/30 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Education
//             </span>
//           </h2>

//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 border border-cyan-500/20 card-3d">
//               <div className="flex items-start justify-between flex-wrap gap-4">
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-cyan-400 mb-3 hover:scale-105 transition-transform duration-300 inline-block">
//                     Bachelor of Technology - Computer Science Engineering
//                   </h3>
//                   <p className="text-xl text-white mb-2">Dayananda Sagar University</p>
//                   <p className="text-slate-300 mb-4">Bengaluru, India</p>
//                   <div className="flex items-center space-x-4 flex-wrap gap-2">
//                     <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
//                       CGPA: 8.23
//                     </span>
//                     <span className="text-slate-400 flex items-center gap-2">
//                       <Calendar size={18} />
//                       July 2022 - Present
//                     </span>
//                   </div>
//                 </div>
//                 <GraduationCap className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={48} />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d">
//                 <h3 className="text-xl font-bold text-blue-400 mb-3">Senior Secondary (XII)</h3>
//                 <p className="text-white mb-2">Sishu Pathshala Higher Secondary School</p>
//                 <p className="text-slate-300 mb-4">Dhubri, Assam</p>
//                 <div className="flex items-center space-x-4 flex-wrap gap-2">
//                   <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
//                     85.2%
//                   </span>
//                   <span className="text-slate-400">Mar 2019 - Apr 2021</span>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 border border-purple-500/20 card-3d">
//                 <h3 className="text-xl font-bold text-purple-400 mb-3">Secondary (X)</h3>
//                 <p className="text-white mb-2">Happy Convent School</p>
//                 <p className="text-slate-300 mb-4">Dhubri, Assam</p>
//                 <div className="flex items-center space-x-4 flex-wrap gap-2">
//                   <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30 hover:scale-110 transition-transform duration-300">
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
//       {/* <section id="experience" className="py-32 px-6 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Work Experience
//             </span>
//           </h2>

//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 border border-cyan-500/20 card-3d group">
//               <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
//                     Web Development Intern
//                   </h3>
//                   <p className="text-xl text-white mb-2">Internpe</p>
//                   <p className="text-slate-400 mb-4">September 2024 - October 2024</p>
//                 </div>
//                 <Briefcase className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
//               </div>
//               <ul className="space-y-3 text-slate-300">
//                 <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
//                   <span>Developed and optimized projects using HTML, CSS, JavaScript and Python</span>
//                 </li>
//                 <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
//                   <span>Resolved coding challenges and implemented efficient algorithms to improve performance</span>
//                 </li>
//                 <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                   <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
//                   <span>Collaborated with team members to debug, review, and deploy code within deadlines</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 border border-blue-500/20 card-3d group">
//               <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
//                     Front-end Developer Intern
//                   </h3>
//                   <p className="text-xl text-white mb-2">OctaNet Services Pvt Ltd</p>
//                   <p className="text-slate-400 mb-4">August 2024 - September 2024</p>
//                 </div>
//                 <Monitor className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
//               </div>
//               <ul className="space-y-3 text-slate-300">
//                 <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                   <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={20} />
//                   <span>Created basic landing pages using HTML, CSS and JavaScript</span>
//                 </li>
//                 <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-all duration-300 transform hover:translate-x-2">
//                   <ChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={20} />
//                   <span>Learned about team collaboration and teamwork to improve communication skills</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Certificates Section */}
//       <section id="certificates" className="py-28 px-6 bg-slate-900/30 relative">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Certificates & Achievements
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-cyan-500/20 card-3d group">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:scale-105 transition-transform duration-300">
//                     ServiceNow Certified System Administrator
//                   </h3>
//                   <p className="text-slate-300 mb-6">March 2025 - May 2025</p>
//                   <a 
//                     href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:translate-x-2"
//                   >
//                     <ExternalLink size={18} />
//                     <span>View Certificate</span>
//                   </a>
//                 </div>
//                 <Award className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border border-blue-500/20 card-3d group">
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300">
//                     ServiceNow Certified Application Developer
//                   </h3>
//                   <p className="text-slate-300 mb-6">April 2025 - July 2025</p>
//                   <a 
//                     href="https://drive.google.com/drive/folders/1nnu7eW3dEaXglIG5A3MUSpCcmP5Yad8G" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:translate-x-2"
//                   >
//                     <ExternalLink size={18} />
//                     <span>View Certificate</span>
//                   </a>
//                 </div>
//                 <Award className="text-blue-400 group-hover:rotate-12 transition-transform duration-500" size={40} />
//               </div>
//             </div>
//           </div>

//           <div className="mt-16 text-center">
//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-10 max-w-2xl mx-auto border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 card-3d">
//               <h3 className="text-3xl font-bold text-purple-400 mb-8">Languages</h3>
//               <div className="grid grid-cols-2 gap-8">
//                 <div className="text-center p-6 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110">
//                   <h4 className="text-xl font-semibold text-white mb-3">English</h4>
//                   <p className="text-slate-300">Full Proficiency</p>
//                 </div>
//                 <div className="text-center p-6 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110">
//                   <h4 className="text-xl font-semibold text-white mb-3">Hindi</h4>
//                   <p className="text-slate-300">Full Proficiency</p>
//                 </div> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with enhanced form */}
//       <section id="contact" className="py-28 px-6 relative">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-5xl font-bold text-center mb-20">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform duration-300">
//               Get In Touch
//             </span>
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-3xl font-bold mb-6 text-white">Let's Connect!</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed mb-6">
//                   I'm always open to discussing new opportunities, interesting projects, 
//                   or just having a chat about technology. Feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4 p-5 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 border border-cyan-500/20 hover:border-cyan-500/50 group">
//                   <Mail className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
//                   <div>
//                     <p className="text-white font-semibold">Email</p>
//                     <a href="mailto:rishabh134we@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
//                       rishabh134we@gmail.com
//                     </a>
//                   </div>
//                 </div>

                

//                 {/* <div className="flex items-center space-x-4 p-5 bg-slate-800/50 backdrop-blur rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 border border-cyan-500/20 hover:border-cyan-500/50 group">
//                   <MapPin className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" size={28} />
//                   <div>
//                     <p className="text-white font-semibold">Location</p>
//                     <p className="text-slate-300">Bengaluru, India</p>
//                   </div>
//                 </div> */}

//                 {/* <div className="flex space-x-6 pt-4">
//                   <a 
//                     href="https://github.com/RishabhGupta19" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-500/50"
//                   >
//                     <Github size={28} />
//                   </a>
//                   <a 
//                     href="https://linkedin.com/in/rishabh-gupta-b8832b311" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-500/50"
//                   >
//                     <Linkedin size={28} />
//                   </a>
//                 </div> */}
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 card-3d">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-white font-semibold mb-2 flex items-center gap-2">
//                     <User size={18} className="text-cyan-400" />
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300"
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-white font-semibold mb-2 flex items-center gap-2">
//                     <Mail size={18} className="text-cyan-400" />
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-white font-semibold mb-2 flex items-center gap-2">
//                     <Send size={18} className="text-cyan-400" />
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     rows={5}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-slate-400 resize-none transition-all duration-300"
//                     placeholder="Your message here..."
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                       <span>Sending...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>

//                 {submitMessage && (
//                   <div className={`text-center p-4 rounded-lg border ${
//                     submitMessage.includes('success') 
//                       ? 'bg-green-500/20 text-green-400 border-green-500/50' 
//                       : 'bg-red-500/20 text-red-400 border-red-500/50'
//                   } animate-pulse`}>
//                     {submitMessage}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer with gradient */}
//       <footer className="bg-slate-900/80 backdrop-blur border-t border-cyan-500/20 py-10 px-6 relative">
//         <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <p className="text-slate-400 mb-6 text-lg">
//             &copy; 2025 Rishabh Gupta. Built with React, Node.js, and passion for clean code.
//           </p>
//           <div className="flex justify-center space-x-8">
//             <a href="mailto:rishabh134we@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
//               <Mail size={24} />
//             </a>
//             <a href="https://github.com/RishabhGupta19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
//               <Github size={24} />
//             </a>
//             <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>
//       </footer>
//      <PortfolioAIChatbot/>
//     </div>
//   );
// };

// export default Portfolio;




import profilePic from '../Profile.jpg';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaDocker,FaBootstrap } from "react-icons/fa";
import { SiExpress, SiEjs, SiMongodb, SiMysql, SiC,SiTailwindcss } from "react-icons/si";
import AIFitnessSection from './AIFitneddSection.jsx';
import PortfolioAIChatbot from './AI';
import Typewriter from './typewriter.jsx';

//Latest Code 
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Star, Calendar, Monitor, Globe, Zap, Terminal, ChevronDown, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [scrollY, setScrollY] = useState(0);

  // Icon mapping
  const icons = {
    React: <FaReact className="inline text-cyan-400 mr-2 text-xl" />,
    "React.js": <FaReact className="inline text-cyan-400 mr-2 text-xl" />,
    HTML5: <FaHtml5 className="inline text-orange-500 mr-2 text-xl" />,
    CSS3: <FaCss3Alt className="inline text-blue-500 mr-2 text-xl" />,
    JavaScript: <FaJs className="inline text-yellow-400 mr-2 text-xl" />,
    EJS: <SiEjs className="inline text-green-400 mr-2 text-xl" />,
    "Node.js": <FaNodeJs className="inline text-green-500 mr-2 text-xl" />,
    "Express.js": <SiExpress className="inline text-gray-300 mr-2 text-xl" />,
    Java: <FaJava className="inline text-red-500 mr-2 text-xl" />,
    Python: <FaPython className="inline text-yellow-400 mr-2 text-xl" />,
    C: <SiC className="inline text-blue-400 mr-2 text-xl" />,
    MongoDB: <SiMongodb className="inline text-green-500 mr-2 text-xl" />,
    MySQL: <SiMysql className="inline text-blue-500 mr-2 text-xl" />,
    Git: <FaGitAlt className="inline text-red-500 mr-2 text-xl" />,
    AWS: <FaAws className="inline text-orange-500 mr-2 text-xl" />,
    Docker: <FaDocker className="inline text-blue-400 mr-2 text-xl" />,
    Tailwind: <SiTailwindcss className="inline text-sky-400 mr-2 text-xl" />,
    Bootstrap: <FaBootstrap className="inline text-purple-500 mr-2 text-xl" />,
  };

  const sections = ['home', 'about', 'skills', 'projects', 'ai-fitness', 'education', 'certificates', 'contact'];

  // Scroll Tracking for Active Section & Parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Visitor Tracking
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('https://portfolio-backend-yyxv.onrender.com/api/track-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userAgent: navigator.userAgent, referrer: document.referrer || '', page: 'home' })
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };
    trackVisit();
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
        body: JSON.stringify(formData),
        
      });
     
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try email directly.');
       console.log(formData);
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };
  return (
    <div className="min-h-screen bg-[#050914] text-slate-200 overflow-x-hidden relative selection:bg-cyan-500/30 font-sans">
      
      {/* Modern Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif; }
        
        .glass-nav {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.03);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .neon-glow {
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.2), 0 0 20px rgba(34, 211, 238, 0.1);
        }
        
        /* Modern Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* 1. Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* 2. Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl z-50 transition-all duration-300">
        <div className="glass-nav rounded-full px-6 py-3 shadow-2xl shadow-cyan-900/10 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mr-8 tracking-tight">
            RG.
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.filter(s => s !== 'home').map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 relative group ${
                  activeSection === section ? 'text-white bg-slate-800/50' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="capitalize z-10 relative">{section.replace('-', ' ')}</span>
                {activeSection === section && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <div className="text-xl">✕</div> : <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full glass-nav rounded-2xl p-4 md:hidden flex flex-col space-y-2 animate-in fade-in slide-in-from-top-5">
             {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-xl transition-colors ${
                    activeSection === section ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
          </div>
        )}
      </nav>

      {/* 3. Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          
          {/* Available for Work Badge - Moved to Top Right of Hero Container */}
          <div className="absolute top-10 right-0 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-emerald-500/30 text-emerald-400 text-xs font-medium animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for immediate joining
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left z-10">
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hello, I'm <br/>
              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Rishabh Gupta
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-slate-400 font-light flex items-center justify-center md:justify-start gap-3 h-12">
               I build <span className="text-slate-200 font-medium">
                <Typewriter texts={["Scalable Web Apps", "MERN Stack Solutions", "Smart Algorithms"]} />
               </span>
            </div>

            <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              A Fourth-year B.Tech CSE student transforming complex problems into elegant, efficient, and modern digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4 mb-8">
              <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Let's Talk
              </button>
              <a href="https://drive.google.com/file/d/1bDD63FSN4eEZqbWLaJrqVWoNw_u7ZOjz/view?usp=sharing" target="_blank" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 hover:border-cyan-500 text-white hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 group">
                Download Resume <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>

            {/* Stats Row - Moved here from Profile Picture */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 border-t border-slate-800/50 pt-6">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Code size={20}/></div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Stack</p>
                    <p className="font-bold text-white">MERN Expert</p>
                  </div>
               </div>
               <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Database size={20}/></div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Portfolio</p>
                    <p className="font-bold text-white">5+ Major Projects</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start pt-6 text-slate-500">
              <a href="https://github.com/RishabhGupta19" target="_blank" className="hover:text-white transition-colors hover:scale-110"><Github size={24}/></a>
              <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" className="hover:text-blue-400 transition-colors hover:scale-110"><Linkedin size={24}/></a>
              <a href="mailto:rishabh134we@gmail.com" className="hover:text-cyan-400 transition-colors hover:scale-110"><Mail size={24}/></a>
            </div>
          </div>

          {/* Image/Visual - Cleaned up */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-2 border-2 border-slate-700/50 backdrop-blur-sm bg-slate-900/30">
                <img 
                  src={profilePic} 
                  alt="Rishabh" 
                  className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
           <ChevronDown size={24} />
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
             <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 border-l-4 border-l-cyan-500 shadow-2xl">
             <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <p>
                    I am a passionate <span className="text-white font-semibold">Computer Science Engineer</span> completing my B.Tech at Dayananda Sagar University. My code isn't just about syntax; it's about solving real-world problems.
                  </p>
                  <p>
                    With specialized expertise in <span className="text-cyan-400">Full Stack Development</span>, I bridge the gap between elegant frontend interfaces and robust backend architectures. I thrive in environments that challenge my problem-solving skills and push the boundaries of what web technologies can achieve.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {['Problem Solver', 'Rapid Learner', 'Team Player', 'Creative Thinker'].map(trait => (
                       <span key={trait} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-cyan-500 transition-colors cursor-default">
                         {trait}
                       </span>
                     ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-slate-900/50 p-6 rounded-2xl text-center border border-slate-800 hover:border-cyan-500/50 transition-all group">
                      <GraduationCap className="mx-auto mb-3 text-cyan-500 group-hover:scale-110 transition-transform" size={32}/>
                      <h3 className="text-3xl font-bold text-white mb-1">8.23</h3>
                      <p className="text-sm text-slate-500">CGPA</p>
                   </div>
                   <div className="bg-slate-900/50 p-6 rounded-2xl text-center border border-slate-800 hover:border-purple-500/50 transition-all group">
                      <Terminal className="mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform" size={32}/>
                      <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                      <p className="text-sm text-slate-500">Repos</p>
                   </div>
                   <div className="col-span-full bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center justify-between px-8 hover:bg-slate-800 transition-colors">
                      <div className="text-left">
                        <div className="text-sm text-slate-500 mb-1">Location</div>
                        <div className="text-white font-medium flex items-center gap-2"><MapPin size={16} className="text-red-400"/> Bengaluru, India</div>
                      </div>
                      <Globe className="text-slate-600 opacity-20" size={48}/>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Skills Grid */}
      <section id="skills" className="py-24 px-6 relative z-10 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
             <p className="text-slate-400">Technologies I use to build the future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl"><Monitor className="text-cyan-400" size={24}/></div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'HTML5', 'CSS3', 'JavaScript', 'EJS','Tailwind','Bootstrap'].map(skill => (
                  <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                    {icons[skill]} <span className="text-sm text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl"><Server className="text-blue-400" size={24}/></div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'Java', 'Python', 'C'].map(skill => (
                  <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
                    {icons[skill]} <span className="text-sm text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl"><Database className="text-purple-400" size={24}/></div>
                <h3 className="text-xl font-bold">DevOps & DB</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'MySQL', 'Git', 'AWS', 'Docker'].map(skill => (
                  <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
                    {icons[skill]} <span className="text-sm text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
           <div className="mt-12 text-center">
            <p className="mb-6 text-sm font-semibold text-slate-200 uppercase tracking-widest flex justify-center items-center gap-2">
              <CheckCircle size={16} className="text-green-400" /> Advanced Proficiency & Implementations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400">
               {['RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Socket.io', 'FastAPI', 'RAG Pipeline Implementation'].map(t => (
                 <span key={t} className="text-sm px-4 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 cursor-default transition-all shadow-sm">{t}</span>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* -------------------- FIX IS HERE -------------------- */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-400">Some things I've built</p>
            </div>
            <a href="https://github.com/RishabhGupta19" target="_blank" className="hidden md:flex items-center gap-2 text-cyan-400 hover:underline mt-4 md:mt-0">
               View all repositories <ExternalLink size={16}/>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 title: 'Daily Drift',
                 desc: 'A robust blogging platform featuring full CRUD capabilities, JWT authentication, and a responsive design.',
                 tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
                 link: 'https://daily-drift.onrender.com/',
                 color: 'from-cyan-500 to-blue-500'
               },
               {
                 title: 'AI Interview Prep',
                 desc: 'AI-driven simulation using Gemini API & RAG to generate personalized interview questions based on resumes.',
                 tech: ['MERN', 'Gemini API', 'RAG', 'Tailwind'],
                 link: 'https://ai-interview-prep-bice-eight.vercel.app/',
                 color: 'from-blue-500 to-purple-500'
               },
               {
                 title: 'Secret Chat',
                 desc: 'Real-time peer-to-peer secret chat app. Messages are instant, private, and persist only locally.',
                 tech: ['React', 'Socket.IO', 'Node.js'],
                 link: 'https://secret-chatting-app.vercel.app/',
                 color: 'from-purple-500 to-pink-500'
               },
               {
                title: 'AI Learning Platform',
                desc: 'Multilingual learning tool with Assembly AI for speech recognition and real-time translation.',
                tech: ['React', 'Python', 'Assembly AI'],
                link: 'http://ai-powered-video-platform.netlify.app/',
                color: 'from-emerald-500 to-teal-500'
               },
               {
                title: 'Expense Tracker',
                desc: 'Full-stack finance tool with data visualization, categorization, and filtering.',
                tech: ['MERN', 'Chart.js', 'REST API'],
                link: 'https://personal-expense-tracker-rouge-seven.vercel.app/',
                color: 'from-orange-500 to-red-500'
               },
               {
                title: 'Hospital Management',
                desc: 'Doctor appointment booking system with automated scheduling logic.',
                tech: ['Python', 'Flask', 'MySQL'],
                link: 'https://github.com/RishabhGupta19/Doctor-appointment-System',
                color: 'from-indigo-500 to-blue-600'
               }
             ].map((project, i) => (
                <div key={i} className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
                   <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                   <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                         <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                         <div className="flex gap-3">
                            {project.link && <a href={project.link} target="_blank" className="text-slate-500 hover:text-white transition-colors"><ExternalLink size={18}/></a>}
                         </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map(t => (
                           <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 border border-slate-700">{t}</span>
                        ))}
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <AIFitnessSection/>

      {/* 7. Education & Certs - UPDATED WITH 10TH INFO */}
      <section id="education" className="py-24 px-6 relative z-10 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="text-cyan-400"/> Education</h3>
               <div className="border-l-2 border-slate-800 ml-3 space-y-10 pl-8 relative">
                  
                  {/* B.Tech */}
                  <div className="relative group">
                    <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-cyan-500 rounded-full text-cyan-500 group-hover:scale-110 transition-transform"><GraduationCap size={16}/></span>
                    <h4 className="text-lg font-bold text-white">B.Tech Computer Science</h4>
                    <p className="text-cyan-400 text-sm mb-1">Dayananda Sagar University</p>
                    <p className="text-slate-400 text-sm mb-2">2022 - Present</p>
                    <p className="text-slate-500 text-sm">CGPA: 8.23</p>
                  </div>

                  {/* 12th Grade */}
                  <div className="relative group">
                    <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors"><Briefcase size={16}/></span>
                    <h4 className="text-lg font-bold text-white">Higher Secondary (XII)</h4>
                    <p className="text-slate-400 text-sm">Sishu Pathshala School</p>
                    <p className="text-slate-400 text-sm mb-2">Dhubri, Assam</p>
                    <p className="text-slate-500 text-sm">Score: 85.2%</p>
                  </div>

                  {/* 10th Grade - ADDED */}
                  <div className="relative group">
                    <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-500 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors"><Briefcase size={16}/></span>
                    <h4 className="text-lg font-bold text-white">Secondary School (X)</h4>
                    <p className="text-slate-400 text-sm">Happy Convent School</p>
                    <p className="text-slate-400 text-sm mb-2">Dhubri, Assam</p>
                    <p className="text-slate-500 text-sm">Score: 86.2%</p>
                  </div>

               </div>
            </div>

            {/* Certifications Column */}
            <div id="certificates">
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Award className="text-purple-400"/> Certifications</h3>
               <div className="space-y-4">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors flex items-start gap-4">
                     <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400"><Award size={24}/></div>
                     <div>
                        <h4 className="font-bold text-white">ServiceNow Certified Administrator</h4>
                        <p className="text-slate-400 text-sm mb-2">March 2025 - May 2025</p>
                        <a href="www.google.com" className="text-xs text-cyan-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors flex items-start gap-4">
                     <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400"><Award size={24}/></div>
                     <div>
                        <h4 className="font-bold text-white">ServiceNow Application Developer</h4>
                        <p className="text-slate-400 text-sm mb-2">April 2025 - July 2025</p>
                        <a href="#" className="text-xs text-purple-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                     </div>
                  </div>
                   <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors flex items-start gap-4">
                     <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><Award size={24}/></div>
                     <div>
                        <h4 className="font-bold text-white">Deloitte | ServiceNow Hackathon </h4>
                        <p className="text-slate-400 text-sm mb-2">September 2025</p>
                        <a href="https://drive.google.com/file/d/1FrGzV1APPAkEkKLMGEGyxihISpRh1SF-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                     </div>
                  </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors flex items-start gap-4">
                     <div className="p-3 bg-green-900/20 rounded-lg text-green-400"><Award size={24}/></div>
                     <div>
                        <h4 className="font-bold text-white">AWS Academy Graduate - Cloud Foundations</h4>
                        <p className="text-slate-400 text-sm mb-2">November 2025</p>
                        <a href="https://drive.google.com/file/d/1cZf6TmX3LsGlRxyrqXshfVJZNwfSzyA9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs text-green-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
             <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                  <p className="text-cyan-100 mb-8">
                    Open for Full-time opportunities and Internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-cyan-50">
                        <Mail size={20}/> <span>rishabh134we@gmail.com</span>
                     </div>
                     <div className="flex items-center gap-3 text-cyan-50">
                        <MapPin size={20}/> <span>Bengaluru, India</span>
                     </div>
                  </div>
                </div>
                
                <div className="mt-12">
                   <p className="text-sm text-cyan-200 mb-3">Connect with me</p>
                   <div className="flex gap-4">
                      <a href="https://github.com/RishabhGupta19" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Github size={20}/></a>
                      <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20}/></a>
                   </div>
                </div>
             </div>

             <div className="p-10 bg-slate-900">
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="John"
                        required
                      />
                   </div>
                   <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                   </div>
                   <div>
                      <label  className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                      <textarea 
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                        placeholder="Hello there..."
                        required
                      ></textarea>
                   </div>
                   <button 
                     disabled={isSubmitting}
                     className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-cyan-50 transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                   >
                     {isSubmitting ? 'Sending...' : <>Send Message <Send size={18}/></>}
                   </button>
                   {submitMessage && (
                    <p className={`text-center text-sm ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                      {submitMessage}
                    </p>
                   )}
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm relative z-10 border-t border-slate-800/50">
        <p>&copy; 2025 Rishabh Gupta. Crafted with React & Tailwind.</p>
      </footer>
      
      <PortfolioAIChatbot/>
          <SpeedInsights/>
          <Analytics />
    </div>
  );
};

export default Portfolio;
