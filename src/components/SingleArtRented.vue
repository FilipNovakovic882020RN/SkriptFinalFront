<template>
  <div>
      <!-- <h1>kakakakak</h1> -->
    <div class="art">
      <!-- <img v-if="image.primaryImageSmall" :src="image.primaryImageSmall" />
      <img v-else src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" /> -->
      
      <ul>
        <li>Name: {{ Naziv }}</li>
        <li>Reziser: {{Reziser}}</li>
        <li>Glumci: {{ Glumac }}</li>
        <li>Trajanje: {{ Trajanje }}</li>
      </ul>

        <b-form @submit="unRent" >
          <b-button type="submit" variant="primary" class="rent">UnRent</b-button>
        </b-form>

     
       
       <!-- <b-form @submit="unRent">
      <b-button type="submit" variant="primary">UnRent</b-button>
      </b-form> -->
      

      <!-- onSubmit(e) {
        e.preventDefault();

        this.login(this.form);
        this.$router.push({ name: 'Home' });
      } -->
    </div>
     <!-- <button @click="rent">Rent</button>
        <button @click="greet">Greet</button> -->

  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
  export default {
    name: 'SingleArt',

    props: {
      lala: '1',
      Naziv:'',
      Reziser:'',
      Glumac:'',
      Trajanje:''
    },
     methods: {
      ...mapActions([
        'unrent',
        
      ]),
      unRent(e) {
        e.preventDefault();

       
       //console.log('CAOOO');
      // console.log('NAZIV ' + this.Naziv);
       const data = {
        Naziv: this.Naziv
       }
       this.unrent(data);
       
      }
    }

  }
</script>

<style scoped>

  img {
    max-width: 600px;
    max-height: 600px;
  }

  .art {
    border-bottom-style: solid;
    margin-bottom: 10px;
  }
  .rent{
    margin: 15px;
  }

</style>