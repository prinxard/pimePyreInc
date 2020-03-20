<template>
<div class="products-component">
    <div class="card ml-4 mt-4 kard">
      <img
        :src="productsInfo.imageLink"
        class="card-img-top image" 
        alt="product-image"
      />
      <div class="card-body body-card">
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
.kard{
  width: 18rem;
}
.image{
  height: 200px;
}
.body-card{
  background-color: #eef9ff;;
}
</style>
