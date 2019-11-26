<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="teal lighten-1"
              dark
              flat
            >
              <v-toolbar-title>Create your free account</v-toolbar-title>
              <v-spacer />

            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  color="teal lighten-1"
                  label="Full name"
                  name="login"
                  prepend-icon="person"
                  type="text"
                  v-model="userInfo.fullName"
                />

                <v-text-field
                  color="teal lighten-1"
                  label="Email address"
                  name="login"
                  prepend-icon="email"
                  type="text"
                  v-model="userInfo.email"
                />

                <v-text-field
                  id="password"
                  color="teal lighten-1"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                  v-model="userInfo.password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="teal lighten-1 white--text" dark v-on:click="register()">Register</v-btn>
              <v-spacer />
            </v-card-actions>

            <v-card-actions>
              <v-spacer />
              <a href="/login" style="font-size: 11px">Login</a>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import http from '../http';
import router from '@/router';

export default {
  name: 'Register',

  data: () => ({
    userInfo: {
      fullName: "",
      email: "",
      password: "",
    }
  }),

  methods: {
    register: function() {
      http
        .post('/users', this.userInfo)
        .then(res => {
          const { status, data: { token, user }} = res;
          const { fullName, email, _id } = user;

          localStorage.fullName = fullName;
          localStorage.email = email;
          localStorage.token = token;
          localStorage._id = _id;

          http.defaults.headers["Authorization"] = token;
          http.defaults.headers.common["Authorization"] = token;

          console.log({ status });
          router.push('home')
        }).catch(ex => {
          const { response: { data: { error: { statusCode, data: [ displayableError ] } }}} = ex;
          console.log('error creating account', { statusCode, displayableError });
        });
      
    }
  }
}
</script>