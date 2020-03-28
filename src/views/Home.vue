<template>
  <div class="home">
    <Header />

    <div class="row cat-slider">
      <div class="col-lg-2 box-shadow ml-5">
        <h4 class="text-center mb-3">categories</h4>

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
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../components/Header";
import products from "../components/products";
import carousel from "../components/carousel";
import Categories from "../components/Categories";

export default {
  name:"Home",
  data() {
    return {
      products: this.$store.state.products
    };
  },
  components: {
    Header,
    Categories,
    products,
    carousel,
   
  }
};
</script>
<style scoped>
.cat-slider {
  padding-top: 100px;
}
/* .home {
  background-color: #eef9ff;
} */
</style>
