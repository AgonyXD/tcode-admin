/**
 * JavaScript dependencies
 */

window._ = require('lodash');
window.axios = require('axios');

/**
 * Ajax config
 */

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Vue application instance
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'
import './assets/icon.css'
locale.use(lang)

// app components
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAxios, window.axios)

// disable message
Vue.config.productionTip = false

// routes
import routes from './routes'
Vue.router = new VueRouter({
  routes
})

// vue auth
Vue.use(VueAuth, {
      auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
      http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
      router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
      rolesVar: 'type',
			loginData: {url: 'login'},
			logoutData: {url: 'logout'},
      fetchData: {url: 'frontend/user'},
      refreshData: {enabled: false},
});

// init
var component = require('./views/App.vue');
component.router = Vue.router;
new Vue(component).$mount('#app');
