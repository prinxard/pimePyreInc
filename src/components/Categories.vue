<template> 
<div>
<ul>
    <li class="catlist btn btn-primary" >{{category.name}}</li>
</ul>
</div>

</template>

<script>
export default {
    props: ['category'],
  data() {
    return {
        
    };
  }
};
</script>
<style scoped>
.catlist{
    list-style-type: none;
}
.btn{
    font-size: 16px;
    padding: 10px;
    width: 100%;
}
</style>