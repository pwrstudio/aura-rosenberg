<template>
  <div class="hide-scroll main">
    <div class="works" v-if='singleWork[0]'>
      <div v-for="item in singleWork[0].acf.images" class="work">
        <img v-if='item.image.sizes' :src='item.image.sizes["pwr-medium"]'>
      </div>
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
  }
}
</script>
