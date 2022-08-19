import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    departments: [],
    imageIDs: [],
    token: '',
    movies:[]
  },

  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },

    addDepartments(state, deps) {
      state.departments = deps;
    },
    addMovie(state, deps) {
      state.movies.push = deps;
    },

    setImageIDs(state, ids) {
      state.imageIDs = ids;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
       console.log(state.token);
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    addIDsToDepartment(state, obj) {
      const department = state.departments.filter( dep => dep.departmentId == obj.id )[0];
      department['imageIDs'] = obj.imageIDs;
    }
  },

  actions: {
    fetchDepartments({ commit }) {
      fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
        .then( obj => obj.json() )
          .then( res => commit('addDepartments', res.departments) );
    },

    async fetchIDsByDepartment({ commit, state }, depID) {

      const department = state.departments.filter( dep => dep.departmentId === depID )[0];
      if (department && department['imageIDs']) {
        commit('setImageIDs', department['imageIDs']);
      } else {
        const obj = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${depID}`);
        const res = await obj.json();

        commit('addIDsToDepartment', {
          id: depID,
          imageIDs: res.objectIDs
        });

        commit('setImageIDs', res.objectIDs);
      }
    },
    register({ commit }, obj) {
      console.log('USAOOO1');
      console.log(obj);
      fetch('http://localhost:9000/register', { //8000
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        // .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
        //,mode:'no-cors'
    }).then( res => res.json() )
      // .then( tkn => {
      //   if (tkn.msg) {
      //     alert(tkn.msg);
      //   } else {
      //     commit('setToken', tkn.token)
         
      //   }
      // });
    },check({commit,state }, obj){
      fetch('http://localhost:8001/admin/check', {

        method: 'GET',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${state.token}`,
            'Content-Type': 'application/json'}
            //,mode:'no-cors'
            
        }).then(res => console.log(res))
        //.then(rez => console.log('User ' + rez));
      
    },

    getItem({ commit, state }, id) {
      return new Promise( (resolve, reject) => {
        const item = state.items.filter( item => item.objectID == id )[0];
        
        if (item) {
          resolve(item);
        } else {
          fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then( obj => obj.json())
            .then( res => {
              commit('addItem', res);
              resolve(res);
            });
        }
      });
    },getMovie({commit,state}){

      console.log('RADII')
      fetch('http://localhost:8001/admin/allfilms', {
      
       // method: 'GET',
       // withCredentials: true,
        //credentials: 'include',
        //headers: {
           // 'Authorization': `Bearer ${state.token}`,
           // 'Content-Type': 'application/json'}
            //body: JSON.stringify(obj)
           // ,
            //mode:'no-cors'
                    
    }).then(res => console.log('Movies ' + res.json))
     .then(resss =>  console.log('OVO JE FILM ' + resss))
    // .then(ress =>  commit('addMovie', ress))

    }
  }
})
