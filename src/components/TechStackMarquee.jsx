import React from 'react';
import './TechStackMarquee.css';

const techItems = [
  'React', 'Next.js', 'Node.js', 'Express.js', 'JavaScript', 'TypeScript', 
  'Python', 'Django', 'PHP', 'Laravel', 'Angular', 'Vue.js', 'Tailwind CSS', 
  'HTML5', 'CSS3', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 
  'Docker', 'GitHub', 'REST APIs', 'GraphQL', 'OpenAI', 'GenAI', 
  'Machine Learning', 'Cloud Computing', 'Figma', 'WordPress', 'Flutter', 
  'React Native', 'Android Development', 'iOS Development', 'Kotlin', 'Swift', 
  'Java', 'Salesforce', 'Salesforce Apex', 'Salesforce LWC', 'Power Apps', 
  'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'CI/CD', 'Jenkins', 
  'Redis', 'Elasticsearch', 'TensorFlow', 'PyTorch'
];

const TechStackMarquee = () => {
  return (
    <section className="tech-marquee-section">
      <div className="tech-marquee-container">
        <div className="tech-marquee-track">
          {[...techItems, ...techItems].map((item, index) => (
            <div key={index} className="tech-pill">
              <span className="tech-star">✦</span> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
