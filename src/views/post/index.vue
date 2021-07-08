<template>
  <h1>This is post index</h1>
  <li v-for="item in posts" :key="item.message">
    {{ item.id }}
    {{ item.title }}
  </li>
</template>

<script lang="ts">
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/posts";

export default ({


  data() {
      return{
        posts:[],
    }
  },
  created() {
    axios.get(API_URL).then(response => {
      this.posts = response.data.data;
      console.log(response.data.data);
    })
        .then(function (response) {
          alert("success get list");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    ;
  },
  methods: {
  }


});
</script>

<style scoped>

</style>