<template>
  <div class="products-component">
    <div class="card ml-4 mt-4">
      
        <img
          :src="productsInfo.imageLink"
          class="card-img-top image"
          alt="product-image"
          @click="goToProduct(productsInfo)"
        />
    

      <div  class="card-body body-card">
        <h5 class="card-title">{{ productsInfo.name }}</h5>
        <p>&#8358; {{ productsInfo.price }}</p>
        <span
          :class="{
            few: productsInfo.inStock < 10,
            none: productsInfo.inStock == 0,
          }"
        >
          {{ productsInfo.inStock }} In stock
        </span>
          <a  @click="goToProduct(productsInfo)"><button class=" btn btn-primary">Buy Now</button></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {

  props: ["productsInfo"],

  computed: {
        ...mapState(['products'])
    },

  methods: {
    goToProduct(product) {
      this.$store.commit('selectedProductValue', product);
      this.$router.push({ path: "/productpage" });
    },
  }
};
</script>

<style scoped>
.card {
  width: 16rem;
}

.image {
  height: 200px;
}
.image:hover {
  transform: scale(1.1);
}
.body-card {
  background-color: #eef9ff;
}

.few {
  color: blueviolet;
}
.none {
  color: red;
}
</style>
