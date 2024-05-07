import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head';

const app = createApp(App);

app.use(VueRecaptchaPlugin, {
  v2SiteKey: 'YOUR_V2_SITEKEY_HERE',
  v3SiteKey: 'YOUR_V3_SITEKEY_HERE',
});

app.mount('#app');
