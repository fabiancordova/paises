<template>
  <div class="PaisForm">

<!-- código para seleccionar país del mundo con estilo bootstrap centrado en el medio -->
      <div class="row">
        <div class="col"> 
        </div>
        <div class="col">    
            <form id="formulario">
                <div class="form-group ">
                    <label for="pais">Buscar país</label>
                    <input type="text" class="form-control border border-primary" id="pais" v-model="paisGet" @keyup.enter="buscarPais">
                    <button type="button" class="btn btn-secondary mt-2" @click="buscarPais">Buscar</button>
                </div>
            </form> 
        </div>
        <div class="col"> 
       </div>  
    </div>
    <br>
    <!-- código para mostrar información del país seleccionado -->
    <div>
        <div class="row justify-content-center">
            <div class="col"> 
            </div>
             <div class="col-sm border border-primary rounded"
                v-for="dato in $store.state.datos" :key= "dato.id">
                <b> {{dato.name}} </b>
                <br>
                <img :src="dato.flag" alt="bandera del país" width="50px" height="50px">
                <br>
                <b> Población:</b>
                <b> <span v-if="dato.population > 100000000" class="text-danger">{{dato.population}} </span> </b>
                <b> <span v-if="dato.population <= 100000000" class="text-success">{{dato.population}} </span> </b>
                <br>
                Capital: {{dato.capital}}
                <br>
                Región: {{dato.region}}
            </div>
            <div class="col"> 
            </div>
        </div>
      <div class="fondo"></div>
    </div>
  </div> 
</template>

<script>

export default {
  name: "PaisForm",
  data() {
    return {
      pais: ""
    }
  },
  computed: {
    paisGet: {
      get() {
        return this.$store.state.pais;
      },
      set(value) {
        this.$store.commit("LOAD_nombrePAIS", value);
      }
    }
  },
  methods: {
     buscarPais()
    {
         if (this.$store.state.pais ) { 
      this.$store.dispatch("GET_pais");
    }
    else {
        alert('Enter an subject, please.');
      }
    }
  }
}
</script>