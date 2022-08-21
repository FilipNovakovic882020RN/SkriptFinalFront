<template>
  <div id="app">
    
   
    <!-- <div id="modify"> -->
        <Header subtitle="Add Movie"/>

        <b-form @submit="onSubmit">
    
        <b-form-group label="Movie Name:" label-for="MName">
            <b-form-input id="MName" v-model="form.MName" placeholder="Enter name" required></b-form-input>
        </b-form-group>

         <b-form-group label="Copies:" label-for="copies">
            <b-form-input id="copies" v-model="form.copies" placeholder="Enter a number of copies" required></b-form-input>
        </b-form-group>

        <b-form-group label="Duration:" label-for="duration">
            <b-form-input id="duration" v-model="form.duration" placeholder="Enter duration" required></b-form-input>
        </b-form-group>

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

        <b-form-group label="Glumac name:" label-for="GName">
            <b-form-input id="GName" v-model="form.GName" placeholder="Enter glumac name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Glumac last name:" label-for="GLName">
            <b-form-input id="GLName" v-model="form.GLName" placeholder="Enter glumac last name" required></b-form-input>
        </b-form-group>

        <b-form-group label="Glumac birth:" label-for="GBirth">
            <b-form-input id="GBirth" v-model="form.GBirth" placeholder="Enter glumac birth" required></b-form-input>
        </b-form-group>

        <b-form-group label="Glumac town:" label-for="GTown">
            <b-form-input id="GTown" v-model="form.GTown" placeholder="Enter glumac town" required></b-form-input>
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
    name: 'AddMovie',
    
    components: {
      Header//,
    //  ImageList
    },

   data() {
      return {
        form: {
          MName: '',
          copies: '',
          duration: '',
          RName: '',
          RLName: '',
          RBirth: '',
          RTown: '',
          GName: '',
          GLName: '',
          GBirth: '',
          GTown: ''
        }
      }
    },
   methods: {
      ...mapActions([
        'addM'
      ]),

      onSubmit(e) {
        e.preventDefault();

        // const data = JSON.stringify({
        //   MName: this.MName,
        //   copies: this.copies,
        //   duration: this.duration,
        //   RName: this.RName,
        //   RLName: this.RLName,
        //   RBirth: this.RBirth,
        //   RTown: this.inforRTownmation,
        //   GName: this.GName,
        //   GLName: this.GLName,
        //   GBirth: this.GBirth,
        //   GTown: this.GTown
        // })

        this.addM(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
