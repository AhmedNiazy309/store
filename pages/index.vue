<template>
  <div>
    <v-btn color="deep-purple accent-4" dark  to="/add">Add Post</v-btn>
    <v-row>
      <v-col class="col-lg-6 col-md-6 col-sm-12" lg6 xs12 sm8 md6 v-for="post in $store.state.posts" :key="post.id">
        <show :post="post" :is-admin="true"></show>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Show from '@/components/show.vue'
export default {
components:{
    Show
},
  fetch({ $axios, store }) {
    return $axios.$get("/posts").then(res => {
      store.commit("updatePosts", res);
    });
  }

}
</script>
