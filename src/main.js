import './style.css';
import 'vant/lib/index.css'
import App from './App.vue';
import { createApp } from 'vue';
import { Field, CellGroup, Checkbox, CheckboxGroup } from 'vant';

const app = createApp(App);
app.use(Field);
app.use(CellGroup);
app.use(Checkbox);
app.use(CheckboxGroup);
app.mount('#app');