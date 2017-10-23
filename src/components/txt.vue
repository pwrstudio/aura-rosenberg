<template>
  <div @click='overlayClick' id='overlay'>
    <div id='textbox'>
      <div class='handle top'></div>
      <div class='handle bottom'></div>
      <div class='handle left'></div>
      <div class='handle right'></div>
      <a v-if='main.textDownload.length > 0' :href='main.textDownload' download id='download'>download/print</a>
      <h1></h1>
      <article>
        <div v-html='main.textContent' class='inner'></div>
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
    ...mapState([
      'main'
    ])
  },
  methods: {
    ...mapActions(['TOGGLE_TEXTBOX']),
    overlayClick (e) {
      if (e.target.attributes.id && e.target.attributes.id.value === 'overlay') {
        this.TOGGLE_TEXTBOX()
      }
    }
  },
  mounted () {
    function dragMoveListener (event) {
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
  }
}
</script>

<style lang='scss' scoped>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";

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
}

#textbox {
  width: 450px;
  height: auto;
  position: relative;
  max-height: 70vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  padding-top: 10px;
  background: rgba(255,255,255,0.96);
  z-index: 20000;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  height: 400px;
  article {
    cursor: auto;
    line-height: 18px;
    height: 100%;
    overflow: hidden;
    display: inline-block;
    .inner {
      @include hide-scroll;
      height: 100%;
      overflow-y: auto;
      width: calc(100% + 16px);
      padding-right: 16px;
      display: inline-block;
      p {
        background: yellow;
        display: block;
        margin-bottom: 60px;
      }
    }
  }
  h1 {
    margin-bottom: 14px;
    @include screen-size('small') {
      margin-bottom: 10px;
    }
    cursor: auto;
  }
  #download {
    position: absolute;
    top: 0;
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
