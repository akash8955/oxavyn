const fs = require('fs');
const file = 'src/app/industries/education/EducationClient.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace('title="Smarter Operations"', 'title="Education Is an Ecosystem"');
fs.writeFileSync(file, content);
console.log('Done');
