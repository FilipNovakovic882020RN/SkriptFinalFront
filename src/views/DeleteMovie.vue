<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Delete Movie"/>

        <b-form @submit="onSubmit">
    
        <b-form-group label="Movie Name:" label-for="MName">
            <b-form-input id="MName" v-model="form.MName" placeholder="Enter name" required></b-form-input>
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
    name: 'DeleteMovie',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
          MName: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'deleteM',
        'fetchDepartments'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.deleteM(this.form);
        this.fetchDepartments();
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
