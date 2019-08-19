<template>
    <div class="goods">
        <div class="left">
            <Scroll-view class="categoryWrapper" ref="leftscroll">
                <ul >
                    <li
                        v-for="(good,index) in goods" 
                        :key='good.name' 
                        :class="{lightheight: current==index}"
                        @click="goToTarget(index)">
                        <span v-if='good.type==-1'><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 700" width="18" height="18" t="1564633577953" p-id="1608" version="1.1"><path fill="#ff7e00" d="M 725.299 409.6 l 14.336 -33.3824 a 342.426 342.426 0 0 0 27.648 -134.861 a 68.608 68.608 0 0 0 -68.608 -68.608 h -97.3824 a 29.7984 29.7984 0 0 0 -29.7984 29.7984 v 25.4976 a 36.352 36.352 0 0 1 -33.3824 36.5568 a 35.0208 35.0208 0 0 1 -40.0384 -36.5568 v -25.9072 a 29.7984 29.7984 0 0 0 -29.7984 -29.7984 h -92.7744 A 73.216 73.216 0 0 0 302.285 245.76 a 357.274 357.274 0 0 0 23.3472 127.078 l 15.0528 39.6288 A 290.509 290.509 0 0 1 725.299 409.6 Z" p-id="1609" /><path fill="#ff7e00" d="M 245.76 626.79 A 287.232 287.232 0 0 0 486.4 911.36 a 237.978 237.978 0 0 1 318.976 -183.296 a 290.816 290.816 0 0 0 18.0224 -101.274 A 287.539 287.539 0 0 0 725.299 409.6 l -6.144 14.2336 c -10.24 16.0768 -21.4016 21.4016 -37.376 16.0768 A 27.648 27.648 0 0 1 665.6 402.227 a 273.51 273.51 0 0 0 -73.216 -24.7808 A 321.229 321.229 0 0 0 442.368 391.168 a 183.398 183.398 0 0 0 -49.664 22.3232 c -15.36 11.4688 -25.7024 25.088 -36.4544 22.2208 a 19.8656 19.8656 0 0 1 -11.3664 -11.9808 l -4.3008 -11.264 A 287.642 287.642 0 0 0 245.76 626.79 Z m 287.744 -112.64 a 112.64 112.64 0 1 1 0 224.563 a 112.64 112.64 0 0 1 0 -224.563 Z" p-id="1610" /><path fill="#ff7e00" d="M 533.914 686.08 a 58.7776 58.7776 0 1 0 -58.7776 -58.7776 A 59.2896 59.2896 0 0 0 533.914 686.08 Z M 356.352 435.61 c 10.24 2.9696 21.0944 -10.24 36.4544 -22.2208 a 183.398 183.398 0 0 1 49.5616 -22.2208 a 321.229 321.229 0 0 1 150.118 -13.6192 A 273.51 273.51 0 0 1 665.6 402.227 a 27.648 27.648 0 0 0 16.0768 37.376 c 16.0768 5.3248 26.7264 0 37.376 -16.0768 l 6.144 -14.2336 a 290.509 290.509 0 0 0 -384.614 3.072 l 4.3008 11.264 a 19.8656 19.8656 0 0 0 11.4688 11.9808 Z" p-id="1611" /><path fill="#ffffff" d="M 533.914 739.021 a 112.64 112.64 0 1 0 0 -224.563 a 112.64 112.64 0 0 0 0 224.563 Z m 0 -171.11 a 58.7776 58.7776 0 1 1 -58.7776 58.7776 a 59.2896 59.2896 0 0 1 58.7776 -58.6752 Z" p-id="1612" /><path fill="#ff7e00" d="M 486.4 911.36 a 294.707 294.707 0 0 0 48.3328 3.9936 A 287.334 287.334 0 0 0 805.376 728.064 A 237.978 237.978 0 0 0 486.4 911.36 Z" p-id="1613" /><path fill="#fd973f" d="M 486.4 911.36 a 294.707 294.707 0 0 0 48.3328 3.9936 A 287.334 287.334 0 0 0 805.376 728.064 A 237.978 237.978 0 0 0 486.4 911.36 Z" p-id="1614" /></svg></span>
                        {{good.name}}
                    </li>
                </ul>
            </Scroll-view>
        </div>
        <div class="right" >
            <Scroll-view  ref='categoryWrapper' class="categoryWrapper" @scroll="scroll">
                <ul class="foodList">
                    <li class="foodhook" v-for="category in goods" :key="category.name">
                        <p class="category">{{category.name}}</p>
                        <ul>
                            <li v-for="food in category.foods" :key="food.name" class="foodContainer">
                                <div class="food-left">
                                    <img :src="food.icon" alt="">
                                </div>
                                <div class="food-right">
                                    <p class="title">{{food.name}}</p>
                                    <p class="description">{{food.description}}</p>
                                    <span class="sellCount">月售{{food.sellCount}}份 </span><span class="rating"> 好评率{{food.rating}}%</span>
                                    <div class="priceContainer">
                                        <div class="foodDetail">
                                            <span class="capacity">￥</span>
                                            <span class="price">{{food.price}}</span>
                                            <span class="oldPrice" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                                        </div>
                                        <div class="control">
                                            <Control  :food="food"></Control>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Scroll-view>
        </div>
    </div>
</template>
<script>
import Scroll from '../components/Scroll'
import Control from '../components/CountControl'
export default {
    name: 'goods',
    props: {
        goods: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    data(){
        return {
            current: 0,
            heightList: [0],
            foodList: []
        }
    },
    methods: {
        init(){
            this.foodList = document.querySelectorAll('.foodhook');
            let height = 0;
            this.foodList.forEach((food,index)=>{
                this.heightList.push(height+=food.clientHeight);
            })
            this.current = 0;
        },
        scroll(pos){
            let lens = this.heightList.length;
            for(let i=0; i<lens; ++i){
                if(Math.abs(pos.y)>=this.heightList[i] && Math.abs(pos.y)<this.heightList[i+1]){
                    this.current = i;
                    return;
                }
            }
        },
        goToTarget(index){
            // this.$refs.categoryWrapper.scrollTo(0,-this.heightList[index],200);
            this.$refs.categoryWrapper.scrollToElement(this.foodList[index],100);
            this.current = index;
        }
    },
    created(){
        this.$nextTick(()=>{
            this.init();
        })
        window.addEventListener('resize',this.init);
    },
    components: {
        'Scroll-view': Scroll,
        'Control': Control
    }
}
</script>
<style scoped>
li {
    list-style: none;
}
.goods {
    display: flex;
    min-width: 100%;
    position: absolute;
    top: 141px;
    bottom: 50px;
    overflow: hidden;
}
.left {
    flex:  0 0 80px;
    background-color: #F3F5F7;
}
.goods .left .categoryWrapper li{
    width: 100%;
    font-size: 12px;
    flex-direction: column;
    margin-right: 8px;
}
.right {
    flex: 1;
}
.categoryWrapper{
    height: 100%;
}
.category {
    display: inline-block;
    width: 100%;
    padding: 5px;
    background-color: #F3F5F7;
    font-size: 14px;
    color: rgba(147,153,159);
    font-weight: bold;
}
.categoryWrapper li {
    text-align: left;
    padding: 14px 4px;
    box-sizing: border-box;
}
.foodContainer {
    display: flex;
}
.food-left {
    font-size: 0;
    padding: 2px;
}
.food-left img {
    width: 90px;
    height: 90px;
}
.food-right {
    flex: 1;
    padding: 6px 24px 6px 8px;
}

.food-right p{
    font-size: 12px;
    color: rgb(7,17,27);
}
.food-right .description {
    width: 80px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.food-right .title {
    font-size: 16px;
    color: rgb(7,17,27);
}
.food-right span {
    font-size: 10px;
    color: rgb(147,153,159);
}
.foodList li{
    padding: 0px;
    max-width: 100%;
    text-align: left;
}
.foodList .price {
    font-size: 15px;
    color: red;
    font-weight: bold;
}
.foodList .capacity {
    font-size: 12px;
    color: red;
}
.foodList .oldPrice {
    text-decoration: line-through;
    color: rgb(147,153,159);
    font-size: 12px;
}
.lightheight {
    background-color: white;
}
.priceContainer {
    display: flex;
    height: 25px;
    line-height: 25px;
    position: relative;
    width: 100%;
    justify-content: space-between;
}
</style>

