<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'works',
  data () {
    return {
      msg: 'works'
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
</style>
