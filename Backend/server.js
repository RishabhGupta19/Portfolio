const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for API-only server
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Contact form specific rate limiting
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: 'Too many contact form submissions, please try again later.',
});

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://rishabh-portfolio-frontend.vercel.app',
        'https://your-custom-domain.com',
        /\.vercel\.app$/
      ]
    : ['http://localhost:3000', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));

// MongoDB connection (removed deprecated options)
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://rishabh134wf:Idontknow134we@cluster0.ndt6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

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

// Visitor tracking schema (optional)
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

// Nodemailer configuration
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to take our messages');
  }
});

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form submission
app.post('/api/contact', contactLimiter, async (req, res) => {
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

    // Create contact record
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await newContact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rishabh134we@gmail.com', // your email
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
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            
            <h3 style="color: #333; margin-top: 30px;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
              <p>IP Address: ${req.ip || req.connection.remoteAddress}</p>
              <p>User Agent: ${req.get('User-Agent')}</p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
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
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
              <p><strong>Your message:</strong></p>
              <div style="background: white; padding: 15px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ 
      message: 'Message sent successfully!',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error',
        details: Object.values(error.errors).map(e => e.message)
      });
    }

    res.status(500).json({ 
      error: 'Server error. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get contact messages (admin only - you can add authentication later)
app.get('/api/contacts', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-ipAddress -userAgent'); // Hide sensitive info in response

    const total = await Contact.countDocuments();
    
    res.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Track visitor (optional)
app.post('/api/track-visit', async (req, res) => {
  try {
    const visitor = new Visitor({
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      referrer: req.get('Referrer') || req.body.referrer,
      page: req.body.page || 'home'
    });

    await visitor.save();
    res.status(200).json({ message: 'Visit tracked' });
  } catch (error) {
    console.error('Track visit error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get basic stats (optional)
app.get('/api/stats', async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();
    const totalVisitors = await Visitor.countDocuments();
    const recentContacts = await Contact.find()
      .sort({ submittedAt: -1 })
      .limit(5)
      .select('name email submittedAt');

    res.json({
      totalContacts,
      totalVisitors,
      recentContacts
    });
  } catch (error) {
    console.error('Get stats error:', error);
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

// 404 handler - FIXED: Correct parameters (req, res) not (error, req, res)
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
