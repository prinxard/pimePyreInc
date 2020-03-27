import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        fomerPrice: "500,000",
        details: "most sophisticated laptop you'll ever use",
        name: "Macbook",
        price: "300,000",
        imageLink: require("@/assets/images/macbook-pro.jpg"),
        id: 1
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Gaming console",
        price:  "150,000",
        imageLink: require("@/assets/images/ps4.jpg"),
        id: 2
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Shoes",
        price: "5,000",
        imageLink: require("@/assets/images/shoes.jpg"),
        id: 3
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Shoes",
        price: "5,000",
        imageLink: require("@/assets/images/shoes2.jpg"),
        id: 4
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Watch",
        price: "15,000",
        imageLink: require("@/assets/images/watch.jpg"),
        id: 5
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Watch",
        price: "10,000",
        imageLink: require("@/assets/images/watch3.jpg"),
        id: 6
        
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Phone",
        price: "40,000",
        imageLink: require("@/assets/images/phone.jpg"),
        id: 7
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Books",
        price: "2500",
        imageLink: require("@/assets/images/books.jpg"),
        id: 8
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Speakers",
        price: "100,000",
        imageLink: require("@/assets/images/smart-speakers.jpg"),
        id: 9
      },
      {
        fomerPrice: "500,000",
        details: "Beautifully designed and durable",
        name: "Computer accessories",
        price: "30,000",
        imageLink: require("@/assets/images/accessories.jpg"),
        id: 10
      }
    ],
  },
  mutations:{},
  actions: {},
  modules: {}
});
