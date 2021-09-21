<template>
  <div class="ContinenteForm">
<!-- código para seleccionar región del mundo con estilo bootstrap -->
      <div class="text-center">
        <button type="button" class="btn btn-primary" @click="seleccionarRegion('Americas')">Americas</button>
        <button type="button" class="btn btn-secondary" @click="seleccionarRegion('Europe')">Europe</button>
        <button type="button" class="btn btn-success" @click="seleccionarRegion('Asia')">Asia</button>
        <button type="button" class="btn btn-danger" @click="seleccionarRegion('Africa')">Africa</button>
        <button type="button" class="btn btn-warning" @click="seleccionarRegion('Oceania')">Oceania</button>
        <button type="button" class="btn btn-info" @click="seleccionarRegion('')">Todos</button>
      </div>

              <!-- código para mostrar información de paises según región seleccionada -->
        <div class="row">
            <div class="col-md border border-primary rounded"
             v-for="dato in $store.state.datos" :key= "dato.id">
            <b> {{dato.name}} </b>
            <br>
            <img :src="dato.flag" alt="bandera del país" width="95px" height="95px">
            <br>
            Población: {{dato.population}}
            <br>
            Capital: {{dato.capital}}
            <br>
            Región: {{dato.region}}
        </div>
      </div>

  </div> 

</template>

<script>

export default {
  name: "ContinenteForm",
  data() {
    return {
      region: ""
    }
  },
  methods: {
     seleccionarRegion(region)
    {
      this.$store.dispatch("GET_REGION", region);
    }
  }
}
</script>