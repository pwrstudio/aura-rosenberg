<template>
  <div class="hide-scroll main">
    <!-- No content in outer -->
    <div class="works">
      <div v-for="(item, index) in main.posts" class="work">
        <img :src='item.acf.images[0].image.sizes["pwr-large"]' :id="item.id"/>
        <div class="text" v-if="main.showMore">
          <span v-html="item.title.rendered"></span>
          <!-- Show "more images" link if the post has multiple images -->
          <span v-if='item.acf.images.length > 1'>(<router-link :to='item.slug'>more images</router-link>)</span>
          <!-- Show "text" link if the post has a text field -->
          <span v-if='item.acf.text'>(<span @click='toggleTextbox(item.acf.text)' class='pseudo-link'>text</span>)</span>
        </div>
      </div>
      <div @click='toggleTextbox("")' v-if='textboxActive' id='textbox'>
        <div v-html='textContent'></div>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'works',
  data () {
    return {
      textContent: 'jsjsjsjs',
      textboxActive: false
    }
  },
  methods: {
    toggleTextbox (text) {
      this.textContent = text
      this.textboxActive = !this.textboxActive
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
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";

#textbox {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  cursor: pointer;
  div {
    @include hide-scroll;
    padding: 20px;
    background: $white;
    min-width: 400px;
    min-height: 200px;
    max-height: 80vh;
    max-width: 80vw;
  }
}

.pseudo-link {
  color: $grey;
  cursor: pointer;
}

</style>
