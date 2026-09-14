const fs = require('fs');
const files = [
  { path: 'src/app/industries/e-commerce/EcommerceClient.jsx', prefix: 'ec' },
  { path: 'src/app/industries/education/EducationClient.jsx', prefix: 'edu' },
  { path: 'src/app/industries/retail/RetailClient.jsx', prefix: 'ret' },
  { path: 'src/app/industries/agency-consultancy/AgencyConsultancyClient.jsx', prefix: 'agcy' },
  { path: 'src/app/industries/healthcare/HealthcareClient.jsx', prefix: 'hc' }
];

files.forEach(({path, prefix}) => {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');

  // If it already has the ambient glow, skip processing it to prevent duplicates
  if (content.includes(`className="${prefix}-ambient-border-glow"`)) {
    console.log(`Skipping ${path} - already has glows`);
    return;
  }

  // Change -card to -glass-card
  const classRegex = new RegExp(`className="${prefix}-card"`, 'g');
  content = content.replace(classRegex, `className="${prefix}-glass-card"`);

  // Inject ambient border glow before title
  const titleRegex = new RegExp(`<div className="${prefix}-card-title"`, 'g');
  content = content.replace(titleRegex, `<div className="${prefix}-ambient-border-glow"></div>\n                  <div className="${prefix}-card-title"`);

  // Inject card glow after desc
  const descRegex = new RegExp(`(<div className="${prefix}-card-desc"[^>]*>.*?<\\/div>)`, 'g');
  content = content.replace(descRegex, `$1\n                  <div className="${prefix}-card-glow"></div>`);

  fs.writeFileSync(path, content);
  console.log(`Successfully updated ${path}`);
});
