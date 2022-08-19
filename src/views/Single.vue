<template>
  <div>
    <Header :subtitle="subtitle"/>
    <div v-if="image">
      <img v-if="image.primaryImageSmall" :src="image.primaryImageSmall" />
      <p v-else>Image not available</p>
      
      <ul>
        <li>Author: {{ image.artistDisplayName }}</li>
        <li>Highlight: {{ image.isHighlight }}</li>
        <li>Year acquired: {{ image.accessionYear }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Single',

    components: {
      Header
    },

    data() {
      return {
        image: null,
        subtitle: ''
      }
    },
    
    methods: {
      ...mapActions([
        'getItem'
      ])
    },

    mounted() {
      this.getItem(this.$route.params.id).then( res => {
        this.image = res;
        this.subtitle = this.image.title;
      });
    }
  }

</script>