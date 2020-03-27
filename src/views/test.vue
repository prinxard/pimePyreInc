 <template>
     
 
 <div class="bg-looping">
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <!-- <h1>{{ items[0].name}}</h1>
    <h1>{{ items[0].price}}</h1>
    <img :src="items[0].imageLink" alt />-->

    <b-container class>
      <b-row>
        <b-col lg="9" md="8">
          <b-card>
            <b-row>
              <b-col lg="4" md="4">
                <img :src="items[0].imageLink" alt class="image-item mb-2" />
                <div class="mb-3">
                  <img :src="items[0].imageLink" alt class="image-items" />
                  <img :src="items[0].imageLink" class="image-items" />
                  <img :src="items[0].imageLink" alt class="image-items" />
                  <h6 class="mt-3">SHARE THIS PRODUCT</h6>

                  <div>
                    <a href="https://facebook.com/francis.abonyi" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://twitter.com" target="_blank" class="px-2">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </b-col>
              <b-col lg="8" md="8" style="overflow-x: hidden">
                <p>
                  {{ items[0].name }}
                  <i class="far fa-heart"></i>
                </p>
                <p>describing product details .......</p>
                <p>Branding............</p>
                <p>&#8358;{{ getDiscount() }}</p>
                <p>
                  <strike>&#8358;{{ items[0].price }}</strike>
                  <span style="background-color: #ccc; color: red; padding:2px;">{{ percent }}%</span>
                </p>
                <b-button block variant="warning" class="mb-3">
                  <i class="fas fa-shopping-cart"></i>
                  <span>ADD TO CART</span>
                </b-button>
                <div>
                  <p>
                    2 offers starting from &#8358;{{ items[0].price }}
                    <span>
                      <a href>See more offers</a>
                    </span>
                  </p>
                </div>
                <div>
                  <h6 class="mb-4">PROMOTIONS</h6>
                  <div class="mb-3">
                    <a href class="mb-3">
                      <i class="fas fa-star"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </div>
                  <div>
                    <a href>
                      <i class="fas fa-star"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col lg="3" md="4" class="d-none d-md-block">
          <b-card header="Delivery $ Returns" class="text-center mb-4">
            <b-card-text>
              <div>
                <h6>
                  <i class="fas fa-truck"></i> Delivery Information
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div>
                <h6>
                  <i class="fas fa-undo"></i> Return policy
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </b-card-text>
          </b-card>

          <b-card header="SELLER INFORMATION" style="font-size:15px;">
            <h6>Title...</h6>
            <b-card-text>Sub title info 1.</b-card-text>
            <b-card-text>Sub title info 2.</b-card-text>
            <b-button href="#" variant="warning" class="follow">Follow</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </template>