<template>
  <div>
    <!-- <h1>CACACACA</h1> -->
    <div class="art">
      <!-- <img v-if="image.primaryImageSmall" :src="image.primaryImageSmall" />
      <img v-else src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" /> -->
      
      <ul>
        <li>Name: {{ Naziv }}</li>
        <li>Reziser: {{Reziser}}</li>
        <li>Glumci: {{ Glumac }}</li>
        <li>Trajanje: {{ Trajanje }}</li>
      </ul>

        <b-form @submit="rentt" >
          <b-button type="submit" variant="primary" class="rent">Rent</b-button>
        </b-form>
    </div>
    
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
    computed: {
      ...mapState([
        // 'imageIDs'
        'reziser',
        'glumac'
      ])
    },

     methods: {
      ...mapActions([
        'rent',
        'findR'
        
      ]),
      rentt(e) {
        e.preventDefault();

       
       //console.log('CAOOO');
       
       const data = {
        Naziv: this.Naziv,
        Reziser: this.Reziser,
        Glumac: this.Glumac
       }
       
      

       this.findR(data);
        
       
       
      },
      // unRent(e) {
      //   e.preventDefault();

       
      //  console.log('CAOOO')
      //  this.rentt(this.Naziv);
      // }
    },
     watch: {
      glumac() {
        const st = JSON.stringify(this.glumac).split(':')[1].split('"')[1]
        const st2 = JSON.stringify(this.reziser).split(':')[1].split('"')[1]
        console.log('GLUMAC ' + st);
        
      const final ={
        Naziv: this.Naziv,
        IDG: st,
        IDR: st2
       }

       this.rent(final);
      }
    },

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