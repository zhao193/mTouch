<template>
  <v-touch v-on:panstart='onPanStart' v-on:panmove='onPanMove'
           v-on:pinchstart='onPinchStart' v-on:pinchmove='onPinchMove'>
    <img id="imgPhoto" style="position:absolute;" :style="{left:baseX+'px',top:baseY+'px',width:imgWidth+'rem',height: imgHeight+'rem'}" src="../assets/wizard.png">
  </v-touch>

</template>

<script>
import {css} from '../assets/js/mTouch'
export default {
  name: 'poster',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      bodyWidth: document.body.clientWidth,
      bodyHeight: document.body.clientHeight,
      baseX: document.body.clientWidth / 18 + 8,
      baseY: 35,
      imgX: 0,
      imgY: 0,
      flag: true,
      imgWidth: 20,
      imgHeight: 20,
      startRotate: 0,
      startScale: 0,
      startTranslateX: 0,
      startTranslateY: 0
    }
  },
  methods: {
    onPanStart (e) {
      this.startTranslateX = css(document.getElementById('imgPhoto'), 'translateX')
      this.startTranslateY = css(document.getElementById('imgPhoto'), 'translateY')
    },
    onPanMove (e) {
      console.log(e)
      css(document.getElementById('imgPhoto'), 'translateX', e.deltaX + this.startTranslateX)
      css(document.getElementById('imgPhoto'), 'translateY', e.deltaY + this.startTranslateY)
    },
    onPinchStart (e) {
      this.startScale = css(document.getElementById('imgPhoto'), 'scale')
    },
    onPinchMove (e) {
      console.log(1111111)
      css(document.getElementById('imgPhoto'), 'scale', e.scale * this.startScale)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  body,
  html {
    height: 100%;
    margin: 0;
  }
  #wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    background: #393a3f;
    font: 20px/60px '宋体';
    text-align: center;
    color: #fff;
  }
  .page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    background: #000;
  }
  .fileBtn {
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 50px;
    font: 20px/50px '宋体';
    text-align: center;
    border: 1px solid #179e16;
    border-radius: 5px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #1aad19;
    color: #fff;
  }
  input {
    display: none;
  }
  .pageHide {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  .con {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
  }
  canvas {
    display: block;
  }
  #img {
    position: absolute;
    left: 50%;
    top: 50%;
    /* margin: -100px 0 0 -100px; */
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    /* background: url('loading.gif') no-repeat center center; */
  }
  #saveBtn {
    position: absolute;
    right: 5px;
    top: 10px;
    width: 70px;
    font: 14px/30px '宋体';
    text-align: center;
    background: #1aad19;
    text-decoration: none;
    color: #fff;
    border: 1px solid #179e16;
    border-radius: 5px;
  }
  #select {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    border: 1px solid #6af7d7;
    background: rgba(106, 247, 215, .1);
  }
  #select span {
    position: absolute;
    box-sizing: border-box;
  }
  #select .top {
    top: -2px;
    left: 0;
    width: 100%;
    height: 20px;
    border-top: 4px solid transparent;
    /*#6af7d7*/
  }
  #select .bottom {
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 20px;
    border-bottom: 4px solid transparent;
    /*#6af7d7*/
  }
  #select .left {
    top: 0;
    left: -2px;
    height: 100%;
    width: 20px;
    border-left: 4px solid transparent;
    /*#6af7d7*/
  }
  #select .right {
    top: 0px;
    right: -2px;
    height: 100%;
    width: 20px;
    border-right: 4px solid transparent;
    /*#6af7d7*/
  }
  #select .left-top {
    top: -2px;
    left: -2px;
    height: 30px;
    width: 30px;
    border-top: 4px solid #6af7d7;
    border-left: 4px solid #6af7d7;
    /*#6af7d7*/
  }
  #select .right-top {
    top: -2px;
    right: -2px;
    height: 30px;
    width: 30px;
    border-top: 4px solid #6af7d7;
    border-right: 4px solid #6af7d7;
    /*#6af7d7*/
  }
  #select .left-bottom {
    bottom: -2px;
    left: -2px;
    height: 30px;
    width: 30px;
    border-bottom: 4px solid #6af7d7;
    border-left: 4px solid #6af7d7;
    /*#6af7d7*/
  }
  #select .right-bottom {
    bottom: -2px;
    right: -2px;
    height: 30px;
    width: 30px;
    border-bottom: 4px solid #6af7d7;
    border-right: 4px solid #6af7d7;
    /*#6af7d7*/
  }
</style>
