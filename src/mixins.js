import Vue from "vue";

Vue.mixin({
  methods: {
    linkLine() {
      window.open("https://line.me/R/ti/p/" + this.$line, "_blank");
    },
    download() {
      window.open(
        "https://www.apple.com/th/ios/app-store/",
        "_blank"
      );
    },
    entrance() {
      window.location = "https://bbbs.bacc1688.com";
    },
    entranceMobile() {
      window.location = "http://M.bacc7777.com";
    },
    contactme() {
      const html = ` 
            <p class="">ติดต่อเรา</p> 
            <h4>พนักงานของเราพร้อมให้บริการ 24 ชม.ค่ะ</h4> 
            <div class="container"> 
                <div class="row justify-content-center">            
                    <div class="form-inline">
                        <button id="btn_openline" class=" btn btn-line btn-lg mx-2" autofocus>ติดต่อพนักงาน</button>
                    </div>  
                </div>
            </div> 
            `;
      Swal.fire({
        type: "success",
        html,
        showCloseButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          const content = Swal.getContent();
          const $ = content.querySelector.bind(content);

          $("#btn_openline").addEventListener("click", () =>
            window.open("https://line.me/R/ti/p/" + this.$line, "_blank")
          );
        }
      });
    },
    deposit() {
      const html = ` 
            <p class="">ลูกค้าสามารถแจ้งฝาก-ถอน ผ่าน LINE ได้เลยค่ะ</p> 
            <h4>พนักงานของเราพร้อมให้บริการ 24 ชม.ค่ะ</h4> 
            <div class="container"> 
                <div class="row justify-content-center">            
                    <div class="form-inline">
                        <button id="btn_openline" class=" btn btn-line btn-lg mx-2" autofocus>ติดต่อพนักงาน</button>
                    </div>  
                </div>
            </div> 
            `;
      Swal.fire({
        type: "success",
        html,
        showCloseButton: true,
        focusConfirm: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          const content = Swal.getContent();
          const $ = content.querySelector.bind(content);
          $("#btn_openline").addEventListener("click", () =>
            window.open("https://line.me/R/ti/p/" + this.$line, "_blank")
          );
        }
      });
    }
  }
});
