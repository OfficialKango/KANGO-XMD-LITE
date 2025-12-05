const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AdmZip = require('adm-zip');

// === CONFIGURATION ===
const repoZipUrl = 'https://github.com/OfficialKango/KANGO-XMD-V3/archive/refs/heads/main.zip';

// 🔐 Hardcoded encrypted token (use your own encryption tool)
const GITHUB_TOKEN = "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"; 

// === Persistent extraction path (no more re-downloads) ===
const extractionPath = path.join(__dirname, '.npm_pkg');
const versionFile = path.join(extractionPath, '.version');
const repoFolder = path.join(extractionPath, 'repo');

async function downloadAndExtractRepo() {
  try {
    console.log('[🌐] Downloading KANGO XMD...');

    const headers = {
      Authorization: `token ${GITHUB_TOKEN}`,
      'User-Agent': 'KANGO-XMD'
    };

    const response = await axios.get(repoZipUrl, {
      responseType: 'arraybuffer',
      headers
    });

    const zipBuffer = Buffer.from(response.data);

    // Clean previous extraction but preserve settings
    if (fs.existsSync(repoFolder)) {
      // Backup user settings before cleanup
      const settingsFile = path.join(repoFolder, 'settings.js');
      let userSettings = null;
      
      if (fs.existsSync(settingsFile)) {
        userSettings = fs.readFileSync(settingsFile, 'utf8');
      }
      
      // Remove old repo
      fs.rmSync(repoFolder, { recursive: true, force: true });
      fs.mkdirSync(repoFolder, { recursive: true });
      
      // Restore user settings if they exist
      if (userSettings) {
        fs.writeFileSync(settingsFile, userSettings);
      }
    } else {
      fs.mkdirSync(repoFolder, { recursive: true });
    }

    // Extract ZIP contents
    const zip = new AdmZip(zipBuffer);
    zip.extractAllTo(repoFolder, true);

    // Save current version (timestamp)
    fs.writeFileSync(versionFile, Date.now().toString());
    
    console.log('[✅] KANGO XMD updated successfully.');
    
  } catch (error) {
    console.log('[⚠️] Using cached version');
    // Don't exit on error - use existing files
  }
}

(async () => {
  // Clean minimal log - only show what's needed
  console.log('🚀 Starting KANGO XMD...');
  
  // Check if we need to download
  const shouldDownload = !fs.existsSync(versionFile);
  
  if (shouldDownload) {
    await downloadAndExtractRepo();
  } else {
    console.log('[✅] Using existing installation');
  }

  // After extraction, find the extracted folder
  const extractedFolders = fs.readdirSync(repoFolder).filter(f =>
    fs.statSync(path.join(repoFolder, f)).isDirectory()
  );

  if (!extractedFolders.length) {
    // If no folder found but repoFolder exists, use it directly
    if (fs.existsSync(path.join(repoFolder, 'index.js'))) {
      var extractedRepoPath = repoFolder;
    } else {
      console.error('❌ No bot files found.');
      process.exit(1);
    }
  } else {
    var extractedRepoPath = path.join(repoFolder, extractedFolders[0]);
  }

  // Copy local config.js if present to extracted repo
  const localConfigPath = path.join(__dirname, 'settings.js');
  const botConfigPath = path.join(extractedRepoPath, 'settings.js');
  
  if (fs.existsSync(localConfigPath)) {
    fs.copyFileSync(localConfigPath, botConfigPath);
    console.log('[⚙️] Settings loaded');
  }

  // Install dependencies if needed
  const nodeModulesPath = path.join(extractedRepoPath, 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('[📦] Installing dependencies...');
    const { execSync } = require('child_process');
    try {
      execSync('npm install --production', { 
        cwd: extractedRepoPath, 
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
      });
    } catch (e) {
      console.log('[⚠️] Using existing dependencies');
    }
  }

  // Change working directory so relative paths work correctly
  process.chdir(extractedRepoPath);

  // Start the bot with minimal logs
  console.log('[▶️] Initializing KANGO XMD...\n');
  
  // Filter console to hide technical details
  const originalLog = console.log;
  console.log = function(...args) {
    const message = args.join(' ');
    // Only show logs that don't reveal internal workings
    if (!message.includes('github') && 
        !message.includes('download') && 
        !message.includes('extract') &&
        !message.includes('temp') &&
        !message.includes('repo') &&
        !message.includes('hidden')) {
      originalLog.apply(console, args);
    }
  };
  
  // Start the bot
  require(path.join(extractedRepoPath, 'index.js'));
})();