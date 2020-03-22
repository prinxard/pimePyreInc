<template> 
<div>
<ul v-for="category in categoryList" :key="category.id">
    <li class="catlist btn btn-primary" >{{category.name}}</li>
</ul>
</div>

</template>

<script>
export default {
  data() {
    return {
        categoryList:[
            {
                name:'Shoes',
                id: 1
            },
            {
                name: 'Phones',
                id: 2
            },
        
            {
                name: 'Computers',
                id: 3
            },
        
            {
                name: 'Watches',
                id: 4
            }
        ]
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