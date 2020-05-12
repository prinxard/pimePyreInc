<template>
  <div class="home">
    <div class="row cat-slider">
      <!-- category and carousel row starts here -->
      <div class="col-lg-2 box-shadow ml-5">
        <!-- categories starts here -->
        <h4 class="text-center mb-3">categories</h4>
        <Categories v-for="cat in categoryList" :category="cat" :key="cat.id" />
      </div>
      <!-- categories ends here -->

      <div class="col-lg-5 offset-lg-1 mb-5 carousel">
        <!-- carousel starts here -->
        <carousel />
      </div>
      <!-- carousel ends here -->
    </div>
    <!-- category and carousel row ends here -->

    <div class="row col-lg-11 offset-lg-1">
      <!-- products row starts here -->
      <products
        v-for="item in allProducts"
        :productsInfo="item"
        :key="item.id"
      />
    </div>
    <!-- products row ends here -->
  </div>
</template>

<script>
import products from "../components/products";
import carousel from "../components/carousel";
import Categories from "../components/Categories";

export default {
  name: "home",
  data() {

    return {


      // category array
      categoryList: [
        {
          name: "Shoes",
          id: 1
        },
        {
          name: "Phones",
          id: 2
        },

        {
          name: "Computers",
          id: 3
        },

        {
          name: "Watches",
          id: 4
        }
      ]
    };
  },
  components: {
    Categories,
    products,
    carousel
  },
   computed: {
      allProducts() {
return this.$store.state.products;
      }

    }
};
</script>


<style scoped>
.cat-slider {
  padding-top: 100px;
}
</style>
