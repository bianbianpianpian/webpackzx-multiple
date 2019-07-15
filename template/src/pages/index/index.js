{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import indexApp from './indexApp'
{{#router}}
import router from '../../router'
{{/router}}

import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

import axios from 'axios'
Vue.prototype.$http = axios
import '../../../static/scss/style.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(indexApp)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { indexApp },
  template: '<indexApp/>'
  {{/if_eq}}
})
