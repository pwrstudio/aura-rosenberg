<template>
  <div @click='overlayClick' id='overlay'>
    <div id='textbox'>
      <div class='handle top'></div>
      <div class='handle bottom'></div>
      <div class='handle left'></div>
      <div class='handle right'></div>
      <a v-if='main.textDownload.length > 0' :href='main.textDownload' download target=_blank id='download'>download/print</a>
      <article>
        <div v-html='main.textContent' id='inner' class='inner'></div>
      </article>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import interact from 'interactjs'
export default {
  name: 'txt',
  computed: {
    ...mapState(['main'])
  },
  methods: {
    ...mapActions(['TOGGLE_TEXTBOX']),
    overlayClick(e) {
      if (e.target.attributes.id && e.target.attributes.id.value === 'overlay') {
        this.TOGGLE_TEXTBOX('')
      }
    },
    setInnerHeight() {
      // if (!window.matchMedia('(max-device-width: 700px)').matches) {
      //   document.getElementById('inner').style.height = document.getElementById('textbox').offsetHeight + 'px'
      // }
    }
  },
  mounted() {
    function dragMoveListener(event) {
      let target = event.target
      let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }
    // if not mobile
    if (!window.matchMedia('(max-device-width: 700px)').matches) {
      interact('#textbox').draggable({onmove: dragMoveListener})
      interact('#textbox').allowFrom('.handle')
    }
    // ***
    this.setInnerHeight()
    window.addEventListener('resize', this.setInnerHeight)
  }
}
</script>

<style lang='scss' scoped>
@import '../style/helpers/_mixins.scss';
@import '../style/helpers/_responsive.scss';
@import '../style/_variables.scss';

#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1001;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  #textbox {
    color: #fff;
    width: 450px;
    // max-height: 70vh;
    height: auto;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 8px;
    padding-top: 20px;
    // background: rgba(255, 255, 255, 0.96);
    z-index: 20000;
    // overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 4px solid transparent;
    // border-top: 4px solid transparent;
    border-top: 1px solid #fff;
    display: flex;

    @include screen-size('small') {
      background: rgba(255, 255, 255, 0.96);
      color: $black;
      transform: none !important;
    }

    article {
      cursor: auto;
      line-height: 18px;
      height: 100%;
      // overflow: hidden;
      font-size: 16px;
      .inner {
        @include hide-scroll;
        width: calc(100% + 16px);
        padding-right: 16px;
        display: block;
        // padding-bottom: 40px;
        overflow-y: auto;
        // overflow-x: hidden;
        height: 100%;
        p {
          display: block;
        }
        @include screen-size('small') {
          padding-bottom: 200px;
          p {
            width: 70%;
          }
        }
      }
    }
    #download {
      position: absolute;
      top: 0px;
      right: 10px;
      cursor: pointer;
      z-index: 1000;
      display: block;
    }
    @include screen-size('small') {
      position: fixed;
      top: 32px;
      left: 0;
      width: 100vw;
      height: 100vh;
      max-height: none;
      h1 {
        width: 100%;
        margin-top: 12px;
      }
      article {
        max-height: 100%;
      }
      #close-text {
        position: absolute;
        top: 10px;
        right: 20px;
        display: block;
        float: right;
        font-size: 12px;
        &:hover {
          text-decoration: underline;
        }
      }
      #download {
        display: none;
      }
    }
  } 
}

.handle {
  position: absolute;
  cursor: move !important;
  &.top {
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
  }
  &.bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
  }
  &.left {
    top: 0;
    left: 0;
    width: 18px;
    height: 100%;
  }
  &.right {
    top: 0;
    right: 0;
    width: 18px;
    height: 100%;
  }
}
</style>
