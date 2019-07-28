import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products:[
            {name: "Iphone xs",price: 999},
            {name: "Samsung Galaxy A1",price: 599},
            {name: "Oneplus 7",price: 749},
            {name: "Asus Zenphone",price: 549}
          ]
    },
    getters: {
        saleProducts: (state) =>{
            return state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price/2
                };
            });
        }
    },
    mutations: {
        reducePrice: (state,payload) => {
            state.products.forEach(product => {
                product.price -=payload;
            });
        }
    },
    actions: {
        reducePrice: (context,payload) => {
            setTimeout(()=>{
                context.commit('reducePrice',payload);
            },2000);
        }
    }
});