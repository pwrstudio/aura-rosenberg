<template>
  <div class="info">

    <div class="column">
      <div class="inner left">
        <p class="title">Solo Exhibitions</p>
        <table class="list">
          <tr v-for="item in main.info[0].acf.solo_exhibitions">
            <td class="yr" v-html="item.year"></td>
            <td v-html="item.text"></td>
          </tr>
        </table>
        <p class="title">Group Exhibitions</p>
        <table class="list">
          <tr v-for="item in main.info[0].acf.group_exhibitions">
            <td class="yr" v-html="item.year"></td>
            <td v-html="item.text"></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="column">
      <div class="inner mid">
        <p class="title">Projects</p>
        <table class="publications" v-for="item in main.info[0].acf.projects">
          <tr v-html="item.text"></tr>
        </table>
        <p class="title">Publications</p>
        <table class="publications" v-for="item in main.info[0].acf.publications">
          <img v-if="item.image" :src="item.image.url" />
          <tr v-html="item.text"></tr>
        </table>
      </div>
    </div>

    <div class="column">
      <div class="inner right">
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
  data() {
    return {
      msg: 'info'
    }
  },
  computed: {
    ...mapState(['main'])
  },
  head: {
    title() {
      return {
        inner: this.title
      }
    }
  },
  watch: {
    $route(to, from) {}
  }
}
</script>

<style scoped lang='scss'>
@import '../style/helpers/_mixins.scss';
@import '../style/helpers/_responsive.scss';
@import '../style/_variables.scss';

.info {
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 32px);
  overflow: hidden;
  @include screen-size('medium') {
    overflow-y: scroll;
    padding-top: 12vh;
  }
  @include screen-size('small') {
    font-size: 17px;
    line-height: 21px;
    padding-top: 0;
    top: 42px;
  }
}

.column {
  width: 33vw;
  height: calc(100vh - 32px);
  float: left;
  overflow: hidden;
  @include screen-size('medium') {
    width: 50vw;
    float: left;
    height: auto;
  }
  @include screen-size('small') {
    width: 100vw;
    height: auto;
  }
  .inner {
    padding-top: 40px;
    padding-left: 43px;
    background: $white;
    padding-right: calc(16px + 4px);
    width: calc(33vw + 16px);
    height: calc(100vh - 32px);
    overflow-y: scroll;
    @include hide-scroll();
    &.right {
      padding-right: calc(16px + 30px);
    }
    @include screen-size('medium') {
      position: static;
      width: 100%;
      height: auto;
      padding-right: 15px;
      &.left {
        padding-top: 0;
      }
      padding-top: 0;
    }
    .publications,
    .ongoing,
    .links {
      table-layout: auto;
      margin: 0 0 $line-height 0;
      img {
        width: 40%;
      }
    }
    .list {
      table-layout: fixed;
      margin-bottom: $line-height * 1;
      @include screen-size('medium') {
        margin-bottom: $line-height-mob-s * 2;
      }
      tr {
        td {
          @include screen-size('medium') {
            display: block;
            &:not(.yr) {
              margin-bottom: $line-height-mob-s;
            }
          }
          &.yr {
            width: 45px;
          }
        }
      }
    }
    p {
      &.title {
        &:before {
          content: '\A';
          white-space: pre;
        }
        &:after {
          content: '\A\A';
          white-space: pre;
        }
        &:first-child {
          &:before {
            content: '\A';
            white-space: pre;
          }
          &:after {
            content: '\A\A';
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
