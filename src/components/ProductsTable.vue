<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        { text: "Product", value: "product.name" },
        { text: "Quantity", value: "quantity" },
      ],
    };
  },
  name: "ProductsTable",
  computed: {
    products: {
      get() {
        console.log(this.$store.state.products);

        return this.$store.state.products;
      },
    },
  },
  methods: {
    ...mapGetters(["getProductList"]),
    ...mapActions(["updateProductList"]),
  },
  created() {
    this.$store.dispatch("updateProductList");
  },
};
</script>

<style></style>
