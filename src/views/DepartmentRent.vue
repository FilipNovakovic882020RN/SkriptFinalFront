<template>
  <div id="app">
    <!-- <Header :subtitle="subtitle"/> -->
    <!-- <h1>LALAL</h1> -->
    <h1>Rented Movies</h1>
    <RentedMovies />
  </div>
</template>

<script>
  //import Header from '@/components/Header.vue';
 // import ImageList from '@/components/ImageList.vue';
  import { mapActions } from 'vuex';
import RentedMovies from './RentedMovies.vue';

  export default {
    name: 'DepartmentRentedMovies',
    
    components: {
   // Header,
    //ImageList,
    RentedMovies
},

    data() {
        return {
            //subtitle: '',
            depID: null
        }
    },

    watch: {
      $route() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        //this.fetchIDsByDepartment(this.depID);
      }
    },

    mounted() {
        //this.subtitle = this.$route.params.name;
        //this.depID = this.$route.params.id;

        this.searchRentedMovies();
    },

    methods: {
      ...mapActions([
        'searchRentedMovies'
      ])
    }
  }
</script>

<style scoped>

</style>
