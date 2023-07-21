<template>
  <div class="container mt-4">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Published</th>
          <th>Author ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>{{ post.published }}</td>
          <td>{{ post.authorId }}</td>
          <td class="d-flex">
            <button @click="updatePost(post)" class="btn btn-primary">Update</button>
            <button @click="updatePost(post)" class="btn btn-danger ms-2">Update</button>
            <button @click="createPost" class="btn btn-success ms-2">Create</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import service from "./services" 
export default {
  data() {
    return {
      posts: [],
      error: null,
    };
  },
  methods: {
    async fetchPost() {
      try {
        await service.post.postControllerFindAll().then((res)=>{
          console.log('aaaaaaaa',res)
          this.posts = res?.data
          })
      } catch (error) {
        this.error = error.message;
        console.log('errrrr', error);
      }
    },
  },
  async mounted() {
    await this.fetchPost();
  },
};
</script>