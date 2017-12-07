<template>
<div>
     <header></header>
     <div>
       <input class="testInput" :autofocus=true type="text" placeholder="瞎写的...">
     </div>
<div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello Man {{target}}</text>
    <text class="desc">Now, let's use vue to build your weex app.</text>
  </div>
  <div>
    <video class="video" :src="src" autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>
  </div>
</div>
  
</template>

<style>
  .wrapper { align-items: center; margin-top: 0px; background: rebeccapurple}
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; resize: "cover"}
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
  .testInput {
    height: 50px;
    padding: 10px;
    font-size: 15px;
    width: 750;
    border-bottom-width: 1px;
  }
  .video {
    width: 630px;
    height: 350px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
</style>

<script>
import header from './topHeader.vue';
//模块
  var modal = weex.requireModule('modal')
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      state: '----',
        src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
    },
created(){
  console.log('start')
  modal.toast({
    message:'页面初始化成功',
    duration:3
  });
},
components :{
header
},
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      onstart (event) {
        this.state = 'onstart'
      },
      onpause (event) {
        this.state = 'onpause'
      },
      onfinish (event) {
        this.state = 'onfinish'
      },
      onfail (event) {
        this.state = 'onfinish'
      }
    }
  }
</script>