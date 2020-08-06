<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <SideMenu />
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hardware Handler - RPC Phase-2</v-toolbar-title>
      <v-spacer />
      <BottonLogSheet />
    </v-app-bar>

    <v-main>
        <keep-alive>
          <router-view />
        </keep-alive>
    </v-main>
    
  </v-app>
</template>

<script>
// import RunControl from "./components/RunControl";
import SideMenu from "./components/SideMenu";
import BottonLogSheet from "./components/BottonLogSheet";

export default {
  props: {
    source: String
  },
  data: () => ({
    // side bar (drawer state)
    drawer: true,
  }),
  components: {
    SideMenu,
    BottonLogSheet,

  }
};
</script>
