<template>
  <div id='main' class="hide-scroll main">
    <div class="works" v-if='singleWork'>
      <div v-for="item in singleWork.acf.images.filter((e) => !e.show_on_frontpage)" class="work">
        <!-- Content -->
        <video v-if='item.video.url' @click='toggleVideo' :src='item.video.url' autoplay muted loop></video>
        <img v-else-if='item.image.sizes' :src='item.image.sizes["pwr-large"]'>
        <!-- Caption -->
        <div class="text" v-if="main.showMore">
          <span v-html="item.caption"></span>
          <!-- Show "text" link if the post has a text field & a download link -->
          <span v-if='item.text && item.download'>(<span @click='TOGGLE_TEXTBOX({content: item.text, download: item.download.url})' class='pseudo-link'>text</span>)</span>
          <!-- Show "text" link if the post has a text field BUT NO download link -->
          <span v-else-if='item.text'>(<span @click='TOGGLE_TEXTBOX({content: item.text, download: ""})' class='pseudo-link'>text</span>)</span>
        </div>
      </div>
    </div>

    <!-- Textbox -->
    <txt v-if='main.textbox'></txt>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import txt from './txt'

export default {
  name: 'single',
  components: {
    txt
  },
  methods: {
    ...mapActions(['TOGGLE_TEXTBOX']),
    toggleVideo(e) {
      if (e.srcElement.paused) {
        e.srcElement.play()
      } else {
        e.srcElement.pause()
      }
    }
  },
  computed: {
    ...mapState(['main']),
    singleWork() {
      // Get the post that has a slug that is equal to the one in the router
      let work = this.main.posts.find(e => e.slug === this.$route.params.slug)
      // Remove first image
      // work.acf.images.shift()
      return work
    }
  }
}
</script>
