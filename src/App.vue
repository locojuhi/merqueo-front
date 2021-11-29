<template>
  <v-app>
    <v-container fluid>
      <v-card>
        <v-app-bar app color="primary" dark> </v-app-bar>
      </v-card>
      <v-main>
        <v-row>
          <v-card>
            <v-navigation-drawer permanent expand-on-hover>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      src="https://randomuser.me/api/portraits/women/85.jpg"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      Sandra Adams
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >sandra_a88@gmail.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
              <v-list nav dense>
                <router-link to="/">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title> Go to Home </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/products">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-food</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title> Go to products</v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/orders">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-basket</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Go to orders </v-list-item-title>
                  </v-list-item>
                </router-link>
                <router-link to="/transporters">
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title> Go to transporters </v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list>
            </v-navigation-drawer>
          </v-card>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
