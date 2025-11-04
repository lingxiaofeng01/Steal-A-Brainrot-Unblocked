#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/thumbnails/zombotron-re-boot.jpg');
const outputPath = path.join(__dirname, '../public/images/thumbnails/zombotron-re-boot.webp');

async function convertImage() {
  try {
    await sharp(inputPath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log('✅ Image converted successfully to WebP format');
    
    // Delete the original JPG file
    fs.unlinkSync(inputPath);
    console.log('✅ Original JPG file deleted');
  } catch (error) {
    console.error('❌ Error converting image:', error);
    process.exit(1);
  }
}

convertImage();

