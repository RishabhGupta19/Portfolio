



// New code 




import React, { useState, useEffect, useMemo } from 'react';
import profilePic from '../Profile.jpg';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import { lazy, Suspense } from "react";
// const AIFitnessSection = lazy(() => import("./AIFitneddSection.jsx"));

import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaGitAlt, FaAws, FaDocker, FaBootstrap
} from "react-icons/fa";
import { SiExpress, SiEjs, SiMongodb, SiMysql, SiC, SiTailwindcss } from "react-icons/si";

// const AIFitnessSection = React.lazy(() => import("./AIFitneddSection.jsx"));
import AIFitnessSection from './AIFitneddSection.jsx';


import PortfolioAIChatbot from './AI';
import Typewriter from './typewriter.jsx';

import {
  Mail, MapPin, Github, Linkedin, ExternalLink, Code, Database,
  Server, Award, GraduationCap, Briefcase, Send, CheckCircle,
  ChevronDown, Terminal, Globe, Monitor
} from 'lucide-react';

const Portfolio = () => {
  // ---------- State ----------
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // ---------- Constants & Memoized Data ----------
  const sections = useMemo(() => ['home', 'about', 'skills', 'projects', 'ai-fitness', 'education', 'certificates', 'contact'], []);

  const icons = useMemo(() => ({
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
  }), []);

  const projectList = useMemo(() => ([
     {
      title: 'Ganesh Akhara Mandir Official Website',
      desc: 'Official website for Ganesh Akhara Mandir of my hometown featuring real-time visitor traffic, online accommodation booking, inquiry handling, and automated email workflows. Includes a secure admin dashboard to review, accept, or reject booking requests.',
      tech: ['Node.js', 'Express' , 'PostgreSQL' , 'Resend Email' , 'React' , 'Tailwind'],
      link: 'https://www.ganeshakhara.com/',
      color: 'from-cyan-500 to-orange-500'
    },
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
  ]), []);

  const skillBadges = useMemo(() => ([
    'RESTful APIs', 'Postman', 'Cloudinary', 'Vercel', 'Render', 'JWT', 'Socket.io', 'FastAPI', 'RAG Pipeline Implementation'
  ]), []);

  // ---------- Global CSS (reduced heavy effects; native smooth scroll) ----------
  const globalCss = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');

    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; }
    h1,h2,h3,h4,h5,h6 { font-family: 'Outfit', sans-serif; }

    /* subtle scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #020617; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
  `;

  // ---------- Optimized scroll listener (rAF throttled) ----------
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const checkY = window.scrollY + window.innerHeight / 3;

          for (const sec of sections) {
            const el = document.getElementById(sec);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = top + rect.height;

            if (checkY >= top && checkY < bottom) {
              if (activeSection !== sec) setActiveSection(sec);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection, sections]);

  // ---------- Contact form submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://portfolio-backend-3vyv.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitMessage('Error sending message. Please try email directly.');
      console.error(err);
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  // ---------- Scroll to section helper ----------
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView();
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // ---------- Memoized big JSX blocks to avoid frequent re-creation ----------
  const HeroSection = useMemo(() => (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="absolute top-10 right-0 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/40 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for immediate joining
        </div>

        {/* Text */}
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hello, I'm <br />
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

          <div className=" flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4 mb-8">
            <button onClick={() => scrollToSection('contact')} className=" cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Let's Talk
            </button>
            <a href="https://drive.google.com/file/d/1bDD63FSN4eEZqbWLaJrqVWoNw_u7ZOjz/view?usp=sharing" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 hover:border-cyan-500 text-white hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2">
              Download Resume <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>

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
            <a href="https://github.com/RishabhGupta19" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110"><Github size={24}/></a>
            <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110"><Linkedin size={24}/></a>
            <a href="mailto:rishabh134we@gmail.com" className="hover:text-cyan-400 transition-colors hover:scale-110"><Mail size={24}/></a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* soft glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-[30px] opacity-25 pointer-events-none"></div>

            <div className="relative w-full h-full rounded-full p-2 border-2 border-slate-700/40 bg-slate-900/20 overflow-hidden">
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
  ), []); // no deps - static

  const AboutSection = useMemo(() => (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-900/60 rounded-3xl p-8 md:p-12 border-l-2 border-l-cyan-500">
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
                  <span key={trait} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">{trait}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-6 rounded-2xl text-center border border-slate-800">
                <GraduationCap className="mx-auto mb-3 text-cyan-500" size={32}/>
                <h3 className="text-3xl font-bold text-white mb-1">8.23</h3>
                <p className="text-sm text-slate-500">CGPA</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl text-center border border-slate-800">
                <Terminal className="mx-auto mb-3 text-purple-500" size={32}/>
                <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                <p className="text-sm text-slate-500">Repos</p>
              </div>
              <div className="col-span-full bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center justify-between px-8">
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
  ), []);

  const SkillsSection = useMemo(() => (
    <section id="skills" className="py-24 px-6 relative z-10 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-400">Technologies I use to build the future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-xl"><Monitor className="text-cyan-400" size={24}/></div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React.js', 'HTML5', 'CSS3', 'JavaScript', 'EJS','Tailwind','Bootstrap'].map(skill => (
                <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
                  {icons[skill]} <span className="text-sm text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl"><Server className="text-blue-400" size={24}/></div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'Express.js', 'Java', 'Python', 'C'].map(skill => (
                <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
                  {icons[skill]} <span className="text-sm text-slate-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl"><Database className="text-purple-400" size={24}/></div>
              <h3 className="text-xl font-bold">DevOps & DB</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['MongoDB', 'MySQL', 'Git', 'AWS', 'Docker'].map(skill => (
                <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
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
            {skillBadges.map(t => (
              <span key={t} className="text-sm px-4 py-2 bg-slate-900 rounded-full border border-slate-800">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  ), [icons, skillBadges]);

  const ProjectsSection = useMemo(() => (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Featured Projects</h2>
            <p className="text-slate-400">Some things I've built</p>
          </div>
          <a href="https://github.com/RishabhGupta19" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-cyan-400 hover:underline mt-4 md:mt-0">
            View all repositories <ExternalLink size={16}/>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, i) => (
            <div key={i} className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><ExternalLink size={18}/></a>}
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
  ), [projectList]);


  const EducationSection = useMemo(() => (
    <section id="education" className="py-24 px-6 relative z-10 bg-slate-950/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="text-cyan-400"/> Education</h3>
            <div className="border-l-2 border-slate-800 ml-3 space-y-10 pl-8 relative">
              <div className="relative group">
                <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-cyan-500 rounded-full text-cyan-500"><GraduationCap size={16}/></span>
                <h4 className="text-lg font-bold text-white">B.Tech Computer Science</h4>
                <p className="text-cyan-400 text-sm mb-1">Dayananda Sagar University</p>
                <p className="text-slate-400 text-sm mb-2">2022 - Present</p>
                <p className="text-slate-500 text-sm">CGPA: 8.23</p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-500"><Briefcase size={16}/></span>
                <h4 className="text-lg font-bold text-white">Higher Secondary (XII)</h4>
                <p className="text-slate-400 text-sm">Sishu Pathshala School</p>
                <p className="text-slate-400 text-sm mb-2">Dhubri, Assam</p>
                <p className="text-slate-500 text-sm">Score: 85.2%</p>
              </div>

              <div className="relative group">
                <span className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-slate-700 rounded-full text-slate-500"><Briefcase size={16}/></span>
                <h4 className="text-lg font-bold text-white">Secondary School (X)</h4>
                <p className="text-slate-400 text-sm">Happy Convent School</p>
                <p className="text-slate-400 text-sm mb-2">Dhubri, Assam</p>
                <p className="text-slate-500 text-sm">Score: 86.2%</p>
              </div>
            </div>
          </div>

          <div id="certificates">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Award className="text-purple-400"/> Certifications</h3>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
                <div className="p-3 bg-cyan-900/20 rounded-lg text-cyan-400"><Award size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">ServiceNow Certified Administrator</h4>
                  <p className="text-slate-400 text-sm mb-2">March 2025 - May 2025</p>
                  <a href="https://drive.google.com/file/d/1sQsSxSnMXvTJgjJDPTEgOq7GPloul1Gf/view?usp=sharing" target="_blank" className="text-xs text-cyan-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400"><Award size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">ServiceNow Application Developer</h4>
                  <p className="text-slate-400 text-sm mb-2">April 2025 - July 2025</p>
                  <a href="https://drive.google.com/file/d/1DpqnoljcboRxGlh642apW2JoMRUyHIxb/view?usp=sharing" target="_blank" className="text-xs text-purple-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
                <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><Award size={24}/></div>
                <div>
                  <h4 className="font-bold text-white">Deloitte | ServiceNow Hackathon</h4>
                  <p className="text-slate-400 text-sm mb-2">September 2025</p>
                  <a href="https://drive.google.com/file/d/1FrGzV1APPAkEkKLMGEGyxihISpRh1SF-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline flex items-center gap-1">View Credential <ExternalLink size={10}/></a>
                </div>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
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
  ), []);

  const ContactSection = useMemo(() => (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto bg-slate-900/60 rounded-3xl overflow-hidden">
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
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Hello there..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" cursor-pointer w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-cyan-50 transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
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
  ), [formData, isSubmitting, submitMessage]);

  // ---------- Render ----------
  return (
    <div className="min-h-screen bg-[#050914] text-slate-200 overflow-x-hidden relative selection:bg-cyan-500/30 font-sans">
      <style>{globalCss}</style>

     {/* Optimized Grey Background (matches your previous style) */}
<div className="fixed inset-0 pointer-events-none overflow-hidden">

  {/* grey-blue soft gradient base */}
  <div className="absolute inset-0 bg-gradient-to-br 
      from-[#0a0d15] via-[#0d101a] to-[#0c0f17] 
      opacity-95">
  </div>

  {/* Blob 1 */}
  <div className="absolute top-0 -left-10 w-[380px] h-[380px] 
      bg-purple-400/15 rounded-full 
      blur-[90px] opacity-30">
  </div>

  {/* Blob 2 */}
  <div className="absolute top-0 -right-10 w-[380px] h-[380px] 
      bg-cyan-400/15 rounded-full 
      blur-[90px] opacity-30">
  </div>

  {/* Blob 3 */}
  <div className="absolute -bottom-10 left-24 w-[380px] h-[380px] 
      bg-blue-400/15 rounded-full 
      blur-[90px] opacity-30">
  </div>

  {/* very subtle grain (important for the grey look) */}
  <div className="absolute inset-0 
      bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
      opacity-[0.10]">
  </div>

</div>


      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl z-50 transition-all duration-300">
        <div className="rounded-full px-6 py-3 shadow-2xl shadow-cyan-900/6 flex justify-between items-center bg-slate-900/40 backdrop-blur-sm border border-slate-800/30">
          <button onClick={() => scrollToSection('home')} className=" cursor-pointer text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mr-8 tracking-tight">
            RG.
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {sections.filter(s => s !== 'home').map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={` cursor-pointer px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 relative group ${
                  activeSection === section ? 'text-white bg-slate-800/50' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="capitalize z-10 relative">{section.replace('-', ' ')}</span>
                {activeSection === section && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/8 to-blue-500/8 border border-cyan-500/12"></span>
                )}
              </button>
            ))}
          </div>

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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full rounded-2xl p-4 md:hidden bg-slate-900/70 backdrop-blur-sm border border-slate-800/30">
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

      {/* Sections (memoized blocks) */}
      {HeroSection}
      {AboutSection}
      {SkillsSection}
      {ProjectsSection}
       {/* <AIFitnessSection />  */}
      

      {EducationSection}
      {/* Certificates are in EducationSection via #certificates */}
      {ContactSection}

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

