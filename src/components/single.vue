<template>
  <div class="hide-scroll main">
    <div class="works" v-if='singleWork[0]'>
      <div v-for="item in singleWork[0].acf.images" class="work">
        <img v-if='item.image.sizes' :src='item.image.sizes["pwr-large"]'>
        <!-- Caption -->
        <div class="text" v-if="main.showMore">
          <span v-html="singleWork[0].title.rendered"></span>
          <!-- Show "text" link if the post has a text field & a download link -->
          <span v-if='singleWork[0].acf.text && singleWork[0].acf.download'>(<span @click='TOGGLE_TEXTBOX({content: singleWork[0].acf.text, download: singleWork[0].acf.download.url})' class='pseudo-link'>text</span>)</span>
          <!-- Show "text" link if the post has a text field BUT NO download link -->
          <span v-else-if='singleWork[0].acf.text'>(<span @click='TOGGLE_TEXTBOX({content: singleWork[0].acf.text, download: ""})' class='pseudo-link'>text xx</span>)</span>
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
    ...mapActions(['TOGGLE_TEXTBOX'])
  },
  computed: {
    ...mapState([
      'main'
    ]),
    singleWork () {
      // Get the post that has a slug that is equal to the one in the router
      return this.main.posts.filter(e => e.slug === this.$route.params.slug)
    }
  }
}
</script>
