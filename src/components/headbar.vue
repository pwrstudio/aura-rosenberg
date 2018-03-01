<template>
  <div class="headbar" :class="{more: main.showMore}">
    <div class="asterisk" @click="SHOW_MORE">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 133.6 134.4" style="enable-background:new 0 0 133.6 134.4;" xml:space="preserve">
        <polygon points="50.9,0 50,47.6 7.9,33.5 0,60.4 42.2,74.9 7.9,116.6 33.1,134.4 65.8,94.3 100.5,134.4 124.9,116.6 91.4,74.9
                  	133.6,61.6 124.9,33.5 83.1,47.6 83.1,0.8 " />
      </svg>
    </div>
    <div class="bar">
      <router-link to="/" id="aura" class='logo' :class='{hide: main.textbox}'>Aura Rosenberg</router-link>
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
    ...mapState(['main'])
  }
}
</script>

<style scoped lang='scss'>
@import '../style/helpers/_mixins.scss';
@import '../style/helpers/_responsive.scss';
@import '../style/_variables.scss';

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
    top: 2px;
    left: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 11px;
      width: 11px;
      polygon {
        fill: $green;
      }
    }
    @include screen-size('medium') {
      left: 15px;
      top: 2px;
      font-size: $logo-size-mob;
    }
    &:hover {
      svg {
        polygon {
          fill: $black;
        }
      }
      cursor: pointer;
    }
    @include screen-size('small') {
      &:hover {
        svg {
          polygon {
            fill: $green;
          }
        }
      }
      &:active {
        svg {
          polygon {
            fill: $black;
          }
        }
      }
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
    background: rgba(255, 255, 255, 0.96);
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
  a,
  p {
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

  font-size: $font-size-mob-s;
  line-height: $line-height-mob-s;

  &:hover {
    color: $black;
  }
  cursor: pointer;
  @include screen-size('medium') {
    display: block !important;
  }

  @include screen-size('small') {
    font-size: 16px;
    line-height: 16px;
  }
}

.logo {
  @include screen-size('small') {
    &.hide {
      display: none !important;
    }
  }
}
</style>
