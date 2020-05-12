<template>
<div class="products-component">
    <div class="card ml-4 mt-4">

      <router-link  :to="`/products/${products.id}-${products.name.replace(/[' ']+/g,'-').toLowerCase()}`"> 
      <img
        :src="products.imageLink"
        class="card-img-top image" 
        alt="product-image"
      />
      </router-link>

      
        
    

      <div class="card-body body-card">
        v-for="product in allProducts"
        :key="product.id"

        <h5 class="card-title">{{ products.name }}</h5>
        <p>  &#8358; {{ products.price }}</p>
       <span :class="{few: products.inStock < 10, none: products.inStock == 0}"> {{products.inStock}} In stock </span>
         <router-link :to="`/products/${products.id}-${products.name.replace(/[' ']+/g,'-').toLowerCase()}`"><button :disabled="products.inStock == 0" class=" btn btn-primary">
           Buy Now
        </button></router-link>
      </div>
    </div>
</div>
  

  
</template>

<script>
export default {
computed :{
  allProducts(){
    return this.$store.state.products;
  },

// props: ['productsInfo'],
}
}
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

.few{
  color: blueviolet;
}
.none{
  color: red;
}
</style>
