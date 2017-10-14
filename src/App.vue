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
  methods: {
    ...mapActions(['GET_POSTS', 'GET_INFO'])
  },
  mounted () {
    this.GET_POSTS()
    this.GET_INFO()
  }
}
</script>

<style lang='scss'>
@import "./style/helpers/_mixins.scss";
@import "./style/helpers/_responsive.scss";
@import "./style/helpers/_reset.css";
@import "./assets/fonts/nimbus/styles.css";
@import "./style/_variables.scss";

body {
  background: $white;
  overflow: hidden;
  height: 100%;
  position: fixed;
  #app {
    font-family: $sans-serif-stack;
    font-size: $font-size;
    line-height: $line-height;
    color: $black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
}

.hide-scroll {
  // register elements to hide here
  // then apply the inner mixin to the el itself
  // y is hide horizontal scroll bar, x is hide vertical scroll bar
  position: relative;
  &.main {
    @include hide-scroll-outer(100vw, 100%, vert);
  }
  &.column {
    float: left;
    @include hide-scroll-outer(33.33vw, 100%, hor);
  }
}

.works {
  z-index: 0;
  display: flex;
  display: -webkit-flex; /* NEW */
  @include hide-scroll-inner(100vw, 100%, vert);
  .work {
    flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;
    flex-grow: 1;
    img {
      height: 100%;
      width: auto;
    }
    .text {
      position: absolute;
      bottom: 0;
      height: $line-height * 2;
      line-height: $line-height;
      padding: 6px 0 0 $margin-sides;
      background: $background-color;
      z-index: 3;
      color: $black;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      @include screen-size('small') {
        font-size: $font-size-mob-s;
        line-height: $line-height-mob-s;
      }
      a {
        color: $green;
        &:hover {
          color: $black;
        }
      }
    }
  }
}
</style>
