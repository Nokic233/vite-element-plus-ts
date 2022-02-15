import { createApp } from 'vue';
import './assets/element/index.scss';
import ElementPlus from 'element-plus';
// element 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');
