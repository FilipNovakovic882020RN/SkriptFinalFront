<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Delete Reziser"/>

        <b-form @submit="onSubmit">
         <b-form-group label="Reziser name:" label-for="RName">
            <b-form-input id="RName" v-model="form.RName" placeholder="Enter reziser name" required></b-form-input>
        </b-form-group>
        
         <b-form-group label="Reziser last name:" label-for="RLName">
            <b-form-input id="RLName" v-model="form.RLName" placeholder="Enter reziser last name" required></b-form-input>
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
    name: 'ReziserDelete',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
          RName: '',
          RLName: '',
          RBirth: '',
          RTown: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'deleteR'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.deleteR(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
