<template>
  <div class="works">
    <!-- <div class="scroll" :style="scrollSize" v-images-loaded:on.always="resizeScroll"> -->
      <div v-for="(item, index) in main.posts" class="work">
        <img :src='item.acf.images[0].image.sizes["pwr-large"]' :id="item.id"/>
        <div class="text" v-if="main.showMore">
          <span v-html="item.title.rendered"></span>
          <!-- Show "more images" link if the post has multiple images -->
          <span v-if='item.acf.images.length > 1'>(<router-link :to='item.slug'>more images</router-link>)</span>
          <!-- Show "text" link if the post has a text field -->
          <span v-if='item.acf.text'>(<router-link to=''>text</router-link>)</span>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'works',
  methods: {},
  computed: {
    ...mapState([
      'main'
    ])
  },
  mounted: function () {
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

// .works {
//   z-index: 0;
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   overflow-x: scroll;
//   overflow-y: hidden;
//   .scroll {
//     width: 0;
//   }
//   .work {
//     display: inline-block;
//     img {
//       height: 100vh;
//       width: auto;
//     }
//     .text {
//       position: absolute;
//       bottom: 0;
//       height: $line-height * 2;
//       line-height: $line-height * 2;
//       padding: 2px 0 0 $margin-sides;
//       background: $background-color;
//       z-index: 3;
//       color: $green;
//       width: 100%;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//     }
//   }
// }

.works {
  z-index: 0;
  // position: fixed;
  // width: 100vw;
  display: flex;
  height: 100vh;
  // overflow-x: scroll;
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
