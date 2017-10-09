<template>
  <div id="app">
    <headbar></headbar>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import headbar from './components/headbar'

export default {
  name: 'app',
  components: {
    headbar
  },
  computed: {
    ...mapState([
      'main'
    ])
  },
  head: {
    title () {
      return {
        inner: this.title
      }
    }
  },
  methods: {
    ...mapActions(['GET_POSTS', 'GET_INFO'])
  },
  mounted () {
    this.GET_POSTS()
    this.GET_INFO()
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style lang='scss'>
@import "./style/helpers/_mixins.scss";
@import "./style/helpers/_responsive.scss";
@import "./style/helpers/_reset.css";
@import "./assets/fonts/nimbus/styles.css";
@import "./style/_variables.scss";

#app {
  font-family: $sans-serif-stack;
  font-size: $font-size;
  line-height: $line-height;
  color: $black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: $white;
}
</style>
