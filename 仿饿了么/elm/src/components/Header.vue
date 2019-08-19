<template>
  <div class="header">
    <div class="logo">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
    </div>
    <div class="titleWrapper">
        <span class="brand">
            <img src="./brand@2x.png" alt="">
        </span>
        <span class="storeName">粥品香坊（回龙观）</span>
        <p class="methods">蜂鸟专送 / 38分钟到达</p>
        <div class="intro">
            <img class="type" src="./decrease_1@2x.png" alt="">
           <span class="deliverPrice">在线支付满28减15，满50减10</span>
            <span class="tipCount">5个 》</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'elm-header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.header {
    min-width: 100%;
    display: flex;
    height: 100px;
    /* flex-direction: column; */
    padding: 20px 12px;
    /* position: fixed; */
    /* top: 0; */
    /* z-index: 99; */
    box-sizing: border-box;
    background-color: rgba(7,17,27,.5);
}
.header .logo {
    width: 68px;
    height: 68px;
    overflow: hidden;
}
.header>div>img {
    width: 68px;
    font-size: 0;
    height: 68px;
}
.header .brand img {
    width: 32px;
    height: 16px;
    vertical-align: top;
}
.header .titleWrapper {
    margin-left: 8px;
    flex: 1;
    /* height: 100%; */
    color: white;
}
.header .storeName {
    display: inline-block;
    font-size: 18px;
    vertical-align: top;
    /* color: white; */
    font-weight: bold;
    line-height: 18px;
}
.header .methods {
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-weight: 200;
    margin-top: 12px;
}
.header .intro {
    display: flex;
    align-items: center;
    position: relative;
}
.header .type {
    width: 18px;
}
.header .deliverPrice {
    font-size: 10px;
    font-weight: 200;
}
.header .tipCount {
    position: absolute;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    width: 48px;
    border-radius: 7px;
    vertical-align: center;
    text-align: center;
    background-color: rgba(0,0,0,.2);;
    font-size: 10px;
    right: 0;
}
</style>
