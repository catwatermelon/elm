<template>
    <div class="countcontrol">
        <transition  name="fade">
            <span @click="decrease" v-show="food.count>0"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1000" width="21" height="21" t="1564638567780" p-id="11042" version="1.1"><path fill="#007aff" d="M 510.683 0 A 511.269 511.269 0 0 0 0 510.683 a 511.269 511.269 0 0 0 510.683 510.683 a 511.269 511.269 0 0 0 510.683 -510.683 A 511.269 511.269 0 0 0 510.683 0 Z m 0 968.119 A 457.947 457.947 0 0 1 53.248 510.683 A 457.947 457.947 0 0 1 510.683 53.248 a 457.947 457.947 0 0 1 457.435 457.435 a 457.947 457.947 0 0 1 -457.435 457.435 Z" p-id="11043" /><path fill="#007aff" d="M 243.493 477.111 h 513.902 v 64.3657 H 243.493 Z" p-id="11044" /></svg></span>
        </transition>  
        <span class="count" v-show="food.count>0">{{food.count}}</span>
        <span @click="add"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1050" width="32" height="32" t="1564638399943" p-id="9498" version="1.1"><path fill="#1fa3f6" d="M 555.418 214.528 a 329.318 329.318 0 1 0 330.035 329.318 a 329.728 329.728 0 0 0 -330.035 -329.318 M 721.715 578.56 H 590.131 v 131.584 a 34.7136 34.7136 0 0 1 -69.5296 0 V 578.56 H 389.12 a 34.7136 34.7136 0 1 1 0 -69.5296 h 131.482 V 377.549 a 34.7136 34.7136 0 1 1 69.5296 0 v 131.584 h 131.584 a 34.7136 34.7136 0 0 1 0 69.5296 Z" p-id="9499" /></svg></span>
    </div>
</template>

<script>
export default {
    name:'countcontrol',
    props: {
        food: {
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    methods:{
        add(){
            if(!this.food.count || this.food.count < 0){
                this.$set(this.food,'count',1);
                return;
            }
            this.food.count++;
        },
        decrease(){
            if(this.food.count <= 0)
                return;
            this.food.count = this.food.count-- < 0 ? 0 : this.food.count;
        }
    }
}
</script>
<style scoped>
.countcontrol {
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
}
.countcontrol span{
    display: inline-block;
    width: 23px;
}
.countcontrol .count {
    text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: rotate(180deg);
}
</style>

