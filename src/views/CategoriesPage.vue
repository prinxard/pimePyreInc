<template>
  <div class="products-component">
    <div class="card ml-4 mt-4">
      
        <img
          :src="selectedCategory.imageLink"
          class="card-img-top image"
          alt="product-image"
        />
    

      <div  class="card-body body-card">
        <h5 class="card-title">{{ selectedCategory.name }}</h5>
        <p>&#8358; {{ selectedCategory.price }}</p>
        <!-- <span
          :class="{
            few: productsInfo.inStock < 10,
            none: productsInfo.inStock == 0,
          }"
        >
          {{ Shoes.inStock }} In stock
        </span> -->
          <a href="" @click="goToProduct(productsInfo)"><button class=" btn btn-primary">Buy Now</button></a>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['selectedCategory']),

         
    allProducts() {
      return this.$store.state.categoryList;
    },

    },
  
}
</script>