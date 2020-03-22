<template>
<div class="products-component">
    <div class="card ml-4 mt-4">
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
.card{
  width: 16rem;

}

.image{
  height: 200px;
}
.image:hover{
  transform: scale(1.1);
}
.body-card{
  background-color: #eef9ff;;
}
</style>
