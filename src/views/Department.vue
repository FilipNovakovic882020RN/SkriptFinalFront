<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <h1>Movies</h1>
    <!-- <h1>LALAL</h1> -->
    <ImageList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import ImageList from '@/components/ImageList.vue';
  import { mapActions,mapState } from 'vuex';

  export default {
    name: 'Department',
    
    components: {
      Header,
      ImageList
    },

    data() {
        return {
            subtitle: '',
            depID: null
        }
    },
    computed: {
      ...mapState([
        // 'imageIDs'
        'token'
      ])
    },

    

    mounted() {
        this.subtitle = this.$route.params.name;
        //this.depID = this.$route.params.id;
        console.log('TOKENNN ' +this.token )
        this.fetchDepartments();//this.depID);
    },

    methods: {
      ...mapActions([
        'fetchDepartments'
      ])
    }
  }
</script>

<style scoped>

</style>
