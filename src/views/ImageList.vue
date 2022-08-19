<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="movies.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-table
    
      id="image-table"
      hover
      fixed
      :items="items"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      
      @row-clicked="rowClicked"
    >
      <template v-slot:cell(actions)="{ item }">
      <span><b-btn @click="rent(item)">Rent</b-btn></span>
    </template>
     
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="movies.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-form @submit="onSubmit">
    <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'ImageList',

    data() {
      return {
        // fields: ['obj','Movie','Copies','Duration','Reziser','Actors'],
        fields: ['MName','actions'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        // 'imageIDs'
        'movies'
      ])
    },

    // watch: {
    //   // currentPage(nVal, oVal) {
    //   //   this.imageIDs.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
    //   //     this.getItem(id).then( obj => this.items.push(obj) );
    //   //   });
    //   // },

    //   // movies(nVal, oVal) {
    //   //   // this.currentPage = 1;
    //   //   // this.items = [];

    //   //   // nVal.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
    //   //   //   this.getItem(id).then( obj => this.items.push(obj) );
    //   //   // });
    //   // }
    // },
    

    mounted() {
      
      console.log('usaoooooooooo')
      //this.items.push(this.movies[0])
      
     // this.getItems();
     console.log('Film ' + JSON.stringify(this.movies[0]))
      this.items.push(this.movies[0])

  
      
    },

    methods: {
      ...mapActions([
        'getMovie'
      ]),
       onSubmit(e) {
        e.preventDefault();

          this.$router.push({ name: 'Single', params: { id: 'b' } }); //this.movies[1].MName
      },

      rowClicked(record, index) {
        this.$router.push({ name: 'Single', params: { id: 'b' } }); //this.movies[1].MName
      }
    }
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>