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
  overflow: hidden;
}

.hide-scroll {
  // register elements to hide here
  // then apply the inner mixin to the el itself
  // y is hide horizontal scroll bar, x is hide vertical scroll bar
  position: relative;
  &.main {
    @include hide-scroll-outer(100vw, 100vh, vert);
  }
  &.column {
    float: left;
    @include hide-scroll-outer(33.33vw, 100vh, hor);
  }
}

.works {
  z-index: 0;
  display: flex;
  width: 100vw;
  // Hide scroll stuff
  @include hide-scroll-inner(100vw, 100vh, vert);
  .work {
    display: inline-block;
    position: relative;
    img {
      height: 100vh;
    }
    .text {
      position: absolute;
      bottom: 0;
      height: $line-height * 2;
      line-height: $line-height * 2;
      padding: 2px 0 0 $margin-sides;
      background: $background-color;
      z-index: 3;
      color: $green;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      a {
        color: $grey;
      }
    }
  }
}
</style>
