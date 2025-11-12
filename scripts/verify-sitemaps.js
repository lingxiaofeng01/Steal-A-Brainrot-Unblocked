#!/usr/bin/env node
/**
 * Verify all sitemap files
 */

const fs = require('fs');
const path = require('path');

const sitemapFiles = [
  'public/sitemap.xml',
  'public/sitemap-index.xml',
  'public/sitemap-games.xml',
  'public/sitemap-tags.xml',
  'public/sitemap-images.xml'
];

console.log('🔍 Verifying sitemap files...\n');

let allValid = true;

sitemapFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${file} - NOT FOUND`);
    allValid = false;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').length;
  
  // Check if it's valid XML
  if (!content.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
    console.log(`❌ ${file} - Invalid XML header`);
    allValid = false;
    return;
  }
  
  // Count URLs
  const urlCount = (content.match(/<loc>/g) || []).length;
  
  // Check for common issues
  const issues = [];
  
  if (content.includes('localhost')) {
    issues.push('Contains localhost URLs');
  }
  
  if (content.includes('example.com') && !file.includes('images')) {
    issues.push('Contains example.com URLs');
  }
  
  // Check lastmod dates
  const lastmodDates = content.match(/<lastmod>(.*?)<\/lastmod>/g) || [];
  const invalidDates = lastmodDates.filter(date => {
    const dateStr = date.replace(/<\/?lastmod>/g, '');
    return isNaN(Date.parse(dateStr));
  });
  
  if (invalidDates.length > 0) {
    issues.push(`${invalidDates.length} invalid dates`);
  }
  
  // Print results
  if (issues.length > 0) {
    console.log(`⚠️  ${file}`);
    console.log(`   Lines: ${lines}, URLs: ${urlCount}`);
    console.log(`   Issues: ${issues.join(', ')}`);
    allValid = false;
  } else {
    console.log(`✅ ${file}`);
    console.log(`   Lines: ${lines}, URLs: ${urlCount}`);
  }
  
  console.log('');
});

if (allValid) {
  console.log('✅ All sitemap files are valid!\n');
  process.exit(0);
} else {
  console.log('❌ Some sitemap files have issues\n');
  process.exit(1);
}

