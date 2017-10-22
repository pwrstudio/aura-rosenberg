<template>
  <div class="headbar" :class="{more: main.showMore}">
    <p class="asterisk" @click="SHOW_MORE">*</p>
    <div class="bar">
      <router-link v-if='!main.textbox' to="/" id="aura" class='logo'>Aura Rosenberg</router-link>
      <router-link v-if='$route.name !== "about"' to="about" class='large-menu'>{{main.info[0].title.rendered}}</router-link>
      <router-link v-if='!main.textbox && $route.name !== "about"' to="about" class='small-menu'>about</router-link>
      <div v-if='main.textbox' @click='TOGGLE_TEXTBOX("")' class='small-close'>close</div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'headbar',
  methods: {
    ...mapActions(['SHOW_MORE', 'TOGGLE_TEXTBOX'])
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
  height: 32px;
  width: 100vw;
  background: transparent;
  user-select: none;
  .asterisk {
    position: absolute;
    font-size: $logo-size;
    font-family: $sans-serif-stack;
    line-height: 18px;
    left: 20px;
    top: 17px;
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
    padding-left: 45px;
    @include screen-size('medium') {
      padding-left: 42px;
    }
    clear: both;
    a {
      display: none;
      position: relative;
      margin-top: 8px;
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
    }
  }
  &.more {
    background: rgba(255,255,255,0.96);
    .large-menu,
    .logo {
      display: inline-block;
    }
    @include screen-size('medium') {
      .small-menu {
        display: block !important;
      }
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

.large-menu {
  display: block;
  @include screen-size('medium') {
    display: none !important;
  }
}

.small-menu {
  position: absolute !important;
  right: 0 !important;
  display: none;
  @include screen-size('medium') {
    display: block;
  }
}

.small-close {
  position: absolute !important;
  right: 10px !important;
  top: 11px;
  display: none !important;
  color: $green;
  &:hover {
    color: $black;
  }
  cursor: pointer;
  @include screen-size('medium') {
    display: block !important;
  }
}
</style>
