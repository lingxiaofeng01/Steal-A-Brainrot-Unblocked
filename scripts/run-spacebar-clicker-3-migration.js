#!/usr/bin/env node
/**
 * Execute Spacebar Clicker 3 migration
 */

const fs = require('fs');
const path = require('path');

// Read migration file
const migrationPath = path.join(__dirname, '../supabase/migrations/20251025000002_add_spacebar_clicker_3.sql');
const migrationSQL = fs.readFileSync(migrationPath, 'utf-8');

console.log('📝 Migration SQL:');
console.log('================');
console.log(migrationSQL);
console.log('================');
console.log('\n✅ Migration file is ready to be executed in Supabase SQL Editor');
console.log('📍 File location:', migrationPath);
console.log('\n📋 Next steps:');
console.log('1. Open Supabase Dashboard: https://supabase.com/dashboard');
console.log('2. Navigate to SQL Editor');
console.log('3. Copy and paste the SQL above');
console.log('4. Click "Run" to execute the migration');

