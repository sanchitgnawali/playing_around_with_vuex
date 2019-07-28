<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li  v-for="detum in saleProducts" :key="detum.name">
              <span>{{detum.name}}</span> <span class="price">{{detum.price}}</span>  
            </li>
        </ul>

        
    </div>
    
</template>

<script>

    export default {
        methods: {
            
        },
        computed: {
            data() {
                return this.$store.state.products;
            },
            saleProducts() {
               return this.$store.state.products.map(product => {
                    return {
                        name: '**' + product.name + '**',
                        price: product.price/2
                    }
                });
            }
            
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