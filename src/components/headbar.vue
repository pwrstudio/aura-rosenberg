<template>
  <div class="headbar">
    <p>
      <span class="asterisk">*</span>
    </p>
    <p>
      <span class="title">Aura Rosenberg</span><span class="options">biography/bibliography/links</span>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'headbar',
  data () {
    return {
      msg: 'headbar'
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
@import "../style/fonts/NimbusSansNo5TOT-Medium.css";

.headbar {
  z-index: 1;
  position: fixed;
  height: $line-height * 2;
  width: 100vw;
  background: $background-color;
  p {
    font-family: $sans-serif-stack;
    line-height: $line-height;
    background-color: yellow;
    position: relative;
    font-weight: 900;
    color: $green;
    display: inline-block;
    margin: 0;
    span {
      display: inline-block;
      // margin-top: -20px;
      &:after {
        content: '';
        display: inline-block;
        width: 4px;
      }
    }
    .asterisk {
      font-size: $logo-size;
      line-height: $logo-line-height;
    }
  }
}
</style>
