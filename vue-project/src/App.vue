<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} - {{ post.content }} - {{ post.published }} - {{ post.authorId }}
    </li>
  </ul>
</template>
<script>
import apiService from './services'
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
        console.log('aaaaaaa');
        const data = await apiService.post.postControllerFindAll.then((response) => {
          console.log('aaaaaaa', response?.data);
          // this.posts = response?.data
        })
        console.log('data', data);
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>

