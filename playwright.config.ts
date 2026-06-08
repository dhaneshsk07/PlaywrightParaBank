import { defineConfig } from '@playwright/test';
//import dotenv from 'dotenv';

//dotenv.config();

export default defineConfig({
  testDir: './tests',   // ✅ FIXED

  timeout: 30000,
  retries: 1,

  use: {
    //baseURL: process.env.BASE_URL || 'https://letcode.in/test', // safe fix
    headless: false,

      // 👇 Add this for make 2sec delay in steps
    launchOptions: {
      slowMo: 2000
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ]
});