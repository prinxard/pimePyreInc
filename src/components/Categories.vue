<template>
  <div>
    <ul>
      <li class="catlist btn btn-primary" @click="goToProductCat(category)">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ["category"],

  methods: {
    goToProductCat(category) {
      this.$store.commit("selectedCategoryValue", category);
      this.$router.push({ path: "/categoriespage" });
    },
  },

  data() {},
};
</script>
<style scoped>
.catlist {
  list-style-type: none;
}
.btn {
  font-size: 15px;
  padding: 10px;
  width: 100%;
}
</style>
