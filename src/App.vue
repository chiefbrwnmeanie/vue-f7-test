<template>
  <div id="app">
    <f7-app :params="f7params">
      <f7-view :main="true" url="/" :push-state=true push-state-separator="" :master-detail-breakpoint="800">
      </f7-view>
    </f7-app>
  </div>
</template>

<script>

import routes from './routes'
export default {
  name: 'app',
  data() {
    return {
      // app params
      f7params: {
        name: 'My App',
        id: 'com.myapp.test',
        // specify routes for app
        routes: routes
      },
      theme: 'auto'
    };
  },

}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
