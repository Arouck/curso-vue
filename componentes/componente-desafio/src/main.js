import './plugins/vuetify';
import Vue from 'vue';

import App from './main/App.vue';

import NavigationBar from './components/NavigationBar.vue';
import Toolbar from './components/Toolbar.vue';
import Footer from './components/Footer.vue';

Vue.config.productionTip = false
Vue.component("NavigationBar", NavigationBar);
Vue.component("Toolbar", Toolbar);
Vue.component("Footer", Footer);

new Vue({
  render: h => h(App),
}).$mount('#app')
