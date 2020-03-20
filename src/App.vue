<template>

  <div class="home">

<Header />

 
        
    <div class="row cat-slider">
      <div class="col-lg-2 box-shadow ml-5">
        <h4>categories</h4>
        <!-- <ul class="list-unstyled">
          <li>shoes</li>
          <li>phones</li>
          <li>computers</li>
          <li>watches</li>
        </ul> -->
        <Categories />
        
      </div>
      <div class="col-lg-5 offset-lg-1 mb-5 carousel">
       <carousel />
      </div>
    </div>
    
    <div class="row col-lg-11 offset-lg-1">
      
      <products
          v-for="product in products"
          :productsInfo="product"
          :key="product.id"
        />

    </div>
<div class="footer">
<Footer />
</div>
      
    </div>

</template>

<script>
import Header from "./components/Header";
import products from "./components/products";
import carousel from "./components/carousel";
import Footer from "./components/Footer";
import Categories from "./components/Categories"


export default {
  name: "home",

  data() {
    return {
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
          name: "phone",
          price: 40000,
          imageLink: require("@/assets/images/phone.jpg"),
          id: 7
        },
        {
          name: "books",
          price: 2500,
          imageLink: require("@/assets/images/books.jpg"),
          id: 8
        },
        {
          name: "speakers",
          price: 100000,
          imageLink: require("@/assets/images/smart-speakers.jpg"),
          id: 9
        },
        {
          name: "computer accessories",
          price: 30000,
          imageLink: require("@/assets/images/accessories.jpg"),
          id: 10
        }
      ]
    };
  },
  components: {
    Header,
    Categories,
    products,
    carousel,
    Footer
   
  }
};
</script>
<style scoped>


.cat-slider{
  padding-top: 100px;
}
.home{
  background-color: #eef9ff;
}
</style>
