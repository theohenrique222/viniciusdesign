import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import 'primeicons/primeicons.css'
import { Image } from 'primevue';
import Galleria from 'primevue/galleria';




document.documentElement.classList.remove('dark');

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        darkMode: false
    }
});

app.component('Button', Button);
app.component('Image', Image);
app.component('Galleria', Galleria);
app.mount('#app');