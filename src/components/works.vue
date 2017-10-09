<template>
  <div class="works">
    <div class="scroll" :style="scrollSize" v-images-loaded:on.always="resizeScroll">
      <!-- Nested for loops takes all images in a project as equals. Could allow for grouping? Not sure about descriptions yet -->
      <div v-for="(item, index) in main.posts" class="work">
        <img :src='item.acf.images[0].image.sizes["pwr-large"]' ref="workImg" :id="item.id"/>
        <div class="text" v-if="main.showMore" v-html="item.acf.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import imagesLoaded from 'vue-images-loaded'

export default {
  name: 'works',
  directives: {
    imagesLoaded
  },
  data () {
    return {
      msg: '',
      scrollSize: {
        // Initial width
        width: '0px'
      },
      windowWidth: window.innerWidth,
      imageWidths: []
    }
  },
  methods: {
    resizeScroll () {
      console.log('na!' + this.windowWidth)
      // sets the CSS value to computed property
      this.scrollSize.width = this.scrollWidth + 'px'
    }
  },
  computed: {
    ...mapState([
      'main'
    ]),
    scrollWidth () {
      // returns total width of all images added.
      // The initial sum value of 3 is used for some issues with the last image falling off. Not ideal (yet)
      return this.$refs.workImg.reduce((sum, img) => {
        let imgW = Math.ceil(img.width)
        console.log(this.imageWidths)
        return sum + imgW
      }, 3)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      // Not working yet
      window.addEventListener('resize', this.resizeScroll)
    })
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

.works {
  z-index: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  .scroll {
    width: 0;
  }
  .work {
    display: inline-block;
    img {
      height: 100vh;
      width: auto;
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
    }
  }
}

</style>
