<template>
<div class="products-component">
    <div class="card ml-4 mt-4" style="width: 18rem;">
      <img
        :src="productsInfo.imageLink"
        class="card-img-top" 
        alt="product-image"
     height="200px" />
      <div class="card-body">
        <h5 class="card-title">{{ productsInfo.name }}</h5>
        <p>  &#8358; {{ productsInfo.price }}</p>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
</div>
  

  
</template>

<script>
export default {
  props: ["productsInfo"]
};
</script>

<style scoped>

</style>
