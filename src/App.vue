<template>
  <div id="app" v-bind:class="{'is-mobile': isMobile}">
    <headbar></headbar>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import headbar from './components/headbar'
import MobileDetect from 'mobile-detect'

export default {
  name: 'app',
  components: {
    headbar
  },
  computed: {
    ...mapState(['main']),
    isMobile: {
      get: function() {
        let md = new MobileDetect(navigator.userAgent)
        return md.tablet() || md.mobile()
      }
    }
  },
  methods: {
    ...mapActions(['GET_POSTS', 'GET_INFO'])
    // reSizeMain() {
    //   document.getElementById('main').style.height = window.outerHeight + 'px'
    // }
  },
  mounted() {
    this.GET_POSTS()
    this.GET_INFO()
    // this.reSizeMain()
  }
}
</script>

<style lang='scss'>
@import './style/helpers/_mixins.scss';
@import './style/helpers/_responsive.scss';
@import './style/helpers/_reset.css';
@import './assets/fonts/serif-regular.css';
@import './assets/fonts/serif-bold.css';
@import './assets/fonts/serif-italic.css';
@import './style/_variables.scss';

html {
  height: 100%;
  // style="height: 100vh"
  overflow: hidden;
}

* {
  -webkit-overflow-scrolling: touch; /* iOS velocity scrolling */
}

body {
  background: $white;
  height: 100%;
  position: fixed;
}

em,
i {
  font-style: italic;
}

#app {
  font-family: $serif-stack;
  font-size: 15px;
  line-height: 20px;
  color: $black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
}

.main {
  position: fixed;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}

.works {
  z-index: 0;
  display: inline-flex;
  height: 100vh;
  overflow-y: hidden;
  .work {
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100%;
    img,
    video {
      height: 100%;
      width: auto;
    }
    .text {
      position: absolute;
      bottom: 0;
      height: 42px;
      line-height: 24px;
      padding: 4px 0 0 $margin-sides;
      background: rgba(255, 255, 255, 0.96);
      z-index: 3;
      color: $black;
      width: 100%;
      text-overflow: ellipsis;

      p {
        display: inline;
      }

      br {
        display: none;
      }

      @include screen-size('small') {
        font-size: $font-size-mob-s;
        line-height: $line-height-mob-s;
        //height: 100px;
        height: 3.5 * $line-height-mob-s;
      }
    }
  }
}

.is-mobile {
  .works {
    display: block;
    font-size: 0;
    height: 100%;
    left: 0;
    line-height: 0;
    overflow: auto;
    position: absolute;
    white-space: nowrap;

    .work {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      width: auto;

      .text {
        font-size: $font-size-mob-s;
        line-height: $line-height-mob-s;
        height: 3em !important;
      }
    }
  }
}

strong {
  color: $green;
  opacity: 0.7;
}

a {
  color: $green;
  text-decoration: none;
  &:active {
    color: $green;
  }
  &:visited {
    color: $green;
  }
  &:hover {
    color: $black;
    strong {
      color: $black;
    }
  }
}

.pseudo-link {
  color: $green;
  cursor: pointer;
  &:hover {
    color: $black;
  }
}
</style>
