<template>
  <div class="main">
    <!-- No content in outer -->
    <div class="works">
      <template v-for="item in main.posts">
        <div v-for="image in item.acf.images.filter((e) => e.show_on_frontpage)" class="work">
          <!-- Else-If there are multiple images => output all that are marked -->
          <!-- {{image.image.sizes}} -->
          <img :src='image.image.url'>
          <!-- <img :src='image.image.sizes.large'> -->
          <!-- Caption -->
          <div class="text" v-if="main.showMore">
            <span v-if='image.caption.length > 1' v-html="image.caption"></span>
            <!-- Show "more images" link if the post has multiple images -->
            <span v-if='item.acf.images.length > 1'>
              (<router-link :to='item.slug'>more images</router-link>)
            </span>
            <!-- Show "text" link if the post has a text field & a download link -->
            <span v-if='image.text && image.download'>
              (<span @click='TOGGLE_TEXTBOX({content: image.text, download: image.download.url})' class='pseudo-link'>text</span>)
            </span>
            <!-- Show "text" link if the post has a text field BUT NO download link -->
            <span v-else-if='image.text'>
              (<span @click='TOGGLE_TEXTBOX({content: image.text, download: ""})' class='pseudo-link'>text</span>)
            </span>
          </div>
        </div>
      </template>
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
