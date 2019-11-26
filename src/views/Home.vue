<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'Home',
  
  created: function() {
    console.log('home:created', localStorage.getItem('token') === null);
    if (localStorage.getItem('token') === null) {
      router.push('login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
