import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    departments: [],
    imageIDs: [],
    token: '',
    movies:[],
    data:{
      MName:"b",
      copies:"b",
      duration:"b",
      RName:"b",
      RLName:"b",
      RBirth:"b",
      RTown:"b",
      GName:"b",
      GLName:"b",
      GBirth:"b",
      GTown:"b"
    },
    privilageAdmin: '',
    privilageModerator: '',
    privilageUser: '',
    privilageUser2: '',
    singleMovie: '',
    rentedMovies: [],
    dataa:'',
    dataa2:'',
    dataa3:'',
    reziser:'',
    glumac:''
  },

  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },

    addDepartments(state, deps) {
      state.departments = deps;
    },

    setImageIDs(state, ids) {
      state.imageIDs = ids;
    },

    addIDsToDepartment(state, obj) {
      const department = state.departments.filter( dep => dep.departmentId == obj.id )[0];
      department['imageIDs'] = obj.imageIDs;
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
       //console.log(state.token);
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    saveReziser(state, obj) {
    
      console.log('ID REZISERA ' + JSON.stringify(obj))
      console.log('ID REZISERA ' + JSON.stringify(obj).split(',')[0].split(':')[1],)

    state.reziser ={
        IDR: JSON.stringify(obj).split(',')[0].split(':')[1],
       
      }
    },saveGlumac(state, obj) {
     
   
      console.log('ID GLUMCA ' + JSON.stringify(obj))
      console.log('ID GLUMCA ' + JSON.stringify(obj).split(',')[0].split(':')[1])

    state.glumac ={
        IDG: JSON.stringify(obj).split(',')[0].split(':')[1],
        //Count: JSON.stringify(parseInt(obj.split(',')[5].split(':')[1].split('"')[1]) - 1)

      }
    },addUnrentedRentedMovie(state,obj){
     // console.log('OVO JE UNRENTEDRENTED MOVIEEE ' + JSON.stringify(obj))

      const data ={
        Naziv: JSON.stringify(obj).split(',')[1].split(':')[1],
        // Reziser: obj.split(',')[2].split(':')[1],
        // Glumac: obj.split(',')[3].split(':')[1],
        // Count: obj.split(',')[5].split(':')[1],

      }
     // var count  = parseInt(obj.split(',')[5].split(':')[1].split('"')[1]) - 1 
      //console.log('DATA1 ' + count)
      //console.log('DATA2 ' + JSON.stringify(data))

    state.dataa2 ={
        Naziv: JSON.stringify(obj).split(',')[1].split(':')[1].split('"')[1],
        //Count: JSON.stringify(parseInt(obj.split(',')[5].split(':')[1].split('"')[1]) - 1)

      }
    //state.rentedMovies.push(/*JSON.stringify(*/data/*)*/);
    },
    gettMovie(state,obj){
     // console.log('KKKK ' + JSON.stringify(obj))

      const data ={
        Naziv: JSON.stringify(obj).split(',')[1].split(':')[1],
        Reziser: JSON.stringify(obj).split(',')[2].split(':')[1],
        Glumac: JSON.stringify(obj).split(',')[3].split(':')[1],
        Count: JSON.stringify(obj).split(',')[5].split(':')[1],

      }
     var count  = parseInt(JSON.stringify(obj).split(',')[5].split(':')[1].split('"')[1]) + 1 
    //  console.log('DATAAAAA ' + count)
      //console.log('DATA2 ' + JSON.stringify(data))

    state.dataa3 ={
        Naziv: JSON.stringify(obj).split(',')[1].split(':')[1].split('"')[1],
        Count: JSON.stringify(parseInt(JSON.stringify(obj).split(',')[5].split(':')[1].split('"')[1]) + 1)

      }
    //state.rentedMovies.push(/*JSON.stringify(*/data/*)*/);
    },
    addRentedMovie(state,obj){
      //console.log('OVO JE RENTED MOVIEEE ' + obj)

      const data ={
        Naziv: obj.split(',')[1].split(':')[1],
        Reziser: obj.split(',')[2].split(':')[1],
        Glumac: obj.split(',')[3].split(':')[1],
        Count: obj.split(',')[5].split(':')[1],

      }
      var count  = parseInt(obj.split(',')[5].split(':')[1].split('"')[1]) - 1 
     //console.log('DATA1 ' + count)
      //console.log('DATA2 ' + JSON.stringify(data))

    state.dataa ={
        Naziv: obj.split(',')[1].split(':')[1].split('"')[1],
        Count: JSON.stringify(parseInt(obj.split(',')[5].split(':')[1].split('"')[1]) - 1),
       // IDG:

      }
    //state.rentedMovies.push(/*JSON.stringify(*/data/*)*/);
    },
    rentMovie(state, obj) {
      //console.log('OVO JE RENTED MOVIEEE ' + obj)

        const data ={
          Naziv: obj.split(',')[1].split(':')[1]
        
        }
       
       // console.log('DATA2 ' + JSON.stringify(data))

      state.rentedMovies.push(/*JSON.stringify(*/data/*)*/);
    },

    addMovie(state, obj) {
        //const id = obj.split(',')[0].split(':')[1];
       // console.log('OVO JE OBJ ' + obj)

        const data ={
          Naziv: obj.split(',')[1].split(':')[1],
          Reziser: obj.split(',')[2].split(':')[1],
          Glumac: obj.split(',')[3].split(':')[1],

        }
      state.movies.push(/*JSON.stringify(*/data/*)*/);

    
     },
    setPrivilageAdmin(state,obj){
      state.privilageAdmin = obj;
     // console.log('Admin ' + state.privilageAdmin);
    },
    setPrivilageModerator(state,obj){
      state.privilageModerator = obj;
      //console.log('Moderator ' + state.privilageModerator);
    },
    setPrivilageUser(state,obj){
      state.privilageUser = obj;
      //console.log('User ' + state.privilageUser);
    },
    setPrivilageUser2(state,obj){
      state.privilageUser2 = obj;
      //console.log('User2 ' + state.privilageUser2);
    }
    ,
    setSingleMovie(state,obj){
      state.singleMovie = obj;
     // console.log('SingleMovie ' + state.singleMovie);
    }
  },

  actions: {

   
    fetchDepartments({ commit, state }) {

     //console.log('OVO JE FETCH')
    // console.log('OVO JE token ' + state.token)

    if(state.token == ''){
      commit('setToken', '2')
    }
    fetch('http://localhost:8001/admin/allfilms', {
      
      method: 'GET',
     // withCredentials: true,
      //credentials: 'include',
      headers: {
          'Authorization': `Bearer ${state.token}`,
          'Content-Type': 'application/json'},
          //body: JSON.stringify(obj)

                  
  }).then(res => res.json())
  .then(resss =>  {console.log('OVO JE FILM ' + JSON.stringify(resss)),state.movies.map(el =>{
    state.movies.pop();
  }),state.movies.pop(),resss.map(id => {
    commit('addMovie', JSON.stringify(id))
  }) } )

  
  //.then(ress =>  commit('addMovie', ress))


    },
    /*async*/ getItem({ commit, state },id) {

      //console.log('GET ITEMS DEO');
      //console.log(state.movies);
      //console.log("TOKEN " + state.token);


     /*await*/  fetch('http://localhost:8001/admin/searchF', {
      
        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(id)

                    
    }).then(res => res.json())
     .then(resss =>  commit('setSingleMovie', resss))
     //.then(resss =>  console.log('OVO JE CEO FILM PO IMENU VRACEN ' + resss))

    //  .then(res => res.json())
    //       .then(rez => console.log('User ' + rez));
    // .then(ress =>  commit('addMovie', ress))



      //   fetch('http://localhost:8001/admin/allfilms', {
            
      //     method: 'GET',
      //   // withCredentials: true,
      //     //credentials: 'include',
      //     headers: {
      //         'Authorization': `Bearer ${state.token}`,
      //         'Content-Type': 'application/json'},
      //         //body: JSON.stringify(obj)

                      
      // }).then(res => res.json())
      // .then(ress =>  {console.log('OVO JE FILM ' + ress);commit('addMovie', ress);} )



    },

    register({ commit }, obj) {
      //console.log('USAOOO1');
     // console.log(obj);
      fetch('http://localhost:9000/register', { //8000
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {

      //console.log('Usao u login')
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
         
        }
      });

      
    },
    modifyU({ commit,state }, obj) {
      //console.log('OVO JE token ' + state.token)

    fetch('http://localhost:8001/admin/modUser', {
            
                method: 'POST',
               // withCredentials: true,
                //credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${state.token}`,
                    'Content-Type': 'application/json'},
                    body: JSON.stringify(obj)

                            
            }).then(res => res.json())
              


    },
    deleteU({ commit,state }, obj) {

      fetch('http://localhost:8001/admin/delUser', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
  
      },
    modifyR({ commit,state }, obj) {
      fetch('http://localhost:8001/admin/modifyR', {

        method: 'POST',
        //withCredentials: true,
       // credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
      },
    modifyG({ commit,state }, obj) {
      fetch('http://localhost:8001/admin/modifyG', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
      },
    deleteR({ commit,state }, obj) {
      //console.log('fetch')
      fetch('http://localhost:8001/admin/deleteR', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
      },
    deleteG({ commit,state }, obj) {
      fetch('http://localhost:8001/admin/deleteG', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })
      },
      checkUserOnly({commit,state }, obj){
        
        fetch('http://localhost:9000/check', {

          method: 'GET',
          headers: {
              'Content-Type': 'application/json'}
              
          }).then(res => res.json())
          //.then(rezz => {commit('setPrivilageAdmin', rezz.privilageAdmin),commit('setPrivilageModerator', rezz.privilageModerator),commit('setPrivilageUser', rezz.privilageUser)});
          .then(rezz => {commit('setPrivilageUser2', rezz.privilageUser)});
          //.then(rez => commit('setPrivilage', rez));





      }, check({commit,state }, obj){
        //console.log('OVO JE TOKEN ' + state.token)
        fetch('http://localhost:8001/admin/check', {

          method: 'GET',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'}
              
          }).then(res => res.json())
          .then(rezz => {commit('setPrivilageAdmin', rezz.privilageAdmin),commit('setPrivilageModerator', rezz.privilageModerator),commit('setPrivilageUser', rezz.privilageUser)});
          //.then(rez => commit('setPrivilage', rez));

      },
    deleteM({ commit,state }, obj) {

      fetch('http://localhost:8001/admin/deleteF', {

          method: 'POST',
         // withCredentials: true,
          //credentials: 'include',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'},
              body: JSON.stringify(obj)
          })

  
      },
    modifyUser({ commit,state }, obj) {
  
      //console.log('OVO JE token2 ' + state.token)


      fetch('http://localhost:8001/admin/modU', {
    
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj),
            

        })              
    // }).then(res => res.json())
    //     .then(rez => console.log(rez));
      },

    addM({ commit, state  }, obj) {
      // obj = obj.json();
        //console.log(obj)
     // obj = JSON.parse(JSON.stringify(this.obj));

      //var msg = ''
      //RADIIIIII
      
      

          // fetch('http://localhost:8001/admin/searchF', {

          // method: 'POST',
          // withCredentials: true,
          // credentials: 'include',
          // headers: {
          //     'Authorization': `Bearer ${state.token}`,
          //     'Content-Type': 'application/json'},
          //     body: JSON.stringify(obj)
          // }).then(res => console.log(res.json().body))
          // .then(rez => console.log('OVO JE film  ' + rez));
          // //.then(rez => msg = rez.id);
          // console.log('OVO JE ID ' + msg)
          

          fetch('http://localhost:8001/admin/addfilm', {

            method: 'POST',
           // withCredentials: true,
            //credentials: 'include',
            headers: {
                'Authorization': `Bearer ${state.token}`,
                'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            })
            
      fetch('http://localhost:8001/admin/addG', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        })

        fetch('http://localhost:8001/admin/addR', {

          method: 'POST',
         // withCredentials: true,
         // credentials: 'include',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'},
              body: JSON.stringify(obj)
          })

          
        

           // console.log('CAOO4');
       
     // commit('addMovie', obj);
      
      //console.log(state.items.values)
    },
    
    async rent({ commit,state }, obj) {
        console.log('usao u rent')
        console.log('OVO JE OBJEKAT ' + JSON.stringify(obj))

      await fetch('http://localhost:8001/admin/rentF', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(res =>res.json())
        //.then(rez => console.log('OVO JE RENTOVAN FILM ' + rez))
        .then(r => commit('addRentedMovie',r))

          console.log('data ' + JSON.stringify(state.dataa))
       fetch('http://localhost:8001/admin/RUFilm', {

        method: 'POST',
        
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(state.dataa)
        }).then(res =>res.json())
        .then(rez => console.log('DONEE ' + rez))
        //.then(r => commit('rentMovie',r))


        console.log('tu jee')
        fetch('http://localhost:8001/admin/createRF', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(res =>res.json())
        .then(rez => console.log('DONEE ' + rez))
        //.then(r => commit('rentMovie',r))

    },
    searchRentedMovies({ commit,state }, obj) {
      //console.log('usao u search rent')

    fetch('http://localhost:8001/admin/allRF', {

      method: 'GET',
      //withCredentials: true,
      //credentials: 'include',
      headers: {
          'Authorization': `Bearer ${state.token}`,
          'Content-Type': 'application/json'},
         // body: JSON.stringify(obj)
      }).then(res =>res.json())
      //.then(rez => console.log('OVO JE RENTOVAN FILM ' + rez))
      .then(r => {state.rentedMovies.map(el =>{
        state.rentedMovies.pop();
      }),state.rentedMovies.pop(),r.map(id => {
        commit('rentMovie', JSON.stringify(id))
      })})

  },
  async unrent({commit,state},obj){
    await fetch('http://localhost:8001/admin/firstFindF', {

        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(res =>res.json())
        //.then(rez => console.log('OVO JE RENTOVAN FILM ' + rez))
        .then(r => commit('addUnrentedRentedMovie',r))


       await fetch('http://localhost:8001/admin/recoveryfindF', {

          method: 'POST',
          //withCredentials: true,
          //credentials: 'include',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'},
              body: JSON.stringify(state.dataa2)
          }).then(res =>res.json())
          //.then(rez => console.log('DONEE ' + JSON.stringify(rez)))
          .then(r => commit('gettMovie',r))


          fetch('http://localhost:8001/admin/recoveryF', {

          method: 'POST',
          //withCredentials: true,
          //credentials: 'include',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'},
              body: JSON.stringify(state.dataa3)
          }).then(res =>res.json())
         // .then(rez => console.log('DONEE ' + JSON.stringify(rez)))
          //.then(r => commit('gettMovie',r))



          fetch('http://localhost:8001/admin/deleteRF', {

          method: 'POST',
          //withCredentials: true,
          //credentials: 'include',
          headers: {
              'Authorization': `Bearer ${state.token}`,
              'Content-Type': 'application/json'},
              body: JSON.stringify(state.dataa3)
          }).then(res =>res.json())
          //.then(rez => console.log('DONEE ' + JSON.stringify(rez)))
          //.then(r => commit('gettMovie',r))

  },
  async findR({ commit,state }, obj) {
      console.log('objj ' + JSON.stringify(obj))
    await fetch('http://localhost:8001/admin/findR', {

        method: 'POST',
       // withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(res =>res.json())
        //.then(rez => console.log('Reziserrrr ' + JSON.stringify(rez)))
        .then(r => commit('saveReziser',r))

    
       // const d = JSON.stringify(obj).split(',')[1].split(':')[1]
    await fetch('http://localhost:8001/admin/findG', {

        method: 'POST',
       // withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }).then(res =>res.json())
        //.then(rez => console.log('Reziserrrr ' + JSON.stringify(rez)))
        .then(r => commit('saveGlumac',r))

    }
  
  }
})
