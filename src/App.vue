<template>
  <div class="home">
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">PrimePyre</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Home</a>
        <a class="p-2 text-dark" href="#">products</a>
        <a class="p-2 text-dark" href="#">cart</a>
        <a class="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>

    <div class="row">
      <div class="col-lg-2 box-shadow ml-5">
        <h4>categories</h4>
        <ul class="list-unstyled">
          <li>shoes</li>
          <li>phones</li>
          <li>computers</li>
          <li>watches</li>
        </ul>
      </div>
    </div>
    <div class="row col-9 float-right">
<products
          v-for="product in products"
          :productsInfo="product"
          :key="product.id"
        />

    </div>
      
    </div>

</template>

<script>
import products from "./components/products";

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
    products
  }
};
</script>
<style scoped>

*{
  box-sizing: border-box;
}

</style>
