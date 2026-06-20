const fs = require('fs');
const path = require('path');

function removeDarkClasses(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Regex to match dark:something (including fractions like dark:bg-blue-900/30)
  const newContent = content.replace(/dark:[^\s"']+/g, '').replace(/ +/g, ' ').replace(/ \}/g, '}').replace(/ "/g, '"');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${filePath}`);
}

const files = [
  path.join(__dirname, 'src', 'app', 'page.js'),
  path.join(__dirname, 'src', 'components', 'Converter.jsx')
];

files.forEach(removeDarkClasses);
