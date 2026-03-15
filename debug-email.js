#!/usr/bin/env node

// Debug script to check Resend configuration
import { config } from 'dotenv';

// Load environment variables
config();

console.log('=== Resend Configuration Debug ===');
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? `${process.env.RESEND_API_KEY.substring(0, 8)}...` : 'NOT SET');
console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL || 'NOT SET');
console.log('RESEND_TO_EMAIL:', process.env.RESEND_TO_EMAIL || 'NOT SET');

// Test Resend API connection
if (process.env.RESEND_API_KEY) {
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log('\n=== Testing Resend API Connection ===');
    
    // Test API key validity by getting domains
    const { data, error } = await resend.domains.list();
    
    if (error) {
      console.error('❌ Resend API Error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
    } else {
      console.log('✅ Resend API connection successful');
      console.log('Verified domains:', data?.data?.map(d => d.name) || 'None');
    }
  } catch (err) {
    console.error('❌ Error initializing Resend:', err.message);
  }
} else {
  console.log('\n❌ RESEND_API_KEY not found - cannot test API connection');
}

console.log('\n=== Environment File Status ===');
import { readFileSync, existsSync } from 'fs';
if (existsSync('.env')) {
  console.log('✅ .env file exists');
  const envContent = readFileSync('.env', 'utf8');
  const hasApiKey = envContent.includes('RESEND_API_KEY=');
  const hasFromEmail = envContent.includes('RESEND_FROM_EMAIL=');
  const hasToEmail = envContent.includes('RESEND_TO_EMAIL=');
  
  console.log('RESEND_API_KEY in .env:', hasApiKey ? '✅' : '❌');
  console.log('RESEND_FROM_EMAIL in .env:', hasFromEmail ? '✅' : '❌');
  console.log('RESEND_TO_EMAIL in .env:', hasToEmail ? '✅' : '❌');
} else {
  console.log('❌ .env file does not exist');
}
