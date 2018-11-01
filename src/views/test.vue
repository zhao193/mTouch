<template>
  <div id="wrap">
    <section class="page">
      <header>
        图片上传裁切
      </header>
      <label class="fileBtn">
        请选择图片上传
        <input type="file" id="file" accept="image/*">
      </label>
    </section>
    <section class="page pageHide">
      <header>
        图片编辑 <a href="javascript:;" class="btn" id="saveBtn">保存</a>
      </header>
      <div class="con">
        <canvas id="c"></canvas>
        <div id="select">
          <span class="left-top"></span>
          <span class="left-bottom"></span>
          <span class="right-top"></span>
          <span class="right-bottom"></span>
        </div>
      </div>
    </section>
    <section class="page pageHide">
      <header>
        长按保存图片
      </header>
      <canvas id="c2"></canvas>
      <img src="" id="img">
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    font: 20px/60px "宋体";
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
    font: 20px/50px "宋体";
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
    font: 14px/30px "宋体";
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
