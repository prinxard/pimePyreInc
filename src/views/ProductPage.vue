<template>
<div>
 <h1> {{items[0].name }} </h1>
  <h1> {{items[0].price}} </h1>
</div>
 
</template>


<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.items = this.$store.state.products.filter(item => {
      return item.id == parseInt(this.$route.params.id);
    });
    console.log("my item", this.items);
    console.log("my item", typeof Number(this.$route.params.id));
  }
};
</script>


<style scoped>

</style>