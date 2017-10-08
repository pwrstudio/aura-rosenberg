<template>
  <div class="info">
    <p>{{msg}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'info',
  data () {
    return {
      msg: 'info'
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

.info {
  z-index: 2;
  position: fixed;
  bottom: 0;
  height: $line-height * 2;
  width: 100vw;
  background: $background-color;
  p {
    font-family: $sans-serif-stack;
    font-weight: 900;
  }
}
</style>
