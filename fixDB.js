require('dotenv').config();
const mongoose = require('mongoose');
const mongooseModel = mongoose.models.Media || mongoose.model('Media', new mongoose.Schema({}, {strict: false}));

const updates = [
  { page: 'INDUSTRIES', section: 'Education', oldTitle: 'Built Smarter', newTitle: 'Education Connects' },
  { page: 'INDUSTRIES', section: 'Education', oldTitle: 'Education Is an Ecosystem', newTitle: 'Education Is an Ecosystem', type: 'image' },
  { page: 'INDUSTRIES', section: 'Retail', oldTitle: 'Built Smarter', newTitle: 'The Modern Retail' },
  { page: 'INDUSTRIES', section: 'Retail', oldTitle: 'Retail Is More Than', newTitle: 'Operations Behind' },
  { page: 'INDUSTRIES', section: 'Retail', oldTitle: 'Connect Business Better Every Sale', newTitle: 'Foundation For Growth' },
  { page: 'INDUSTRIES', section: 'Agencies', oldTitle: 'Run Your Agency', newTitle: 'Connected Agency' },
  { page: 'INDUSTRIES', section: 'Agencies', oldTitle: 'Your Client, Projects', newTitle: 'Beyond Projects' },
  { page: 'INDUSTRIES', section: 'Agencies', oldTitle: 'Turn Project and Quotations', newTitle: 'Client Relationships' },
  { page: 'INDUSTRIES', section: 'Agencies', oldTitle: 'Turn Agency Data', newTitle: 'Financial Intelligence' }
];

async function fixDB() {
  await mongoose.connect(process.env.MONGODB_URI);
  for (const update of updates) {
    if (update.type) {
        await mongooseModel.updateOne(
          { page: update.page, section: update.section, title: update.oldTitle },
          { $set: { mediaType: update.type } }
        );
    } else {
        await mongooseModel.updateOne(
          { page: update.page, section: update.section, title: update.oldTitle },
          { $set: { title: update.newTitle } }
        );
    }
  }
  console.log('Database fixed');
  mongoose.disconnect();
}
fixDB();
