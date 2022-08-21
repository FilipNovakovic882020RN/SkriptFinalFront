<template>
  <div id="app">

    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-brand to="/">PopCorn</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            
            

           <b-nav-item-dropdown v-if="privilageAdmin == 1" text="User" class="user">
              <b-dropdown-item
                v-for="opt in userOptions"
                :key="opt.id"
                :to="`/${opt.rout}`">
                {{ opt.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown v-if="privilageAdmin == 1 || privilageModerator == 1 " text="Glumac">
              <b-dropdown-item
                v-for="opt in glumacOptions"
                :key="opt.id"
                :to="`/${opt.rout}`">
                {{ opt.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown v-if="privilageAdmin == 1 || privilageModerator == 1 " text="Reziser">
              <b-dropdown-item
                v-for="opt in reziserOptions"
                :key="opt.id"
                :to="`/${opt.rout}`">
                {{ opt.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

              <b-nav-item-dropdown v-if="privilageAdmin == 1 || privilageModerator == 1 " text="Movie">
              <b-dropdown-item
                v-for="opt in movieOptions"
                :key="opt.id"
                :to="`/${opt.rout}`">
                {{ opt.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            
             <b-nav-item v-if="privilageAdmin == 1 || privilageModerator == 1 || privilageUser == 1 || privilageUser == 0 || privilageUser2 == 0" to="/department">Movies</b-nav-item>


<!--             
              <b-nav-item-dropdown v-if="privilageAdmin == 1 || privilageModerator == 1 || privilageUser == 1   " text="Profile">
              <b-dropdown-item
                v-for="opt in profileOptions"
                :key="opt.id"
                :to="`/${opt.rout}`">
                {{ opt.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-nav-item v-if="privilageUser == 1" to="/departmentrentedMovies">Rented Movies</b-nav-item>
            <b-nav-item v-if="privilageAdmin == 1 || privilageModerator == 1 || privilageUser == 1" to="/edit">Edit</b-nav-item>
          </b-navbar-nav>

          <!-- <b-navbar-brand v-if="privilageUser == 1" to="/departmentrentedMovies">Rented Movies</b-navbar-brand>
          <b-navbar-brand v-if="privilageAdmin == 1 || privilageModerator == 1 || privilageUser == 1" to="/edit">Edit</b-navbar-brand> -->

          <!-- <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input v-model="searchQuery" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="search" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav> -->

          <b-navbar-nav class="ml-auto" >
          <b-nav-item v-if="!token || token == 2" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token || token == 2" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>

            <!-- <b-nav-form>
              <b-form-input v-model="searchQuery" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="search" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<script>

  import { mapActions, mapState,mapMutations } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {
        searchQuery: '',
          userOptions:[{
          'name': 'Modify',
          'rout': 'modifyUser',
          'id': 0
        }, {
          'name': 'Delete',
          'rout': 'deleteUser',
          'id': 1
        }],
        glumacOptions:[{
          'name': 'Modify',
          'rout': 'modifyGlumac',
          'id': 0
        }, {
          'name': 'Delete',
          'rout': 'deleteGlumac',
          'id': 1
        }],
        reziserOptions:[{
          'name': 'Modify',
          'rout': 'modifyReziser',
          'id': 0
        }, {
          'name': 'Delete',
          'rout': 'deleteReziser',
          'id': 1
        }],
        movieOptions:[{
          'name': 'Add',
          'rout': 'addMovie',
          'id': 0
        }, {
          'name': 'Delete',
          'rout': 'deleteMovie',
          'id': 1
        }],
        profileOptions:[{
          'name': 'Rented Movies',
          'rout': 'departmentrentedMovies',
          'id': 0
        }, {
          'name': 'Edit',
          'rout': 'edit',
          'id': 1
        }],
        ttoken:''
      }
    }
    ,
    // watch: {
    //   token() {
    //     // this.subtitle = this.$route.params.name;
    //     // this.depID = this.$route.params.id;

    //     //this.fetchIDsByDepartment(this.depID);
    //      //this.ttoken = this.token;
    //      //console.log('TT ' + this.token)
    //   }
    // },

    computed: {
      ...mapState([
        'departments',
        'token',
        'privilageAdmin',
        'privilageModerator',
        'privilageUser',
        'privilageUser2'
      ])
    },

    mounted() {
      //this.fetchDepartments();
      console.log('TOKENNNAAA ' +this.token )
      
    },
    created(){
       this.check();
    },

    methods: {
      ...mapActions([
        'fetchDepartments',
        'getMovie',
        'check'
      ]), 
      ...mapMutations([
        'removeToken',
        'setToken'
      ]),

      search(e) {
        e.preventDefault();

        const sq = this.searchQuery;
        this.searchQuery = '';
        
        this.$router.push({ name: 'Search', query: { q: sq } });
      },
      logout() {
        this.removeToken();
        this.check();
        this.$router.push({ name: 'Home'});
        
        // this.getMovie();
        //this.check();
        //console.log('OVO je privilage ' + this.privilage);
        
      }
      
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /* .user{
      display: none;
  } */
</style>
