<template>
  <div class="info">

    <div class="hide-scroll column">
      <div class="col left">
        <p class="title">Solo Exhibitions</p>
        <table class="list">
          <tr v-for="item in main.info[0].acf.solo_exhibitions">
            <td class="yr" v-html="item.year"></td><td v-html="item.text"></td>
          </tr>
        </table>
        <p class="title">Group Exhibitions</p>
        <table class="list">
          <tr v-for="item in main.info[0].acf.group_exhibitions">
            <td class="yr" v-html="item.year"></td><td v-html="item.text"></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="hide-scroll column">
      <div class="col mid">
        <p class="title">Publications</p>
        <table class="publications" v-for="item in main.info[0].acf.publications">
          <img v-if="item.image" :src="item.image.url"/>
          <tr v-html="item.text"></tr>
        </table>
      </div>
    </div>

    <div class="hide-scroll column">
      <div class="col right">
        <p class="title">Ongoing/Upcoming</p>
        <table class="ongoing">
          <tr v-for="item in main.info[0].acf.ongoing">
            <td v-html="item.text"></td>
          </tr>
        </table>
        <p class="title">Links</p>
        <table class="links" v-for="item in main.info[0].acf.links">
          <tr>
            <td v-html="item.text"></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'info',
  data () {
    return {
      msg: 'info'
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

.info {
  z-index: 2;
  position: fixed;
  bottom: 0;
  background: $background-color;
  width: 100vw;
  height: 100vh;
  .col {
    width: calc(33.33vw + #{$scroll-bar});
    // Hide scroll stuff
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
    position: absolute;
    padding-top: $margin-sides * 3;
    padding-left: $margin-sides * 2;
    padding-right: $scroll-bar;
    .publications, .ongoing, .links {
      table-layout: auto;
      margin: 0 0 $line-height * 2 0;
    }
    .list {
      table-layout: fixed;
      margin-bottom: $line-height * 3;
      tr {
        td {
          &.yr {
            width: $margin-sides * 3;
          }
        }
      }
    }
    p {
      &.title {
        &:after {
          content: '\A\A';
          white-space: pre
        }
        &:first-child {
          &:before {
            content: '\A';
            white-space: pre
          }
          &:after {
            content: '\A\A';
            white-space: pre
          }
        }
      }
    }
  }
}
</style>
