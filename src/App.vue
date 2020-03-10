<template>
  <a-config-provider :locale="locale">
    <div id="app">
      123
      <!-- <router-link to="/">Home</router-link> -->
      <router-view></router-view>
      123
    </div>
  </a-config-provider>
</template>
  
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  // mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN
    }
  },
  mounted () {

  }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>