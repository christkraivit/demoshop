<template>
  <div>
    <!-- Menu Mobile -->
    <nav class="navbar navbar-expand-lg navbar-defult fixed-bottom d-sm-none">
          <router-link to="/#" class="topnav nav-link"> <i class="material-icons">home</i> <small>Home</small></router-link>
          <router-link to="/about" class="topnav nav-link"><i class="material-icons">perm_identity</i><small>About</small></router-link>
          <router-link to="/downloads" class="topnav nav-link"><i class="material-icons">cloud_download</i> <small>Download</small></router-link>
          <router-link to="/contact" class="topnav nav-link"><i class="material-icons">call</i><small>Contact</small></router-link>
      </ul>
    </nav>
    <!-- End Mobile -->
  </div>
</template>

<style lang="scss" scoped>
.navbar-defult {
  background-color: #662447;
}
li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 30px;
}
.topnav::after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: #ffc107;
  transition: width 0.3s;
}
.topnav:hover::after {
  width: 100%;
  transition: width 0.3s;
}
.router-link-active {
  color: #ffc107;
}
a {
  color: #ffffff;
}
a:hover {
  text-decoration: none;
  color: #ffc107;
}
.navbar-defult a i {
    display: block;
}
</style>
