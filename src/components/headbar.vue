<template>
  <div class="headbar" :class="{more: main.showMore}">
    <p class="asterisk" @click="SHOW_MORE">*</p>
    <div class="bar">
      <router-link to="/" id="aura">Aura Rosenberg</router-link>
      <router-link to="about" id="about"></router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'headbar',
  methods: {
    ...mapActions(['SHOW_MORE'])
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

.headbar {
  font-weight: 500;
  z-index: 9;
  position: fixed;
  height: 36px;
  width: 100vw;
  background: transparent;
  user-select: none;
  .asterisk {
    position: absolute;
    font-size: $logo-size;
    line-height: 18px;
    left: 30px;
    top: 25px;
    @include screen-size('medium') {
      left: 15px;
      top: 21px;
      font-size: $logo-size-mob;
    }
    &:hover {
      color: $black;
      cursor: pointer;
    }
  }
  .bar {
    width: 100vw;
    padding-left: 55px;
    @include screen-size('medium') {
      padding-left: 42px;
    }
    clear: both;
    a {
      display: none;
      position: relative;
      margin-top: 15px;
      margin-right: 9px;
      float: left;
      @include screen-size('medium') {
        margin-top: 9px;
        font-size: $font-size-mob;
        line-height: $line-height-mob;
      }
      &#aura {
        float: left;
      }
      &#about {
        &:after {
          content: 'biography/bibliography/links'
        }
        @include screen-size('medium') {
          float: right;
          margin-right: 15px;
          &:after {
            content: 'menu'
          }
        }
      }
    }
  }
  &.more {
    background: white;
    a {
      display: inline-block;
    }
  }
  a, p {
    width: auto;
    color: $green;
    text-decoration: none;
    &:active {
      color: $green;
    }
    &:visited {
      color: $green;
    }
  }
  a:hover {
    color: $black;
  }
}
</style>
