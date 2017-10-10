<template>
  <div class="works" v-if='singleWork[0]'>
    <div v-for="item in singleWork[0].acf.images" class="work">
      <img :src='item.image.sizes["pwr-large"]'>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'single',
  computed: {
    ...mapState([
      'main'
    ]),
    singleWork () {
      // Get the post that has a slug that is equal to the one in the router
      return this.main.posts.filter(e => e.slug === this.$route.params.slug)
    }
  },
  head: {
    title () {
      return {
        inner: this.title
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";

.works {
  z-index: 0;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
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
