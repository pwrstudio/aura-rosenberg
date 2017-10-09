<template>
  <div class="headbar" :class="{ more: main.showMore }">
      <p class="asterisk" @click="SHOW_MORE"><router-link :to="{name: 'works'}">*</router-link></p><p class="text">Aura Rosenberg<span class="bump"></span><router-link to="about">biography/bibliography/links</router-link></p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'headbar',
  data () {
    return {
      msg: 'headbar'
    }
  },
  methods: {
    ...mapActions(['SHOW_MORE'])
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
  z-index: 9;
  position: fixed;
  height: $line-height * 2;
  width: 100vw;
  background: transparent;
  .text {
    display: none;
  }
  &.more {
    background: white;
    .text {
      display: inline-block;
    }
  }
  .asterisk {
    position: relative;
    font-size: $logo-size;
    line-height: $logo-line-height;
    margin-left: $line-height;
    // leading margins
    margin-top: 25px;
    margin-bottom: -97px;
    margin-left: $margin-sides;
  }
  .text {
    position: relative;
    margin-top: 70px;
    margin-bottom: 0px;
    margin-left: $margin-sides * 2.1;
  }
  .bump {
    &:after {
      display: inline-block;
      content: '';
      width: $margin-sides / 2;
    }
  }
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
}
</style>
