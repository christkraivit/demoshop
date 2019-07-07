<template>
  <div>
    <!-- Menu -->
    <nav class="navbar navbar-expand-sm navbar-defult d-sm-flex d-none">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <router-link to="/#" class="topnav nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="topnav nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/downloads" class="topnav nav-link">Download</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="topnav nav-link">Contact</router-link>
        </li>
      </ul>
    </nav>
    <!-- End menu Web  -->
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
</style>
