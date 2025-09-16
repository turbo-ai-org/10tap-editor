const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(command) {
  execSync(command, { stdio: 'inherit' });
}

const repoRoot = path.join(__dirname, '..');
const isTopLevelDevRepo = fs.existsSync(path.join(repoRoot, '.git'));

if (!isTopLevelDevRepo) {
  console.log(
    '[tentap-editor] Skipping prepare: installing as a dependency (prebuilt files should be used).'
  );
  process.exit(0);
}

console.log('[tentap-editor] Running prepare for local development...');

const bin = (name) =>
  path.join(
    repoRoot,
    'node_modules',
    '.bin',
    process.platform === 'win32' ? `${name}.cmd` : name
  );

run(`${bin('bob')} build`);
run(`${bin('rimraf')} lib-web`);
run(
  `${bin('vite')} build --config ${path.join(
    repoRoot,
    'src',
    'webEditorUtils',
    'vite.config.ts'
  )}`
);
run(`${bin('tsc')} --project ${path.join(repoRoot, 'src', 'webEditorUtils')}`);

console.log('[tentap-editor] Prepare completed.');

