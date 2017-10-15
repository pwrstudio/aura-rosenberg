<template>
  <div class="hide-scroll main">
    <!-- No content in outer -->
    <div class="works">
      <div v-for="item in main.posts" class="work">
        <!-- If there is just one image OR more than one but none selected for frontpage => show first image -->
        <img v-if='(item.acf.images.length === 1 && item.acf.images[0].image.sizes) || (item.acf.images.length > 0 && !item.acf.images.find((e) => e.show_on_frontpage))' :src='item.acf.images[0].image.sizes["pwr-medium"]'>
        <!-- Else-If there are multiple images => output all that are marked -->
        <img v-if='item.acf.images.length > 1' v-for='image in item.acf.images.filter((e) => e.show_on_frontpage)' :src='image.image.sizes["pwr-medium"]'>
        <!-- Caption -->
        <div class="text" v-if="main.showMore">
          <span v-html="item.title.rendered"></span>
          <!-- Show "more images" link if the post has multiple images -->
          <span v-if='item.acf.images.length > 1'>(<router-link :to='item.slug'>more images</router-link>)</span>
          <!-- Show "text" link if the post has a text field -->
          <span v-if='item.acf.text'>(<span @click='toggleTextbox(item.acf.text)' class='pseudo-link'>text</span>)</span>
        </div>

      </div>
      <div class="hide-scroll textbox">
        <div @click='toggleTextbox("")' v-if='textboxActive' id='textbox'>
          <div v-html='textContent'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'works',
  data () {
    return {
      textContent: '',
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
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";

#textbox {
  width: 100vw;
  height: 100%;
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
    max-height: 75vh;
    max-width: 700px;
    overflow-y: scroll;
    @include screen-size('medium') {
      min-width: 400px;
      max-width: 80vw;
    }
    @include screen-size('small') {
      font-size: $font-size-mob-s;
      line-height: $line-height-mob-s;
      min-width: 200px;
      max-width: 80vw;
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
