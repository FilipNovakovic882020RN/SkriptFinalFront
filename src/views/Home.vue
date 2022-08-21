<template>
  <div id="app">
    <Header subtitle="Home"/>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Popcorn_Time_logo.png?20140410070259"
      width="600"
      alt="Logo"
    />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Home',
    
    components: {
      Header
    },
    mounted() {
      //console.log('Izvrsio se mounted');
      this.checkUserOnly();
      this.check();
  
  
      
    },
     computed: {
      ...mapState([
        // 'imageIDs'
        'token'
      ])
    },
    watch:{
      token(){
          this.check();
      }
    },
     methods: {
      ...mapActions([
        'checkUserOnly',
        'check'
      ])
     }
  }
</script>
