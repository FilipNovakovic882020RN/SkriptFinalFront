<template>
  <div>
    <Header :subtitle="subtitle"/>
     <SingleArtRented :Naziv="Naziv" :Trajanje="Trajanje" :Reziser="Reziser" :Glumac="Glumac" />
    <!--<Comments v-if="image" :image="image" /> -->
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import SingleArtRented from '@/components/SingleArtRented.vue';

  import { mapActions,mapState } from 'vuex';


  export default {
    name: 'SingleRented',

    components: {
    Header,
    SingleArtRented
},

    data() {
      return {
        Naziv: '',
        Trajanje: '',
        Reziser: '',
        Glumac: '',
        subtitle: ''
      }
    },
      computed: {
      ...mapState([
        // 'imageIDs'
        'data',
        'singleMovie'
      ])
    },

    methods: {
      ...mapActions([
        'getItem'
      ])
    },

    mounted() {
      const data ={id: this.$route.params.id}
      // this.getItem(data)
      // .then( res => {
      //   // this.image = res;
      //   // this.subtitle = this.image.title;
      //  // console.log(res)
      //  console.log('OVAJ JE ' + this.singleMovie)
      //  // this.image = res;
      //   console.log('SLIKA ' + this.image);
      // });
      // //this.image = this.singleMovie
      // console.log(this.singleMovie)
      // console.log('SLIKA ' + this.image);

      /*await*/  fetch('http://localhost:8001/admin/searchF', {
      
        method: 'POST',
        //withCredentials: true,
        //credentials: 'include',
        headers: {
            'Authorization': `Bearer ${ localStorage.token}`,
            'Content-Type': 'application/json'},
            body: JSON.stringify(data)

                    
    }).then(res => res.json())
     .then(resss => { this.Naziv = resss.split(',')[1].split(':')[1].split('"')[1]; 
     this.Reziser = resss.split(',')[2].split(':')[1].split('"')[1]; 
     this.Glumac = resss.split(',')[3].split(':')[1].split('"')[1];
     this.Trajanje = resss.split(',')[4].split(':')[1].split('"')[1];
      }/*onsole.log('RESS ' + resss.split(',')[0].split(':')[1])*/);
      
    }
  }

</script>