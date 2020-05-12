<template>
  <div class="products-component">
    <div class="card ml-4 mt-4">
      
        <img
          :src="productsInfo.imageLink"
          class="card-img-top image"
          alt="product-image"
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
        <a @click="goToProduct(product)"
          ><button class=" btn btn-primary">Buy Now</button></a
        >
        <!-- <router-link :to="`/products/${productsInfo.id}-${productsInfo.name.replace(/[' ']+/g,'-').toLowerCase()}`"><button :disabled="productsInfo.inStock == 0" class=" btn btn-primary">
           Buy Now
        </button></router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ["productsInfo"],

  methods: {
    goToProduct(product) {
      this.$store.commit("setSelectedProductValue", product);
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
