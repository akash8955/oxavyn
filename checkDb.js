const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://akashsinghshekhawat9_db_user:3O8LLDNvRYCfA9P8@cluster0.1peuify.mongodb.net";

const MediaSchema = new mongoose.Schema({
  page: String,
  section: String,
  title: String,
  mediaType: String,
  cloudinaryUrl: String,
  isActive: Boolean
});

const Media = mongoose.model('Media', MediaSchema);

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");
  const media = await Media.find({});
  console.log("All media:", JSON.stringify(media, null, 2));
  mongoose.disconnect();
}

main().catch(console.error);
