const fs = require('fs');

const path = 'c:/Users/Akash/web-development/we dev projects/compony/oxavyn/src/app/students/internships/Internship.css';
let content = fs.readFileSync(path, 'utf8');

// Replace hex colors
// #7c3aed (purple) -> #10b981 (emerald)
content = content.replace(/#7c3aed/gi, '#10b981');
// #06b6d4 (cyan) -> #34d399 (mint)
content = content.replace(/#06b6d4/gi, '#34d399');
// #4f46e5 (indigo) -> #059669 (dark emerald)
content = content.replace(/#4f46e5/gi, '#059669');
// #0891b2 (dark cyan) -> #047857 (dark mint/emerald)
content = content.replace(/#0891b2/gi, '#047857');
// rgba(124, 58, 237 (purple rgb) -> rgba(16, 185, 129
content = content.replace(/124,\s*58,\s*237/g, '16, 185, 129');
// rgba(6, 182, 212 (cyan rgb) -> rgba(52, 211, 153
content = content.replace(/6,\s*182,\s*212/g, '52, 211, 153');
// rgba(244, 212, 255 (pink rgb) -> rgba(209, 250, 229
content = content.replace(/244,\s*212,\s*255/g, '209, 250, 229');

// Add the media placeholder classes if they don't exist
if (!content.includes('.card-media')) {
  content += `

/* Media Placeholder for Internship Cards */
.card-media {
  height: 180px;
  margin-bottom: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
}

.media-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(52, 211, 153, 0.1));
  border: 1px dashed rgba(16, 185, 129, 0.3);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #10b981;
  text-align: center;
  padding: 1rem;
}

.media-text {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
`;
}

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Internship.css to light green theme.');
