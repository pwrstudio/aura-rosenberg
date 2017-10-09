<template>
  <div class="headbar">
      <p class="asterisk" @mouseenter="onM" @mouseleave="onL"><router-link :to="{name: 'home'}">*</router-link></p><p class="text" :class="{ more: showMore }">Aura Rosenberg<span class="bump"></span><router-link :to="{name: 'info'}">biography/bibliography/links</router-link></p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'headbar',
  data () {
    return {
      msg: 'headbar',
      showMore: false
    }
  },
  methods: {
    onM () {
      this.showMore = true
    },
    onL () {
      this.showMore = false
    }
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
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";
@import "../style/fonts/NimbusSansNo5TOT-Regular.css";

.headbar {
  font-weight: 500;
  z-index: 1;
  position: fixed;
  height: $line-height * 2;
  width: 100vw;
  background: transparent;
  a, p {
    width: auto;
    color: $green;
    text-decoration: none;
    &:active {
      color: $green;
    }
    &:visited {
      color: $green;
    }
  }
  a:hover {
    color: $black;
  }
  .asterisk {
    position: relative;
    font-size: $logo-size;
    line-height: $logo-line-height;
    margin-left: $line-height;
    // leading margins
    margin-top: 28px;
    margin-bottom: -100px;
    margin-left: 38px;
  }
  .text {
    position: relative;
    margin-top: 73px;
    margin-bottom: 0px;
    margin-left: 63px;
    display: none;
    &.more {
      display: inline-block;
    }
  }
  .bump {
    &:after {
      display: inline-block;
      content: '';
      width: 10px;
    }
  }
}
</style>
