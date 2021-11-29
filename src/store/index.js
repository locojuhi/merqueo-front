import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    updateProductList(state, products) {
      state.products = products;
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
      commit("updateProductList");
    },
  },
  getters: {
    getProductList: (state) => {
      state.products;
    },
  },
  modules: {},
});
