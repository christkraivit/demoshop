<template>
  <div class="home">
    <!-- Menu navbar Mobile -->
    <app-navbarmobile></app-navbarmobile>
    <!-- End Menu navbar Mobile -->
    <!-- Slide -->
    <div class="container bb">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner d-sm-flex d-none">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/slidetest.svg" alt="Responsive image" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/slidetest.svg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/slidetest.svg" alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="container-fluid">
        <!-- Images Row 12 -->
        <div class="row">
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End row 12 -->
        <br />
        <div class="row">
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mt-3">
            <div class="card">
              <img class="card-img-top" src="../assets/cap.svg" alt="Card image cap" />
              <div class="card-body">
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End row 12 -->
      </div>
      <div class="linecolor"></div>
      <!-- Footer -->
      <app-footer></app-footer>
      <!-- End Footer -->
    </div>
    <!-- End Container -->
  </div>
</template>

<script>
export default {
  components: {
    "app-navbarmobile": () => import("../components/navbarmobile"),
    "app-footer": () => import("../components/Footer")
  }
};
</script>

<style lang="scss" scoped>
.bb {
  background: #8f285fa8;
}

div.linecolor {
  height: 7px;
  background: #ffc107;
  margin: 10px 2px;
}
</style>
