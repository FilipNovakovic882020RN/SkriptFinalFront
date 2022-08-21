<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Modify Reziser"/>

        <b-form @submit="onSubmit">
         <b-form-group label="Reziser name:" label-for="RName">
            <b-form-input id="RName" v-model="form.RName" placeholder="Enter reziser name" required></b-form-input>
        </b-form-group>
        
         <b-form-group label="Reziser last name:" label-for="RLName">
            <b-form-input id="RLName" v-model="form.RLName" placeholder="Enter reziser last name" required></b-form-input>
        </b-form-group>

         <b-form-group label="Reziser birth:" label-for="RBirth">
            <b-form-input id="RBirth" v-model="form.RBirth" placeholder="Enter reziser birth" required></b-form-input>
        </b-form-group>

         <b-form-group label="Reziser town:" label-for="RTown">
            <b-form-input id="RTown" v-model="form.RTown" placeholder="Enter reziser town" required></b-form-input>
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
    name: 'ReziserMofidy',
    
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
        'modifyR'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.modifyR(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
