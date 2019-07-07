<template>
  <div class="footer container-fluid">
    <div class="container pt-3">
      <div class="row justify-content-center">
        <div class="row">
          <div class="col-6 text-center">
            <img
              @click="download()"
              style="max-height: 50px; cursor: pointer; margin: 0.2rem;"
              src="../assets/image/app-download/google_new.png"
              class="img-fluid mt-2"
              alt="appstore"
            />
          </div>
          <div class="col-6 text-center">
            <img
              @click="download()"
              src="../assets/image/app-download/apple_new.png"
              class="img-fluid mt-2"
              alt="appstore"
              style="max-height: 50px; cursor: pointer; margin: 0.2rem;"
            />
          </div>
        </div>
        <small
          style="font-weight: 200;"
          class="text-center mt-1 col-12"
        >ยินดีต้อนรับเข้าสู่ koyos ผู้ให้บริการเกมส์และสอนการเขียนโปรแกรม ตั้งแต่พื้นฐาน สามารถเข้าใจเนื้อหาของภาษาในแต่ละคอร์สและ Workshop นั้น ๆ และสามารถร่วมกิจกรรมและเกมส์จากทาง koyos ท่านสามารถเข้าใจและสนับสนุนทาง koyos เพื่อที่จะร่วมกิจกรรมต่าง ๆ</small>
      </div>
      <br />
      <div class="row justify-content-center footer-link">
          <router-link to="/#" class="topnav nav-link"> <small>Home</small></router-link>
          <router-link to="/about" class="topnav nav-link"><small>About</small></router-link>
          <router-link to="/downloads" class="topnav nav-link"> <small>Download</small></router-link>
          <router-link to="/contact" class="topnav nav-link"><small>Contact</small></router-link>
      </div>
      <hr style="background-color: #525252;" />
    </div>
    <div class="row justify-content-center">
      <small style="font-weight: 200;">
        © Copyright
        <a href="/">www.koyos.com</a> 2019. All Rights Reserved
      </small>
    </div>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  color: #fff;
  .footer-link {
    a {
      margin-left: 3px;
      margin-right: 3px;
    }
  }
  a {
    color: #fff !important;
    &:hover {
      color: #fcf6ba !important;
    }
  }
}
</style>
<script>
export default {
  methods: {}
};
</script>
