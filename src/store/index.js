import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "Macbook",
        price: 300000,
        imageLink: require("@/assets/images/macbook-pro.jpg"),
        id: 1
      },
      {
        name: "Gaming console",
        price:  150000,
        imageLink: require("@/assets/images/ps4.jpg"),
        id: 2
      },
      {
        name: "Shoes",
        price: 3000,
        imageLink: require("@/assets/images/shoes.jpg"),
        id: 3
      },
      {
        name: "Shoes",
        price: 5000,
        imageLink: require("@/assets/images/shoes2.jpg"),
        id: 4
      },
      {
        name: "Watch",
        price: 15000,
        imageLink: require("@/assets/images/watch.jpg"),
        id: 5
      },
      {
        name: "Watch",
        price: 10000,
        imageLink: require("@/assets/images/watch3.jpg"),
        id: 6
        
      },
      {
        name: "Phone",
        price: 40000,
        imageLink: require("@/assets/images/phone.jpg"),
        id: 7
      },
      {
        name: "Books",
        price: 2500,
        imageLink: require("@/assets/images/books.jpg"),
        id: 8
      },
      {
        name: "Speakers",
        price: 100000,
        imageLink: require("@/assets/images/smart-speakers.jpg"),
        id: 9
      },
      {
        name: "Computer accessories",
        price: 30000,
        imageLink: require("@/assets/images/accessories.jpg"),
        id: 10
      }
    ],
  },
  mutations:{},
  actions: {},
  modules: {}
});
