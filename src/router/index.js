import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Department from '@/views/Department.vue';
import Single from '@/views/Single.vue';
import Search from '@/views/Search.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import UserModify from '@/views/UserModify.vue';
import AddMovie from '@/views/AddMovie.vue';
import UserDelete from '@/views/DeleteUser.vue';
import ModifyGlumac from '@/views/ModifyGlumac.vue';
import DeleteGlumac from '@/views/DeleteGlumac.vue';
import ModifyReziser from '@/views/ModifyReziser.vue';
import DeleteReziser from '@/views/DeleteReziser.vue';
import DeleteMovie from '@/views/DeleteMovie.vue';
import RentedMovies from '@/views/RentedMovies.vue';
import Edit from '@/views/Edit.vue';
import DepartmentRentedMovies from '@/views/DepartmentRent.vue';
import SingleRented from '@/views/SingleRented.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/department',
    name: 'Department',
    component: Department
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/modifyUser',
    name: 'UserModify',
    component: UserModify
  }
  ,
  {
    path: '/deleteUser',
    name: 'UserDelete',
    component: UserDelete
  },
  {
    path: '/addMovie',
    name: 'AddMovie',
    component: AddMovie
  },{
    path: '/deleteMovie',
    name: 'DeleteMovie',
    component: DeleteMovie
  },
  {
    path: '/modifyGlumac',
    name: 'ModifyGlumac',
    component: ModifyGlumac
  },
  {
    path: '/deleteGlumac',
    name: 'DeleteGlumac',
    component: DeleteGlumac
  },
  {
    path: '/modifyReziser',
    name: 'ModifyReziser',
    component: ModifyReziser
  },
  {
    path: '/deleteReziser',
    name: 'DeleteRezise',
    component: DeleteReziser
  },
  {
    path: '/rentedMovies',
    name: 'RentedMovies',
    component: RentedMovies
  },
  {
    path: '/departmentrentedMovies',
    name: 'DepartmentRentedMovies',
    component: DepartmentRentedMovies
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/singleRented',
    name: 'SingleRented',
    component: SingleRented
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
