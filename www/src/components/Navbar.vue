<template>
  <b-navbar toggleable="lg" variant="dark">
    <b-navbar-brand to="/" ><span class="text-light">SupakJack</span></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto ">
        <b-navbar-nav>
          <b-nav-item to="/"><span class="text-light">หน้าแรก</span></b-nav-item>
          <b-nav-item to="/about"><span class="text-light">ประวัติ</span></b-nav-item>
          <b-nav-item to="/about"><span class="text-light">ผลงาน</span></b-nav-item>
          <b-nav-item to="/about"><span class="text-light">บริการ</span></b-nav-item>
          <b-nav-item to="/about"><span class="text-light">ติดต่อ</span></b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
