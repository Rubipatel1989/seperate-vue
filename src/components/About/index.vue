<template>
       <div>
         <h1>Random Image</h1>
         <img :src="dogImage" alt="Random Dog" v-if="dogImage" />
         <button @click="fetchDogImage">Fetch New Image</button>
       </div>
     </template>
     
     <script>
     export default {
       data() {
         return {
           dogImage: ''
         };
       },
       methods: {
         fetchDogImage() {
           fetch('https://dog.ceo/api/breeds/image/random')
             .then(response => response.json())
             .then(data => {
               this.dogImage = data.message;
             });
         }
       },
       created() {
         this.fetchDogImage();
       }
     };
     </script>
     