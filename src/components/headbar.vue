<template>
  <div class="headbar" :class="{more: main.showMore}">
    <p class="asterisk" @click="SHOW_MORE">*</p>
    <p class="text">
      <router-link to="/">Aura Rosenberg</router-link>
      <router-link to="about">{{main.info[0].title.rendered}}</router-link>
    </p>
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
  .text {
    position: relative;
    margin-top: 71px;
    margin-bottom: 0px;
    margin-left: 52px;
    display: none;
    line-height: 18px;
    a {
      display: inline-block;
      margin-right: 3px;
    }
  }
  .asterisk {
    position: relative;
    font-size: $logo-size;
    margin-left: 30px;
    margin-top: 22px;
    margin-bottom: -97px;
    line-height: 18px;
    &:hover {
      color: $black;
      cursor: pointer;
    }
  }
  &.more {
    background: white;
    .text {
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
