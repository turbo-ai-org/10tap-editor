const fs = require('fs');
const path = require('path');

// This script creates missing package.json files in @tiptap/pm subdirectories
// to fix Metro bundler issues

const tiptapPmPath = path.join(__dirname, '..', 'node_modules', '@tiptap', 'pm');

if (fs.existsSync(tiptapPmPath)) {
  const dirs = fs.readdirSync(tiptapPmPath);

  dirs.forEach(dir => {
    const dirPath = path.join(tiptapPmPath, dir);
    const packageJsonPath = path.join(dirPath, 'package.json');

    // Check if it's a directory and doesn't have package.json
    if (fs.statSync(dirPath).isDirectory() && !fs.existsSync(packageJsonPath)) {
      // Don't add package.json to dist directory
      if (dir !== 'dist') {
        const packageContent = {
          name: `@tiptap/pm/${dir}`,
          main: 'index.ts',
          private: true
        };

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageContent, null, 2));
        console.log(`Created package.json for @tiptap/pm/${dir}`);
      }
    }
  });

  console.log('Fixed @tiptap/pm package structure');
} else {
  console.log('@tiptap/pm not found, skipping fix');
}