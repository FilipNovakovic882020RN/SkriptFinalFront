<template>
  <div>
    <!-- <h1>Movies</h1> -->
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
      :items="this.movies"
      :fields = "fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      
      @row-clicked="rowClicked"
    >
      <!-- <template v-slot:cell(actions)="{ item }">
      <span><b-btn @click="rent(item)">Rent</b-btn></span>
    </template> -->
     
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="movies.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <!-- <b-form @submit="onSubmit">
    <b-button type="submit" variant="primary">Submit</b-button>
    </b-form> -->
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'ImageList',

    data() {
      return {
        // fields: ['obj','Movie','Copies','Duration','Reziser','Actors'],
        fields: ['Naziv','Reziser','Glumac'/*,'actions'*/],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        // 'imageIDs'
        'movies',
        'privilageAdmin',
        'privilageModerator',
      ])
    },

    watch: {
      // currentPage(nVal, oVal) {
      //   this.imageIDs.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
      //     this.getItem(id).then( obj => this.items.push(obj) );
      //   });
      // },

      movies(nVal, oVal) {
        // this.currentPage = 1;
        // this.items = [];

        // nVal.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
        //   this.getItem(id).then( obj => this.items.push(obj) );
        // });
       // this.getItem().then( obj => this.items.push(obj) );
        // console.log('aaa ' + this.movies[0].id)
      }
    },
    

    mounted() {
      
     // console.log('aaa ' + this.movies[0])
      //this.items.push(this.movies[0])
      
      //this.getItem();
     
      this.items.push(this.movies[0])

  
      
    },

    methods: {
      ...mapActions([
        'getItem'
      ]),
       onSubmit(e) {
        e.preventDefault();

        //  this.getItem();
       // console.log('Film ' + this.movies[5])
      },

      rowClicked(record, index) {
        //console.log('Admin ' + this.privilageAdmin + ', Moderator ' + this.privilageModerator)
        if(this.privilageAdmin == 0 && this.privilageModerator == 0){
        // console.log('IME ' + this.movies[0].MName);
        // console.log('film ' + this.movies[0]);
        // const str = record.Naziv.str.replace('/"','')
        const str = record.Naziv.split('"')[1]
        //  console.log('Record '  + str)
        this.$router.push({ name: 'Single', params: { id: str } }); //this.movies[1].MName
        }
      }
    }
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>