<template>
    <div class="footer">
        <div class="left">
            <div class="shopcar" >
                <span :class="{lightheight:foodCount}"><svg  xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 900" width="32" height="32" t="1564643840335" p-id="13495" version="1.1"><path fill="#80858a" d="M 357.44 766.4 q 18.24 0 34.56 6.72 t 28.8 18.72 t 19.2 28.32 t 6.72 34.56 t -6.72 34.56 t -19.2 28.32 t -28.8 19.2 t -34.56 7.2 q -19.2 0 -35.04 -7.2 t -28.32 -19.2 t -19.2 -28.32 t -6.72 -34.56 t 6.72 -34.56 t 19.2 -28.32 t 28.32 -18.72 t 35.04 -6.72 Z M 756.8 768.32 q 18.24 0 35.04 6.72 t 28.8 18.72 t 19.2 28.32 t 7.2 34.56 t -7.2 34.56 t -19.2 28.32 t -28.8 19.2 t -35.04 7.2 t -34.56 -7.2 t -28.32 -19.2 t -19.2 -28.32 t -7.2 -34.56 t 7.2 -34.56 t 19.2 -28.32 t 28.32 -18.72 t 34.56 -6.72 Z M 918.08 223.04 q 26.88 0 41.76 7.2 t 21.12 17.76 t 5.76 22.56 t -3.36 20.64 t -12 35.52 t -20.64 59.04 t -22.56 63.84 t -16.8 49.92 q -12.48 38.4 -31.68 53.28 t -47.04 14.88 l -32.64 0 l -62.4 0 l -81.6 0 l -89.28 0 l -238.08 0 l 14.4 86.4 l 483.84 0 q 46.08 0 46.08 39.36 q 0 19.2 -9.12 33.12 t -36 13.92 l -46.08 0 l -89.28 0 l -110.4 0 l -112.32 0 l -92.16 0 l -52.8 0 q -19.2 0 -32.16 -8.64 t -21.6 -22.56 t -13.92 -30.24 t -8.16 -30.72 q -0.96 -5.76 -5.28 -27.84 t -10.56 -55.2 t -13.92 -73.92 t -15.36 -82.08 q -18.24 -96.96 -41.28 -216 l -72 0 q -14.4 0 -24 -7.2 t -15.84 -17.28 t -8.64 -21.6 t -2.4 -21.12 q 0 -19.2 12.96 -31.68 t 35.04 -12.48 l 21.12 0 l 19.2 0 l 24 0 l 32.64 0 q 19.2 0 30.72 5.76 t 18.24 14.4 t 9.6 18.24 t 4.8 16.32 q 1.92 7.68 3.84 21.6 t 3.84 28.32 q 2.88 17.28 5.76 36.48 l 656.64 0 Z" p-id="13496" /></svg></span>
                <i v-show="foodCount" class="foodCount">{{foodCount}}</i>
            </div>
        </div>
        <div class="middle" :class="{middleLightHeight:foodCount}">
            <span class="price">￥{{totalPrice}}</span>
            <span>另需配送费￥{{deliveryPrice}}元</span>
        </div>
        <div class="right">
            <div :class="['sendPrice',{sendLightHeight:sendStatus=='去结算'}]">
                <p>{{sendStatus}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'elmfooter',
    props: {
        goods: {
            type: Array,
            default: ()=>{
                return []
            }
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice:{
            type: Number,
            default: 0
        }
    },
    computed: {
        foodCount(){
            let count = 0;
            this.goods.forEach(good=>{
                let lens = good.foods.length
                for(let i=0; i<lens; ++i){
                    count += good.foods[i].count || 0;
                }
            })
            return count;
        },
        totalPrice(){
            let price = 0;
            this.goods.forEach(good=>{
                let lens = good.foods.length
                for(let i=0; i<lens; ++i){
                    if(good.foods[i].count && good.foods[i].count>0){
                        price += good.foods[i].price * good.foods[i].count;
                    }
                }
            })
            return price;
        },
        sendStatus(){
            let status = [`还差${this.minPrice-this.totalPrice}元起送`,'去结算'];
            return this.minPrice - this.totalPrice > 0 ? status[0] : status[1];
        }
    }
}
</script>
<style scoped>
.elmfooter {
    width: 100%;
    display: flex;
    height: 50px;
    z-index: 99;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    background-color: #131D26;
}
.left {
    flex-grow: 0.5;
}
.middle {
    flex-grow: 1.5;
}
.right {
    flex-grow: 15;
}
.left {
    margin-left: 4px;
}
.shopcar {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: -15px;
    border-radius: 50%;
    height: 58px;
    width: 58px;
    background-color: #131D26;
}
.shopcar span {
    background-color: rgba(255,255,255,.2);
    display: inline-block;
    padding: 6px;
    color: #80858A;
    border-radius: 50%;
}
.middle {
    color: rgba(255,255,255,.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
.middle span {
    padding: 0px 8px;
    display: inline-block;
}
.price {
    border-right: 1px solid rgba(255,255,255,.5);
}
.right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.sendPrice {
    color: white;
    width: 120px;
    font-size: 14px;
    height: 50px;
    box-sizing: border-box;
    line-height: 50px;
    background-color: #2B333B;
    text-align: center;
}
.lightheight {
    color: white;
    background-color: orange!important;
}
.middleLightHeight {
    color: white;
}
.sendLightHeight {
    background-color: green;
    color: white;
}
.foodCount {
    position: absolute;
    top: 0;
    height: 10px;
    line-height: 10px;
    width: 14px;
    right: 0;
    vertical-align: middle;
    border-radius: 6px;
    display: inline-block;
    padding: 4px 6px;
    color: white;
    font-style: normal;
    text-align: center;
    background-color: red;
}
</style>


