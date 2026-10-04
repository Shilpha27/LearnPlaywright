import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,
    browserName: 'firefox',
    screenshot:"on",
    video:"retain-on-failure"
  
  },
  reporter:[["dot"],["html",{open:'always'}]]
});