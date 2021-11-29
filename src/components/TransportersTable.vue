<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transporters"
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
        { text: "Name", value: "name" },
        { text: "Quantity", value: "quantity" },
      ],
    };
  },
  name: "TransportersTable",
  computed: {
    transporters: {
      get() {
        console.log(this.$store.state.transporters);

        return this.$store.state.transporters;
      },
    },
  },
  methods: {
    ...mapGetters(["getTransportersList"]),
    ...mapActions(["updateTransporterList"]),
  },
  created() {
    this.$store.dispatch("updateTransporterList");
  },
};
</script>

<style></style>
