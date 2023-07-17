<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} - {{ post.content }} - {{ post.published }} - {{ post.authorId }}
    </li>
  </ul>
  <p v-if="error">{{ error }}</p>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
      error: null,
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://3000-malekjbir-nestproject-gjqj2p1lu2x.ws-eu101.gitpod.io/findAllPosts');
        this.posts = response.data;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

