
<template>

  <div>
    <compPost :thread="thread"/>
    <compComment :thread="thread"/>
  </div>
  
</template>

<script>
import { ref, onMounted,provide} from "vue";
import axios from "axios";
import compPost from './components/compPost.vue'
import compComment from './components/compComment.vue'
import { useRoute } from "vue-router";
export default {
  setup(){
    let route = useRoute()
    let threads = ref({})
    let id = ref('')
    let thread = ref({})
    let author = ref({})
    let post = ref({})
    let comments = ref({})
    let randomDatePost = ref(null);
    let randomDateComment = ref(null);
    function randomDateWithinRange() {
        const now = new Date();
        const oneHourInMs = 60 * 60 * 1000; // milliseconds in one hour
        const oneMonthInMs = 30 * 24 * oneHourInMs; // approximately milliseconds in one month

        // Generate a random number between 1 hour and approximately 1 month in milliseconds
        const randomMsWithinRange = Math.floor(Math.random() * (oneMonthInMs - oneHourInMs + 1)) + oneHourInMs;

        // Subtract this random number of milliseconds from the current time to get the random date
        return new Date(now.getTime() - randomMsWithinRange);
    }
    function timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000);

        let interval = seconds / 31536000;
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }


    onMounted(()=>{

        axios.get('../ImaginedRedditThreads.json')
        .then(response => {
            threads.value = response.data;
            id.value = route.params.id;
            thread.value = threads.value[id.value]
            console.log( thread.value)
            author.value = thread.value.author
            post.value = thread.value.post
            comments.value = thread.value.comments

            let random1 = Math.floor(Math.random() * 192) + 1;
            let random2 = Math.floor(Math.random() * 192) + 1;

            author.value.author_avatar = `../src/assets/img/avatar_${random1}.png`
            
            post.value.image_url = `../src/assets/img/avatar_${random2}.png`
            
            
            randomDatePost.value = randomDateWithinRange();
            post.value.date = timeSince(randomDatePost.value);
          
            comments.value.forEach((item) => {
              let random = Math.floor(Math.random() * 192) + 1;
              item.avatar = `../src/assets/img/avatar_${random}.png`;
              randomDateComment.value = randomDateWithinRange();
              item.date = timeSince(randomDateComment.value);
          });

        })
        .catch(error => {
            console.error('Lỗi khi tải dữ liệu từ JSON:', error);
        });
    })
    provide("thread", thread);
    provide("author", author);
    provide("post", post);
    provide("comments", comments);
    return{
      thread
    }
  },
  components: {
    compPost,
    compComment,
  },
}
</script>

<style scoped>

</style>
