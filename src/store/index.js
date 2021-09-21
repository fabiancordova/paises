import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pais: "",
    datos:{},
    region: "",
  },
  mutations: {

    LOAD_PAIS: (state, datosFiltrados) => {
      state.pais= state.pais[0].toUpperCase() + state.pais.slice(1);
      state.datos= datosFiltrados.filter( (dato) => dato.name == state.pais)
    },
    LOAD_REGION: (state, payload) => (state.region = payload),
    LOAD_nombrePAIS: (state, payload) => (state.pais = payload),

    LOAD_CONTINENTE: (state, datosFiltrados) => {
      switch (state.region) {
        case 'Americas':
          state.datos= datosFiltrados.filter( (dato) => dato.region == "Americas");
            break;
        case 'Europe':
          state.datos= datosFiltrados.filter( (dato) => dato.region == "Europe");
            break;
        case 'Asia':
          state.datos= datosFiltrados.filter( (dato) => dato.region == "Asia");
            break;
        case 'Africa':
          state.datos= datosFiltrados.filter( (dato) => dato.region == "Africa");
            break;
        case 'Oceania':
          state.datos= datosFiltrados.filter( (dato) => dato.region == "Oceania");
            break;
        default:
          state.datos= datosFiltrados;
        }
    }

  },
  actions: {
    //consumo de API pública de países en el mundo.  
    async  GET_REGION (state, region) {
      let res= await fetch("https://restcountries.eu/rest/v2/all");
      let datos= await res.json();
      datos= datos.sort( (a,b) => b.population - a.population)
      state.commit("LOAD_REGION",region);
      state.commit("LOAD_CONTINENTE",datos);
    },
    async  GET_pais(state) {
      let res= await fetch("https://restcountries.eu/rest/v2/all");
      let datos= await res.json();
      datos= datos.sort( (a,b) => b.population - a.population)
      state.commit("LOAD_PAIS",datos)
    }
  },
});


