<template>
  <div id="hello">
    <div class="card">
      <h2 class="mb10">hello</h2>
    </div>
  </div>
</template>

<script>
// import { CONFIG } from '../services/config'
// import { fetch } from '../services/data.service'
export default {
  name: 'hello',
  data () {
    return {
      CONFIG_ROLE: window.CONFIG_ROLE
    }
  },
  methods: {
  },
  created: function () {
  }
}
</script>
