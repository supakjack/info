<template>
  <b-navbar
    toggleable="lg"
    variant="light"
    fixed="top"
  >
    <b-navbar-brand to="/"
      ><span class="text-dark">SUPAKJACK</span></b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto ">
        <b-navbar-nav>
          <b-nav-item to="/"><span class="text-dark">หน้าแรก</span></b-nav-item>
          <b-nav-item to="/about"
            ><span class="text-dark">เกี่ยวกับ</span></b-nav-item
          >
          <b-nav-item to="/about"
            ><span class="text-dark">บริการ</span></b-nav-item
          >
          <b-nav-item to="/about"
            ><span class="text-dark">ติดตาม</span></b-nav-item
          >
          <b-nav-item to="/about"
            ><span class="text-dark">ติดต่อ</span></b-nav-item
          >
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>
