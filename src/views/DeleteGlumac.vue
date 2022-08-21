<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Delete Glumac"/>

        <b-form @submit="onSubmit">
         <b-form-group label="Glumac name:" label-for="GName">
            <b-form-input id="GName" v-model="form.GName" placeholder="Enter glumac name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Glumac last name:" label-for="GLName">
            <b-form-input id="GLName" v-model="form.GLName" placeholder="Enter glumac last name" required></b-form-input>
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
    name: 'GlumacDelete',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
         GName: '',
          GLName: '',
          GBirth: '',
          GTown: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'deleteG'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.deleteG(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
