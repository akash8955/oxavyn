const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const rootScripts = [
  'apply_exact_media.js', 'apply_media_rules.js', 'generate_media_structure.js',
  'get_headings.js', 'replace_cards.js', 'replace_cards_2.js', 'revert_hero_layouts.js',
  'revert_media.js', 'update_bg.js', 'update_media.js', 'update_media2.js',
  'update_media3.js', 'update_theme.js'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      if (fullPath.includes('admin') || fullPath.includes('api')) continue; // Skip admin and api
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace <ResponsiveVideo ... /> with <DynamicMedia ... />
      if (content.includes('ResponsiveVideo')) {
        content = content.replace(/<ResponsiveVideo/g, '<DynamicMedia');
        // change src= to fallbackSrc= for ResponsiveVideo
        // Actually, ResponsiveVideo uses `src=` in its usages: <ResponsiveVideo ... src="..." />
        // Let's regex replace it to fallbackSrc=
        content = content.replace(/<DynamicMedia([^>]+)src=/g, '<DynamicMedia$1fallbackSrc=');
        
        // Remove ResponsiveVideo import
        content = content.replace(/import\s+ResponsiveVideo\s+from\s+['"].*?ResponsiveVideo['"];?\n?/g, '');
        
        changed = true;
      }
      
      // Make sure DynamicMedia is imported if we just added it
      if (content.includes('<DynamicMedia') && !content.includes('DynamicMedia')) {
        // Find a good place to insert the import
        const match = content.match(/import\s+.*?;/g);
        if (match) {
          const lastImport = match[match.length - 1];
          content = content.replace(lastImport, lastImport + "\nimport DynamicMedia from '@/components/DynamicMedia';");
        } else {
          content = "import DynamicMedia from '@/components/DynamicMedia';\n" + content;
        }
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

console.log("Processing files...");
processDirectory(srcDir);

// Delete ResponsiveVideo.jsx
const rvPath = path.join(srcDir, 'components', 'ResponsiveVideo.jsx');
if (fs.existsSync(rvPath)) {
  fs.unlinkSync(rvPath);
  console.log("Deleted ResponsiveVideo.jsx");
}

// Delete root scripts
for (const script of rootScripts) {
  const scriptPath = path.join(__dirname, script);
  if (fs.existsSync(scriptPath)) {
    fs.unlinkSync(scriptPath);
    console.log(`Deleted ${script}`);
  }
}

console.log("Done.");
