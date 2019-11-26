<template>
  <v-app>
    <v-app-bar app color="teal darken-2" dark>
      <div class="d-flex align-center">
        <router-link to="home">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../src/assets/logo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>

        <h1>LINKr</h1>
      </div>

      <v-spacer></v-spacer>

    <!-- <v-content align-right v-if="isLoggedIn()"> -->
      <button v-if="isLoggedIn()" align-right class="lk-btn-2" color="lighten-1 white--text" v-on:click="logout()">Logout</button>
    <!-- </v-content> -->
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import router from '@/router';

export default {
  name: 'App',

  methods: {
    logout: function() {
      localStorage.clear();
      router.push('login');
    },
    isLoggedIn: function() {
      // console.log('isLoggedIn -->', localStorage.getItem('token') !== null);
      return localStorage.getItem('token') !== null;
    }
  }
};
</script>

<style lang="scss">
  .lk-btn {
    background-color: #26a69a;
    border-color: #26a69a;
    padding: 0 8px;
    height: 36px;
    width: 130px;
    color: #FFFFFF;
    caret-color: #FFFFFF;
    will-change: box-shadow;
    font-size: 0.875rem;
  }
  .lk-btn-2 {
    padding: 0 8px;
    height: 36px;
    width: 130px;
    color: #FFFFFF;
    caret-color: #FFFFFF;
    will-change: box-shadow;
    font-size: 0.875rem;
  }
</style>
