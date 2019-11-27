<template>
  <v-content>
    <v-container fluid class="show v-card">
      <v-col>
        <input type="text" color="teal lighten-1" class="lk-input" name="url" placeholder="Shorten your link" v-model="pageData.url">
        
        <button id="shorten_btn" color="teal lighten-1 white--text" @click.prevent="shorten()">Shorten</button>
      </v-col>
    </v-container>

    <v-container fluid class="show">
      <div id="shorten_actions" style="">
        <ul id="most_recent_links" class="anon_history">
          <li class="link" v-for="link in links" v-bind:key="link._id">
            <span class="long-link">{{ link.url }}/</span>
            <span>
              <span class="short-link">
                <a :href="link.shortUrl" target="_blank">{{ link.shortUrl }}</a>
              </span>

              <span class="copy">
                <button v-clipboard="link.shortUrl" class="copy-btn">Copy</button>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </v-container>

  </v-content>
</template>

<script>
import router from '@/router';
import http from '../http';

export default {
  name: 'Home',

  data: () => ({
    pageData: {
      url: "",
    },
    links: null,
    baseUrl: null
  }),
  
  mounted: function() {
    console.log(':mounted')
    if (localStorage.getItem('token') === null) {
      router.push('login');
    }

    http.defaults.headers.Authorization = localStorage.getItem('token');

    http
      .get('/links')
      .then(res => {
        const { data: { links, baseUrl }} = res;
        
        this.links = links;
        this.baseUrl = baseUrl

        console.log({ baseUrl, links })
      }).catch(ex => {
        const { response: { status, data: { message }}} = ex;
        console.log({ status, message })
      })
    ;
  },

  methods: {
    shorten: function() {
      http.defaults.headers.Authorization = localStorage.getItem('token');

      http
        .post('/links', this.pageData)
        .then(res => {
          const { data: { link }} = res
          console.log({ link })
          
          this.links.unshift(link)
        }).catch(ex => {
          const { response: { status, data: { message }}} = ex;
          console.log({ status, message })
        })
      ;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #shorten_btn {
    // vertical-align: bottom;
    margin-bottom: 0;
    background: #26A69A;
    min-width: 20%;
    float: right;
    outline: none;
    // position: relative;
    font-size: 20px;
    line-height: 1.11;
    padding: 18px 30px;
    border-radius: 8px;
    color: white;
    transition: background 100ms linear;
    text-decoration: none;
    outline: none !important;
    margin: 0 0 1rem 0;
    text-align: center;
    cursor: pointer;
  }

  .lk-input {
    width: 75%;
    height: 60px;
    background: #fff;
    border: 1px solid #d3d4d7;
    border-radius: 8px 8px 8px 8px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 20px;
    color: #7b533d;
    padding: 0 20px;
    box-shadow: inset 0 1px 2px #26A69A;
    font-weight: 400;
    line-height: 1.5;
    outline-color: #B2DFDB;
  }

  #shorten_actions {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.4em;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    padding: 0;
    border-radius: 8px 8px 8px 8px;
  }
  #most_recent_links {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    -webkit-box-direction: normal;
    box-sizing: inherit;
    line-height: 1.6;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    background-color: #ddedef;
    border-radius: 8px 8px 8px 8px;
  }
  .link {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-box-direction: normal;
    list-style: none;
    box-sizing: inherit;
    margin: 0;
    line-height: normal;
    margin-bottom: 5px;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-size: 18px;
    display: flex;
  }
  .long-link {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-box-direction: normal;
    list-style: none;
    line-height: normal;
    font-size: 18px;
    box-sizing: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
    display: inline-block;
    vertical-align: middle;
  }
  .short-link {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-box-direction: normal;
    list-style: none;
    line-height: normal;
    font-size: 18px;
    box-sizing: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 25px;
  }
  .copy {
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #1d1f21;
    font-family: "ProximaNova Regular","Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-box-direction: normal;
    list-style: none;
    line-height: normal;
    font-size: 18px;
    box-sizing: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
    display: inline-block;
    vertical-align: middle;
  }
  .copy-btn {
    -webkit-font-smoothing: antialiased;
    -webkit-box-direction: normal;
    list-style: none;
    white-space: nowrap;
    box-sizing: inherit;
    overflow: visible;
    text-transform: none;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid transparent;
    font-family: inherit;
    -webkit-appearance: none;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    transition: background 100ms linear;
    text-decoration: none;
    line-height: normal;
    outline: none !important;
    padding: .6em 1em;
    background: #edf2fe;
    color: #2a5bd7;
    margin: 0;
    font-size: 16px;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
