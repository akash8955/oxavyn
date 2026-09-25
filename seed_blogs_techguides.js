require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const blogSchema = new mongoose.Schema({
  title: String,
  category: String,
  date: String,
  desc: String,
  content: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

const techGuideSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  readTime: String,
  author: String,
  image: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
const TechGuide = mongoose.models.TechGuide || mongoose.model('TechGuide', techGuideSchema);

const blogsData = [
  {
    title: "The Future of Digital Workspaces",
    category: "Design",
    date: "Sep 14, 2026",
    desc: "Exploring how luxury minimalist design combined with high-end modern tech is shaping the future of productivity and digital environments.",
    content: "The modern digital workspace is no longer just about utility; it's about an experience that fosters creativity and well-being. By integrating smart ambient lighting, ergonomic high-end furniture, and seamless multi-device synchronization, professionals can achieve a state of flow that was previously unattainable. \\n\\nFurthermore, the aesthetic shift towards dark modes, subtle glassmorphism, and rich gradient accents reduces cognitive load and eye strain. This evolution in design philosophy ensures that our most used tools are not only functional but also visually stunning, creating an environment where high-end technology feels entirely natural and intuitive.",
    image: "/images/blog/blog_card_1_1789406627686.jpg",
  },
  {
    title: "Abstract AI Visualizations",
    category: "Technology",
    date: "Sep 12, 2026",
    desc: "Diving deep into the elegant dark mode aesthetics of modern artificial intelligence networks and data visualization.",
    content: "Artificial Intelligence operates in realms that are often abstract and difficult to conceptualize. However, the latest trends in UI design are making neural networks visible through breathtaking data streams and glowing node structures. \\n\\nBy utilizing rich purple and blue color palettes against deep dark backgrounds, designers are translating complex algorithmic processes into elegant, digestible visual experiences. This not only aids in data comprehension for enterprise leaders but also establishes a premium, cutting-edge identity for software platforms operating at the frontier of machine learning.",
    image: "/images/blog/blog_card_2_1789406639946.jpg",
  },
  {
    title: "Sleek Mobile App Interfaces",
    category: "Innovation",
    date: "Sep 10, 2026",
    desc: "A premium look at floating UI elements and subtle glassmorphism in the latest dark mode application designs.",
    content: "The mobile app landscape is experiencing a renaissance in design, driven by the capabilities of modern OLED screens and advanced rendering engines. Floating UI elements that utilize subtle shadows and glassmorphic blur effects create a sense of depth and hierarchy that feels inherently premium.\\n\\nThese design choices aren't merely decorative; they guide the user's attention to critical interactive elements while providing a sleek, uncluttered experience. Rich gradients and micro-interactions ensure that every touchpoint feels responsive and alive, setting a new standard for luxury in digital products.",
    image: "/images/blog/blog_card_3_1789406652789.jpg",
  }
];

const techGuidesData = [
  {
    title: "Mastering Cloud Native Architecture",
    category: "Cloud Computing",
    description: "An in-depth guide to transitioning your monolithic applications to a highly scalable, resilient cloud-native infrastructure using Kubernetes and microservices.",
    readTime: "12 min read",
    author: "Elena Rodriguez",
    image: "/images/Banner_1.png",
    content: "Transitioning to a cloud-native architecture is critical for modern scalable apps. Kubernetes and microservices provide the necessary abstraction... \\n\\nThis guide covers the basics of Docker, container orchestration, and how to structure your microservices for resilience."
  },
  {
    title: "The Future of AI in Enterprise Security",
    category: "Artificial Intelligence",
    description: "Explore how machine learning models are revolutionizing threat detection, predictive analysis, and automated response systems for global enterprises.",
    readTime: "8 min read",
    author: "David Chen",
    image: "/images/Banner_2.png",
    content: "AI is reshaping how we detect and respond to threats. Machine learning models analyze vast amounts of log data to identify anomalies... \\n\\nPredictive analysis allows enterprises to stop breaches before they even occur."
  },
  {
    title: "Next-Gen Web Performance Optimization",
    category: "Web Development",
    description: "Discover ultra-luxury web performance techniques. Learn how to achieve sub-second load times while delivering heavy graphical assets and complex animations.",
    readTime: "15 min read",
    author: "Marcus Vance",
    image: "/images/Banner_4.png",
    content: "Web performance is no longer just about minifying CSS. It's about optimizing the critical rendering path and utilizing modern image formats like WebP... \\n\\nWe explore how to use Intersection Observers to lazy-load heavy graphical assets without sacrificing perceived performance."
  },
  {
    title: "Data Lakehouse: The Best of Both Worlds",
    category: "Data Engineering",
    description: "A comprehensive teardown of the data lakehouse paradigm, combining the flexibility of data lakes with the management and structure of traditional data warehouses.",
    readTime: "10 min read",
    author: "Sarah Jenkins",
    image: "/images/Banner_5.png",
    content: "Data Lakehouses offer the flexibility of a data lake with the ACID transactions of a data warehouse. This paradigm shift enables both BI and ML workloads to run on a single source of truth... \\n\\nLearn how Delta Lake and Apache Iceberg are powering the next generation of data architectures."
  }
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to DB');
  
  const existingBlogs = await Blog.countDocuments();
  if (existingBlogs === 0) {
    await Blog.insertMany(blogsData);
    console.log('Seeded blogs');
  } else {
    console.log('Blogs already exist');
  }

  const existingGuides = await TechGuide.countDocuments();
  if (existingGuides === 0) {
    await TechGuide.insertMany(techGuidesData);
    console.log('Seeded tech guides');
  } else {
    console.log('Tech guides already exist');
  }
  
  process.exit(0);
}

seed();
