<template>
  <div class="container mt-5">
    <div class="row">
      <div class="image col-lg-4">
        <img :src="items[0].imageLink" alt srcset class="d-block main-image" />
        <div class="thumbnails mr-5">
          <img :src="items[0].imageLink" alt srcset class="image-thumbnail" />
          <img :src="items[0].imageLink" alt srcset class="image-thumbnail" />
          <img :src="items[0].imageLink" alt srcset class="image-thumbnail" />
        </div>

        <hr />
        <h4>SHARE THIS PRODUCT</h4>
        <div class="social">
          <a href="#" class="ml-3">
            <i class="fab fa-facebook-f"></i>
          </a>

          <a href="#" class="ml-3">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="decription col-lg-4 text-left">
        <h3>{{ items[0].details }}</h3>
        <hr />
        <p>
          <strong>&#8358; {{ items[0].price }}</strong>
        </p>
        <strike> &#8358; {{ items[0].fomerPrice }}</strike>
        <hr />
        <b-button block variant="warning" class="mb-3">
          <i class="fas fa-shopping-cart"></i>
          <span>ADD TO CART</span>
        </b-button>
        <hr />
        <div>
          <h6 class="mb-3">PROMOTIONS</h6>
          <div class="mb-2">
            <a href="#" class="mb-3">
              <i class="fas fa-star"></i>
              Enjoy Unlimited free delivery with PrimePyre Prime
            </a>
          </div>
          <div>
            <a href="#">
              <i class="fas fa-star"></i>
              Enjoy Unlimited free delivery with PrimePyre Prime
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <div class="card-header">
            DELIVERY & RETURNS
          </div>
          <div class="card-body">
            <div class="text-left">
              <h5><i class="fas fa-truck"></i> Delivery Information</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div>
              <h5 class="text-left"><i class="fas fa-undo"></i> Return policy</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-header">
            SELLER INFORMATION
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-warning float-right">FOLLOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      items: []
    };
  },

  created() {
    this.items = this.$store.state.products.filter(item => {
      return item.id == parseInt(this.$route.params.id);
    });
  }
};
</script>

<style scoped>
.main-image {
  width: 18rem;
  border-radius: 10px;
}

.image-thumbnail {
  height: 50px;
  width: 50px;
  padding: 10px 3px;
}
.decription {
  overflow: hidden;
}
</style>
