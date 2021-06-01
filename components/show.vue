<template>
  <v-card class="post-card mx-auto" height="100%">
    <v-card-text>
      <h4 class="card-title display-1 text--primary">
        {{ post.title }}
      </h4>
      <p class="text--primary">
        {{ post.body }}
      </p>
    </v-card-text>
    <div class="card-actions">
        <v-btn
          :to="`admin/${post.id}/edit`"
          text
          color="deep-purple accent-4"
        >
          Edit
        </v-btn>
        
    </div>
        <app-modal
          button-label="Delete"
          button-color="error"
          :button-text-style="true"
        >
          <template slot-scope="{ close }">
            <v-card>
              <v-card-title class="headline"> Are you sure? </v-card-title>
              <div>
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  :loading="deletePostLoading"
                  text
                  @click="deletePost(post.id, close)"
                >
                  DELETE
                </v-btn>
                <v-btn
                  color="black"
                  :disabled="deletePostLoading"
                  text
                  @click="close"
                >
                  CLOSE
                </v-btn>
              </div>
            </v-card>
          </template>
        </app-modal>

  </v-card>
</template>

<script>
import AppModal from "@/components/app-modal";

export default {
  components:{
    AppModal
  },
props: {
    post: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      deletePostLoading: false,
    };
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost", post);
    },
    deletePost(postId, callback) {
      this.deletePostLoading = true;
      this.$store
        .dispatch("deletePost", postId)
        .then(callback)
        .finally(() => {
          this.deletePostLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  padding-bottom: 50px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%) !important;
  .card-title {
    margin-bottom: 20px;
  }
  .card-actions {
    position: absolute;
    bottom: 0;
  }
}
</style>
