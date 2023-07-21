<template>  
      <div class="container mt-4">
        <router-view />
        <div class="d-flex justify-content-end mb-3">
          <router-link to="/forum" class="btn btn-success ms-16">
            Create
          </router-link>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Published</th>
              <th>Author&nbsp;ID</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.title }}</td>
              <td>{{ post.content }}</td>
              <td>{{ post.published }}</td>
              <td>{{ post.authorId }}</td>
              <td class="d-flex">
                <button @click="updatePost(post)" class="btn btn-primary">
                  Update
                </button>
                <button @click="deletePost(post)" class="btn btn-danger ms-2">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <script>
    import service from "./services";
    export default {
      name: 'ProfilComponent',
      data() {
        return {
          posts: [],
          error: null,
        };
      },
      methods: {
        async fetchPost() {
          try {
            await service.post.postControllerFindAll().then((res) => {
              console.log("aaaaaaaa", res);
              this.posts = res?.data;
            });
          } catch (error) {
            this.error = error.message;
            console.log("errrrr", error);
          }
        },
      },
      async mounted() {
        await this.fetchPost();
      },
    };
    </script>