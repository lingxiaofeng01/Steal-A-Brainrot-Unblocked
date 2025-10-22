const fs = require('fs');
const path = require('path');

const files = [
  'AboutUsPage.tsx',
  'BrainrotHookSwingPage.tsx',
  'CategoryPage.tsx',
  'ContactUsPage.tsx',
  'CopyrightPage.tsx',
  'CrazyCattle3DPage.tsx',
  'FixDaBrainrotPage.tsx',
  'ItalianBrainrotBabyClickerPage.tsx',
  'ItalianBrainrotClicker2Page.tsx',
  'MemoryBrainrotPage.tsx',
  'ObbyMySingingBrainrotPage.tsx',
  'PlantsVsBrainrotsPage.tsx',
  'PrivacyPolicyPage.tsx',
  'SearchPage.tsx',
  'StealBrainrotNewAnimalsPage.tsx',
  'StealBrainrotOnlinePage.tsx',
  'StealTheItalianBrainrotPage.tsx',
  'TagPage.tsx',
  'TermsOfUsePage.tsx'
];

files.forEach(file => {
  const filePath = path.join('src/pages', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if 'use client' is already there
  if (!content.startsWith("'use client';")) {
    // Add 'use client' at the beginning
    content = "'use client';\n\n" + content;
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Added use client to: ' + file);
});

console.log('All files updated!');

