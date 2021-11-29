import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    transporters: [],
  },
  mutations: {
    updateProductList(state, products) {
      state.products = products;
    },
    updateTransporterList(state, transporters) {
      state.transporters = transporters;
    },
  },
  actions: {
    updateProductList({ commit }) {
      axios
        .get("http://127.0.0.1:8000/api/products")
        .then((response) => {
          let responsePayload = response.data.data;
          commit("updateProductList", responsePayload.inventories);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    },
    updateTransporterList({ commit }) {
      axios
        .get("http://127.0.0.1:8000/api/transporters")
        .then((response) => {
          let responsePayload = response.data.data;
          commit("updateTransporterList", responsePayload.transporters);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    },
  },
  getters: {
    getProductList: (state) => {
      state.products;
    },
    getTransportersList: (state) => {
      state.transporters;
    },
  },
  modules: {},
});
