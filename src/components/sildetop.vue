<template>
  <div>
    <nav class="navbar navbar-expand-sm  navbar-light bg-light d-sm-block d-none">
      <ul class="nav justify-content-end">
        <li class="nav-item active">
          <button class="btn btn-outline-warning my-4 my-sm-0" type="submit"><i class="fa fa-pencil"></i> Sgin In</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-warning my-4 my-sm-0" type="submit">Sgin Up</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.bg-light{
    background-color: #2b010f!important;
}
a{
    color:#ffc107;
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
.router-link-active{
  color:#ffc107;
}
</style>
