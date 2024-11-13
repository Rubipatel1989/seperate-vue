<template>
       <div>
              <h1>Posts</h1>
              <ul>
                     <li v-for="post in posts" :key="post.id">
                            <strong>{{ post.title }}</strong>: {{ post.body }}
                     </li>
              </ul>
       </div>
</template>

<script>
export default {
       data() {
              return {
                     posts: []
              };
       },
       created() {
              fetch('https://jsonplaceholder.typicode.com/posts')
                     .then(response => response.json())
                     .then(data => {
                            this.posts = data;
                     });
       }
};
</script>