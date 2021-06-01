export default {
  state: () => ({
    posts: [],
    selectedPost: {}
  }),
  mutations: {
    updatePosts(state, posts){
      state.posts = posts;
    },
    updateSelectedPost(state, post){
      state.selectedPost = post;
    }
  },
  actions: {
//يقوم ب اضافه بينات ف ال json server ثم يقوم ال json server ب عرضها ف الموقع 

    addPost({state, commit}, payload){
      return this.$axios.$post(`/posts`, payload).then((post) => {
        commit('updatePosts', [...state.posts, post]);
      })
    },

    // دا بقا بيعدل البيانات و ف صفحه التعديل هتلاقي زرار ال submit اسمه اتغير عنطريق الداله
    editPost({state, commit}, payload){
      return this.$axios.$put(`/posts/${payload.id}`, payload).then((post) => {
        commit('updatePosts', state.posts.map( post => post.id == payload.id ? payload : post));
      })
    },

    // يبقوم ب حذ البيان من ال api  عن طريق ظهور model خاصه ب ال vutify و عند الضغط ع  ok  يثقوم ب حذفها
    deletePost({state, commit}, postId){
      return this.$axios.$delete(`/posts/${postId}`).then(() => {
        commit('updatePosts', state.posts.filter( post => post.id != postId))
      })
    },

    //اعرضلي البيانات الموجوده ف ال json serrver 
    //و اراجع كدا ل صفحه ال add .vue 
    /*
      json serverالسطر 78 بيقولك ان هو بياخد البيانت من ال الانبوت بيحطها ف ال فيموديل و البيانات الي بتتحط في ال فيموديل بتتحط فيه ال 
      و بعد كدا البيانات الي بتبقي موجوده ف ال json server بتتحط ف ال  h5 و p كما ف صفحه الانديكس 
      */
    getPost({state}, postId){
      const post = state.posts.find( item => item.id == postId);
      return post ? Promise.resolve(post) : this.$axios.$get(`/posts/${postId}`)
    }
  }
}
