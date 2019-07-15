<template>
	<div class="layout v-header">
		<Menu mode="horizontal" :theme="theme1" :active-name="activeName">
			<div class="layout-logo">系统名称2</div>
			<!-- <div class="layout-button">
				<Button>注销</Button>
			</div> -->
	        <div class="layout-nav">
			    <router-link to="/hello" class="navbar-brand">
				    <MenuItem name="1">
				        <Icon type="hello"></Icon>例hello
				    </MenuItem>
			    </router-link>
			</div>
		</Menu>
	</div>
</template>
<script>
export default {
  name: 'THeaderHello',
  data () {
    return {
      theme1: 'dark',
      activeName: this.$route.name,
      CONFIG_ROLE: window.CONFIG_ROLE
    }
  }
}
</script>