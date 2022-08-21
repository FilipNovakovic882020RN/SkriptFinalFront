<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Delete User"/>

        <b-form @submit="onSubmit">
       
        <b-form-group label="User Name:" label-for="name">
            <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
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
    name: 'UserDelete',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
          name: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'deleteU'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.deleteU(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
