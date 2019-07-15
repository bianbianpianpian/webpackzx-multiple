{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import helloApp from './helloApp'
{{#router}}
import router from '../../router/hello'
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
  el: '#hello',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(helloApp)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { helloApp },
  template: '<helloApp/>'
  {{/if_eq}}
})
