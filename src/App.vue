<template>
  <div id="app">
    <div id="nav">
      <Header />
      </div>
      <div>
      <router-view/>
       <Footer />
    </div>
    
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>



<style lang="scss">

 #app {
  background-color: #eef9ff;
 }

#nav {
  padding-top: 70px;

}
</style>
