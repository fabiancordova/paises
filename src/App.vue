<template>
  <div id="app">
    <div class="container">
      <NavBar></NavBar>
      <!-- efectos de transición -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1em;
}

#search{
    width: 300px;
    height: 150px;
    margin: auto;
    margin-top: 20px;
    padding: 15px;
}

/* efectos de transición */
.fade-enter-active,
  .fade-leave-active {
    transition: opacity .9s
}
.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
}
/* fin efectos de transición */

</style>
