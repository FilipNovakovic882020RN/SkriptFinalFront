<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Modify User"/>

        <b-form @submit="onSubmit">
    
        <b-form-group label="User Name:" label-for="name">
            <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <b-form-group label="User email:" label-for="email">
            <b-form-input id="email" v-model="form.email" placeholder="Enter email" required></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    <!-- </div> -->

  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  //import ImageList from '@/components/ImageList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'UserModify',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
          oldName: '',
          name: '',
          password: '',
          email: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'modifyUser'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.modifyUser(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
