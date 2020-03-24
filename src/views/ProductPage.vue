<template>
  <div>
<h1>{{ $route.params.id }}</h1>
<h1>{{ items[0].name }}</h1>
  </div>
</template>

<script>
export default {
  name:"ProductPage",
  data(){
    return{
      items:[]
    }
  },
  created(){
    this.items = this.$store.state.products.filter(detail => {
      console.log("my message", detail)
      return detail.id == parseInt(this.$route.params.id);
    })
    console.log("show", this.items)
  }
}
</script>

<style scoped>

</style>