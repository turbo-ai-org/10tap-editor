const fs = require('fs');
const path = require('path');

// This script takes the editor html file and places it into a ts variable
// so that it can be imported without the babel-plugin-inline-import plugin
const htmlPath = process.argv[2];
const htmlDir = path.join(htmlPath, '../');
const editorTsPath = process.argv[3] || path.join(htmlDir, 'editorHtml.ts');

const createContent = (html) => {
  // Escape backslashes first, then backticks and dollar signs
  html = html.replace(/\\/g, '\\\\').replace(/([`$])/g, '\\$1');
  return (
    '/* eslint-disable */\n' +
    'export const editorHtml = `\n' +
    html +
    "\n`"
  );
};

const build = async () => {
  try {
    const editorHtml = fs.readFileSync(htmlPath, 'utf8');
    const editorTs = createContent(editorHtml);
    fs.writeFileSync(editorTsPath, editorTs);
    console.log('Built Editor!');
  } catch (error) {
    console.error('Error building editor', error);
  }
};

build();
