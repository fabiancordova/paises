<template>
    <div class="NavBar">
<!-- otro -->
      <b-navbar toggleable="lg" type="dark" variant="dark" class="container">
        <img src="../assets/mundo.png" alt="Bootstrap" width="32" height="32" >
        <b-navbar-brand href="#" class="mx-1">Países</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/Continente" class="nav-link active" aria-current="page">Continente</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/Pais" class="nav-link" aria-current="page">Pais</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>

<script>

export default {
  name: "NavBar",
};
</script>

