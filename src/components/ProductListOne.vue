<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li  v-for="detum in saleProducts" :key="detum.name">
              <span>{{detum.name}}</span> <span class="price">{{detum.price}}</span>  
            </li>
        </ul>

        <button @click="reducePrice(4)">Apply Discount Coupon</button>
    </div>
    
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    
    export default {
        

        methods: {
            ...mapActions([
                'reducePrice'
            ])
        },
        computed: {
            ...mapGetters([
                'saleProducts'
            ])
        }
    }
</script>

<style scoped>
    #product-list-one{
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }
    #product-list-one ul{
        padding: 0;
    }
    #product-list-one li{
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.7);
    }
    .price{
        font-weight: bold;
        color: #E8800C;
}
</style>