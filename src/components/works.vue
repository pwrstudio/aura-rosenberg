<template>
  <div class="main">
    <!-- No content in outer -->
    <div class="works">
      <div v-for="item in main.posts" class="work">
        <!-- If there is just one image OR more than one but none selected for frontpage => show first image -->
        <img v-if='(item.acf.images.length === 1 && item.acf.images[0].image.sizes) || (item.acf.images.length > 0 && !item.acf.images.find((e) => e.show_on_frontpage))' :src='item.acf.images[0].image.sizes["pwr-large"]'>
        <!-- Else-If there are multiple images => output all that are marked -->
        <img v-if='item.acf.images.length > 1' v-for='image in item.acf.images.filter((e) => e.show_on_frontpage)' :src='image.image.sizes["pwr-large"]'>
        <!-- Caption -->
        <div class="text" v-if="main.showMore">
          <span v-html="item.title.rendered"></span>
          <!-- Show "more images" link if the post has multiple images -->
          <span v-if='item.acf.images.length > 1'>
            (<router-link :to='item.slug'>more images</router-link>)
          </span>
          <!-- Show "text" link if the post has a text field & a download link -->
          <span v-if='item.acf.text && item.acf.download'>
            (<span @click='TOGGLE_TEXTBOX({content: item.acf.text, download: item.acf.download.url})' class='pseudo-link'>text</span>)
          </span>
          <!-- Show "text" link if the post has a text field BUT NO download link -->
          <span v-else-if='item.acf.text'>
            (<span @click='TOGGLE_TEXTBOX({content: item.acf.text, download: ""})' class='pseudo-link'>text</span>)
          </span>
        </div>
      </div>
      <!-- Textbox -->
      <txt v-if='main.textbox'></txt>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import txt from './txt'

export default {
  name: 'works',
  components: {
    txt
  },
  methods: {
    ...mapActions(['TOGGLE_TEXTBOX'])
  },
  computed: {
    ...mapState(['main'])
  }
}
</script>
