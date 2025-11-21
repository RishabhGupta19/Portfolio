


// new code 






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
// Import Resend instead of nodemailer
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy for Render deployment
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});


const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: 'Too many contact form submissions, please try again later.',
});

// Middleware
// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? [
//         'https://portfolio-amber-nine-22.vercel.app',
//         /^https:\/\/.*\.vercel\.app$/,
//         /^https:\/\/.*\.vercel\.com$/,
//         'http://localhost:3000',
//         'http://localhost:5174'
//       ]
//     : ['http://localhost:3000', 'http://localhost:5173'],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
//   optionsSuccessStatus: 200
// }));

app.use(cors({
  origin: [
    "http://localhost:5173",                // Explicitly allow Vite Localhost
    "http://localhost:3000",                // Allow standard React Localhost
    "https://portfolio-amber-nine-22.vercel.app", // Your Vercel Domain
    "https://portfolio-backend-yyxv.onrender.com" // Your Backend Domain (for self-pinging)
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 200
}));
app.options('*', cors());

app.use('/api/', limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxLength: 1000
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: String,
  userAgent: String
});

const Contact = mongoose.model('Contact', contactSchema);

//  Visitor tracking schema (optional)
const visitorSchema = new mongoose.Schema({
  ipAddress: String,
  userAgent: String,
  visitedAt: {
    type: Date,
    default: Date.now
  },
  referrer: String,
  page: String
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form submission using Resend
app.post('/api/contact', contactLimiter, async (req, res) => {
  console.log('=== CONTACT FORM SUBMISSION ===');
  console.log('Request body:', req.body);
  
  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'All fields are required',
        details: 'Name, email, and message must be provided'
      });
    }

    if (name.length > 100) {
      return res.status(400).json({ error: 'Name must be less than 100 characters' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message must be less than 1000 characters' });
    }

    console.log('Validation passed. Saving to database...');

    // Create contact record
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await newContact.save();
    console.log('Contact saved to database successfully');

    console.log('Sending notification email via Resend...');

    
    const submittedDate = new Date(newContact.submittedAt);
  const istDate = new Date(submittedDate.getTime() + (5.5 * 60 * 60 * 1000));
    const formattedDate = istDate.toISOString().replace('T', ' ').substring(0, 19);
    // Send notification email using Resend
    const notificationResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['rishabh134we@gmail.com'],
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Portfolio Contact</h1>
          </div>
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #333;">Contact Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          <p><strong>Submitted:</strong> ${formattedDate}</p>
            <h3 style="color: #333; margin-top: 30px;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    });

    console.log('Notification email sent:', notificationResult.data?.id);

    console.log('Sending auto-reply email...');

    // Send auto-reply using Resend
    const autoReplyResult = await resend.emails.send({
      from: 'RishabhGupta@rishabhs.xyz',
      //from : "onboarding@resend.dev",
      to: [email],
      subject: 'Thanks for reaching out! - Rishabh Gupta',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Your Message!</h1>
          </div>
          <div style="padding: 30px; background-color: #f8f9fa;">
            <p style="font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for reaching out through my portfolio! I've received your message and I'm excited to connect with you.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              I'll review your message and get back to you within 24-48 hours. In the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.
            </p>
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://github.com/RishabhGupta19" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #333; color: white; text-decoration: none; border-radius: 5px;">GitHub</a>
              <a href="https://linkedin.com/in/rishabh-gupta-b8832b311" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 5px;">LinkedIn</a>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Rishabh Gupta</strong><br>
              Full-Stack Developer
            </p>
          </div>
        </div>
      `
    });

    console.log('Auto-reply email sent:', autoReplyResult.data?.id);
    console.log('=== EMAIL SENDING COMPLETE ===');

    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!',
      timestamp: new Date().toISOString(),
      notificationId: notificationResult.data?.id,
      autoReplyId: autoReplyResult.data?.id
    });

  } catch (error) {
    console.error('=== CONTACT FORM ERROR ===');
    console.error('Error:', error);
    
    res.status(500).json({ 
      success: false,
      error: 'Failed to send message. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Visitor tracking endpoint (optional)

app.post('/api/track-visit', async (req, res) => {
  try {
    const visitor = new Visitor({
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      referrer: req.get('Referrer') || req.body.referrer,
      page: req.body.page || 'home'
    });

    await visitor.save();
    res.status(200);
  } catch (error) {
    console.error('Track visit error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({ 
    error: 'Something went wrong!',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

// 404 handler
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running');
});


app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
