<template>
  <div class="home">
      <elm-header class="elmheader"></elm-header>
      <div class="navbar">
          <div><router-link to="/goods">商品</router-link></div>
          <div><router-link to="/comment">评价</router-link></div>
          <div><router-link to="/store">商家</router-link></div>
      </div>
      <div class="content">
          <router-view :goods="goods"></router-view>
      </div>
      <elm-footer class="elmfooter" :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice" :goods="goods"></elm-footer>
  </div>
</template>

<script>
import ELMHeader from '../components/Header.vue';
import data from '../assets/data.json'
import ELMFooter from '../components/Footer'
export default {
  name: 'home',
  data () {
    return {
        goods: [],
        seller: {
            deliveryPrice: 0,
            minPrice: 0
        }
    }
  },
  created(){
      this.goods = data.goods;
      this.seller.deliveryPrice = data.seller.deliveryPrice;
       this.seller.minPrice = data.seller.minPrice;
    //   console.log(this.goods);
  },
  components: {
      'elm-header': ELMHeader,
      'elm-footer': ELMFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}
/* .elmheader {
    flex: 0 0 80px;
} */
.content {
    /* height: calc(100% - p21); */
    /* flex: 1; */
    /* max-width: 100%; */
    overflow: hidden;
}
.navbar {
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.navbar>div {
    flex: 1;
    text-align: center;
}
.navbar a {
    font-weight: bold;
    padding: 10px 0;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    color: rgba(77,85,93);
    height: 100%;
    text-decoration: none;
}
</style>
