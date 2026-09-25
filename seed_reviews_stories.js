require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const studentReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  program: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  avatar: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const clientStorySchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  industry: { type: String, required: true },
  title: { type: String, required: true },
  metrics: [{ type: String }],
  contactName: { type: String },
  email: { type: String },
  description: { type: String, required: true },
  logo: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const StudentReview = mongoose.models.StudentReview || mongoose.model('StudentReview', studentReviewSchema);
const ClientStory = mongoose.models.ClientStory || mongoose.model('ClientStory', clientStorySchema);

const studentReviewsData = [
  { name: "Aarav Sharma", role: "Software Engineer Intern", program: "Internship Program", text: "The internship at Oxavyn completely transformed my understanding of enterprise software. The mentorship was unparalleled.", rating: 5, avatar: "AS", isApproved: true },
  { name: "Priya Patel", role: "Data Science Intern", program: "Internship Program", text: "Working with real-world datasets and cutting-edge AI models gave me the exact exposure I needed for my career.", rating: 5, avatar: "PP", isApproved: true },
  { name: "Rohan Gupta", role: "Product Design Intern", program: "Internship Program", text: "The focus on ultra-luxury design aesthetics taught me how to craft experiences, not just interfaces. A truly premium internship.", rating: 5, avatar: "RG", isApproved: true },
  { name: "Neha Singh", role: "Marketing Intern", program: "Internship Program", text: "I was given ownership of actual campaigns. The level of trust and the elite environment is something you won't find anywhere else.", rating: 4, avatar: "NS", isApproved: true },
  { name: "Kunal Verma", role: "Backend Intern", program: "Internship Program", text: "I learned more in 3 months here than in my entire degree. The engineering standards are incredibly high.", rating: 5, avatar: "KV", isApproved: true },
  
  { name: "Vikram Mehta", role: "Full Stack Developer", program: "Skill Enhancement", text: "The Skill Enhancement program upskilled me in React and Node.js. The curriculum is rigorous and perfectly aligned with industry needs.", rating: 5, avatar: "VM", isApproved: true },
  { name: "Anjali Desai", role: "UI/UX Designer", program: "Skill Enhancement", text: "Learning glassmorphism and modern web aesthetics from the best. My portfolio has never looked better.", rating: 5, avatar: "AD", isApproved: true },
  { name: "Karan Verma", role: "Cloud Architect", program: "Skill Enhancement", text: "The AWS certification track was phenomenal. I went from basics to deploying scalable infrastructure in weeks.", rating: 5, avatar: "KV", isApproved: true },
  { name: "Sneha Reddy", role: "Frontend Developer", program: "Skill Enhancement", text: "A fantastic deep dive into modern CSS and performance optimization. Highly recommended for professionals.", rating: 5, avatar: "SR", isApproved: true },
  { name: "Ishaan Ali", role: "DevOps Engineer", program: "Skill Enhancement", text: "The CI/CD pipelines and automation masterclass was exactly what I needed to get my promotion.", rating: 5, avatar: "IA", isApproved: true },

  { name: "Amit Kumar", role: "CS Student", program: "Foundational & Career", text: "This program laid the perfect foundation for my career. The concepts are taught with extreme clarity.", rating: 5, avatar: "AK", isApproved: true },
  { name: "Divya Sharma", role: "IT Graduate", program: "Foundational & Career", text: "I finally understand data structures and algorithms, all thanks to the brilliant mentors at Oxavyn.", rating: 4, avatar: "DS", isApproved: true },
  { name: "Rahul Jain", role: "Software Analyst", program: "Foundational & Career", text: "The career guidance and mock interviews helped me land my dream job. They really care about your success.", rating: 5, avatar: "RJ", isApproved: true },
  { name: "Pooja Mishra", role: "Tech Enthusiast", program: "Foundational & Career", text: "From zero to coding my first application. The Foundational course is exactly what beginners need.", rating: 5, avatar: "PM", isApproved: true },
  { name: "Tariq Khan", role: "BCA Student", program: "Foundational & Career", text: "The holistic approach to career building is what sets this apart. They don't just teach code, they build careers.", rating: 5, avatar: "TK", isApproved: true }
];

const clientStoriesData = [
  {
    clientName: "Nexus Global Holdings",
    industry: "Finance",
    title: "Revolutionizing Fintech Operations",
    description: "By implementing Oxavyn's bespoke AI solutions, Nexus Global reduced their risk assessment latency by 45%, driving an additional $12M in processed volume within the first quarter. Our ultra-luxury design team also revamped their internal dashboard, creating an interface their executives love.",
    logo: "NG",
    metrics: ["45% Faster", "$12M Revenue", "0 Downtime"],
    isApproved: true
  },
  {
    clientName: "Aura Luxury Retail",
    industry: "E-Commerce",
    title: "Elevating the Digital Storefront",
    description: "Oxavyn crafted a mesmerizing glassmorphism UI for Aura, leading to a 300% increase in user engagement and securing their position as the premiere online boutique. We integrated a cutting-edge CMS for flawless product management.",
    logo: "AL",
    metrics: ["300% Engagement", "Premium UI", "2x Conversions"],
    isApproved: true
  },
  {
    clientName: "HealthSync Providers",
    industry: "Healthcare",
    title: "Seamless Patient Data Integration",
    description: "Through advanced CRM automation and API integration, we enabled HealthSync to unify over 1 million patient records securely across 50 regional hospitals, all while strictly maintaining HIPAA compliance.",
    logo: "HS",
    metrics: ["1M+ Records", "HIPAA Compliant", "50 Hospitals"],
    isApproved: true
  },
  {
    clientName: "Vortex Logistics",
    industry: "Supply Chain",
    title: "AI-Powered Fleet Optimization",
    description: "Our machine learning models analyzed decades of transit data to optimize Vortex's global routes. The result is a robust software ecosystem that cut fuel costs by 18% annually and improved delivery times.",
    logo: "VL",
    metrics: ["18% Fuel Saved", "Global Reach", "Predictive AI"],
    isApproved: true
  }
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to DB');
  
  const existingReviews = await StudentReview.countDocuments();
  if (existingReviews === 0) {
    await StudentReview.insertMany(studentReviewsData);
    console.log('Seeded student reviews');
  } else {
    console.log('Student reviews already exist');
  }

  const existingStories = await ClientStory.countDocuments();
  if (existingStories === 0) {
    await ClientStory.insertMany(clientStoriesData);
    console.log('Seeded client stories');
  } else {
    console.log('Client stories already exist');
  }
  
  process.exit(0);
}

seed();
