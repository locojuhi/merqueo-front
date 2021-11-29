<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transporters"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="purple"
              @click="requestTransporterOrders(row.item.id)"
            >
              <v-icon dark>mdi-basket</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Actions", value: "id" },
      ],
    };
  },
  name: "TransportersTable",
  computed: {
    transporters: {
      get() {
        return this.$store.state.transporters;
      },
    },
  },
  methods: {
    requestTransporterOrders: (transporterId) => {
      console.log("Button clickes", transporterId);
    },
    ...mapGetters(["getTransportersList"]),
    ...mapActions(["updateTransporterList"]),
  },
  created() {
    this.$store.dispatch("updateTransporterList");
  },
};
</script>

<style></style>
