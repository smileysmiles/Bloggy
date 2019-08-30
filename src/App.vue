<template>
  <v-app>
    <Menu></Menu>


    <v-content>
      <v-container fluid="">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },
  data: () => ({
    item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  }),
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4c502c;
}

#nav a.router-link-exact-active {
  color: #b9425c;
}

</style>
