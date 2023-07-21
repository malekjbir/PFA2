<template>
  <div class="container mt-4">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" v-model="formData.title" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea id="content" v-model="formData.content" class="form-control" rows="4" required></textarea>
      </div>
      <div class="mb-3">
        <label for="published" class="form-label">Published</label>
        <input type="checkbox" id="published" v-model="formData.published" class="form-check-input">
      </div>
      <div class="mb-3">
        <label for="authorId" class="form-label">Author ID</label>
        <input type="text" id="authorId" v-model="formData.authorId" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import service from "./services";
export default {
  name: 'ForumComponent',
  data() {
    return {
      formData: {
        title: "",
        content: "",
        published: false,
        authorId: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await service.post.postControllerCreate(this.formData).then((res)=>{
        console.log('aaaaaaaa',res)
        this.fetchPost();
        })
      } catch (error) {
          this.error = error.message;
      }
    },
    async fetchPost() {
    try {
      await service.post.postControllerFindAll().then((res) => {
        console.log('Posts', res);
        this.posts = res?.data;
      });
    } catch (error) {
      this.error = error.message;
      console.log('Error', error);
    }
  },
},
async mounted() {
  await this.fetchPost();
},
};
</script>