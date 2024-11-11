import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.xello.ngtodo',
  appName: 'Xello Todo',
  webDir: 'dist/ng-todo/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
