import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'custom.tabs',
  appName: 'custom-tabs',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
