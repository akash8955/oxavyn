const fs = require('fs');
const files = [
  { path: 'src/app/industries/education/EducationClient.jsx', prefix: 'edu' },
  { path: 'src/app/industries/retail/RetailClient.jsx', prefix: 'ret' },
  { path: 'src/app/industries/agency-consultancy/AgencyConsultancyClient.jsx', prefix: 'agcy' }
];

files.forEach(({path, prefix}) => {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');

  // Replace standard cards with glass cards
  // We look for: className="prefix-card" (with optional style tags)
  // and inject the ambient glow right after the motion.div opens

  // A regex to match the motion.div containing the plain card
  // <motion.div variants={fadeInUp} className="edu-card">
  // or <motion.div variants={fadeInUp} className="edu-card" style={{ padding: '1.5rem' }}>
  // We only match where className exactly equals prefix-card
  const cardRegex = new RegExp(`(<motion\\.div[^>]*className="${prefix}-card"[^>]*>)\\s*(<div className="${prefix}-card-title")`, 'g');
  
  content = content.replace(cardRegex, `$1\n                <div className="${prefix}-ambient-border-glow"></div>\n                $2`);
  
  const classRegex = new RegExp(`className="${prefix}-card"`, 'g');
  content = content.replace(classRegex, `className="${prefix}-glass-card"`);

  // Now inject the card-glow at the end of the card, right before </motion.div>
  // BUT we only want to do this for the newly changed ones?
  // Actually, we can just match all card-desc divs that are followed by </motion.div> 
  // without a card-glow between them.
  const descRegex = new RegExp(`(<div className="${prefix}-card-desc"[^>]*>.*?<\\/div>)\\s*<\\/motion\\.div>`, 'gs');
  content = content.replace(descRegex, `$1\n                <div className="${prefix}-card-glow"></div>\n              </motion.div>`);

  fs.writeFileSync(path, content);
  console.log(`Successfully updated ${path}`);
});
