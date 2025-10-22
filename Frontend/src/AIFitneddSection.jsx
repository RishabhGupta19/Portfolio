import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Award, GraduationCap, Briefcase, User, Send, Download, Star, Calendar, ChevronRight, Monitor, Globe, Rocket, Zap, Terminal, Sparkles, AlertCircle, TrendingUp, CheckCircle } from 'lucide-react';

const AIFitnessSection = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResults, setAiResults] = useState(null);

  const mySkills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'EJS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Java', 'Python', 'C'],
    database: ['MongoDB', 'MySQL'],
    tools: ['Git', 'AWS', 'Docker', 'Postman', 'RESTful APIs'],
    other: ['Data Structures', 'Algorithms', 'OOP', 'MERN Stack',"JWT","Socket.io","Agile Methodologies","Render","Vercel"]
  };

  const analyzeJobFit = async () => {
    setIsAnalyzing(true);
    
    try {
      // Replace with your Gemini API key
      const API_KEY = 'AIzaSyDVhVk8IuSARft3CRZe7i-hymM7ttIF0lc';
      
      const prompt = `You are an expert career counselor and technical recruiter. Analyze the job fit between the candidate's skills and the job description.

Candidate's Skills:
- Frontend: ${mySkills.frontend.join(', ')}
- Backend: ${mySkills.backend.join(', ')}
- Database: ${mySkills.database.join(', ')}
- Tools: ${mySkills.tools.join(', ')}
- Other: ${mySkills.other.join(', ')}

Job Description:
${jobDescription}

Provide a JSON response with the following structure (only return valid JSON, no markdown):
{
  "fitScore": <number between 0-100>,
  "matchedSkills": [<array of skills from candidate that match job requirements>],
  "missingSkills": [<array of skills required in job but candidate doesn't have>],
  "strengths": [<array of 3-4 key strengths that make candidate suitable>],
  "recommendations": [<array of 3-4 actionable recommendations to improve fit>]
}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        
        // Extract JSON from response
        let jsonStr = aiResponse;
        const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonStr = jsonMatch[1];
        } else {
          const objMatch = aiResponse.match(/\{[\s\S]*\}/);
          if (objMatch) {
            jsonStr = objMatch[0];
          }
        }
        
        const analysisResults = JSON.parse(jsonStr);
        setAiResults(analysisResults);
      } else {
        throw new Error('Invalid API response');
      }
      
    } catch (error) {
      console.error('Error analyzing job fit:', error);
      
      // Fallback to simple analysis if API fails
      const allSkills = [...mySkills.frontend, ...mySkills.backend, ...mySkills.database, ...mySkills.tools, ...mySkills.other];
      const jdLower = jobDescription.toLowerCase();
      
      const matchedSkills = allSkills.filter(skill => 
        jdLower.includes(skill.toLowerCase())
      );
      
      const missingSkills = ['TypeScript', 'Kubernetes', 'GraphQL'].filter(skill =>
        jdLower.includes(skill.toLowerCase())
      );
      
      const fitScore = matchedSkills.length > 0 
        ? Math.min(95, Math.round((matchedSkills.length / (matchedSkills.length + missingSkills.length)) * 100))
        : 60;
      
      setAiResults({
        fitScore,
        matchedSkills,
        missingSkills,
        strengths: [
          'Strong full-stack development experience with MERN',
          'Solid understanding of databases and backend architecture',
          'Hands-on project experience with deployment'
        ],
        recommendations: [
          'Consider adding TypeScript to your skillset',
          'Explore containerization with Kubernetes',
          'Build a project showcasing missing skills'
        ]
      });
    }
    
    setIsAnalyzing(false);
  };

  const getFitLevel = (score) => {
    if (score >= 90) return { text: 'Excellent Fit', color: 'text-green-400' };
    if (score >= 75) return { text: 'Great Fit', color: 'text-cyan-400' };
    if (score >= 60) return { text: 'Good Fit', color: 'text-blue-400' };
    return { text: 'Moderate Fit', color: 'text-yellow-400' };
  };

  return (
    <section id="ai-fitness" className="py-30 px-6 bg-slate-900/30 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-cyan-400 animate-pulse" size={40} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Fitness Test
            </h2>
            <Zap className="text-yellow-400" size={40} />
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
           Wondering how well my skills match the job? Just drop the job description below — let AI instantly reveal how fit I am for the role!
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 mb-8 shadow-2xl">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
          />
          
          <div className="mt-6 text-center">
            <button
              onClick={analyzeJobFit}
              disabled={!jobDescription.trim() || isAnalyzing}
              className="relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3 group"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing Fit...</span>
                </>
              ) : (
                <>
                  <Zap size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Analyze Fit</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {aiResults && (
          <div className="space-y-8">
            {/* Fit Score */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-cyan-400">Overall Fit Score</h3>
                <Star className="text-cyan-400" size={40} />
              </div>
              
              <div className="relative mb-6">
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-slate-700"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className={getFitLevel(aiResults.fitScore).color}
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - aiResults.fitScore / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">{aiResults.fitScore}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-2xl font-bold ${getFitLevel(aiResults.fitScore).color} mb-2`}>
                      {getFitLevel(aiResults.fitScore).text}
                    </div>
                    <p className="text-slate-300">Based on AI skill match analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Matched Skills */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-green-400" size={32} />
                <h3 className="text-2xl font-bold text-green-400">Matched Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {aiResults.matchedSkills.map((skill, i) => (
                  <span key={i} className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30 hover:scale-110 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            {aiResults.missingSkills.length > 0 && (
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="text-yellow-400" size={32} />
                  <h3 className="text-2xl font-bold text-yellow-400">Skills to Develop</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {aiResults.missingSkills.map((skill, i) => (
                    <span key={i} className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30 hover:scale-110 transition-transform duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Strengths */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold text-cyan-400">Key Strengths</h3>
              </div>
              <ul className="space-y-4">
                {aiResults.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            
          </div>
        )}
      </div>
    </section>
  );
};

export default AIFitnessSection;
