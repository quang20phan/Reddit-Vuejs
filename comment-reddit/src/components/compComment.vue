<template>
  <div class="cmt">
    <div class="cmt-sum">
      <p style="margin: 0">
        <span class="highlight">{{post.comment_count}} Comment</span> sorted by
        <span class="highlight">Best <i class="far fa-chevron-down"></i></span>
      </p>
    </div>

    <div class="cmt-user">
      <div class="user-avatar">
        <img
          style="width: 24px; height: 24px"
          src="../assets/img/img__logo.png"
          alt=""
        />
      </div>
      <div class="cmt-body">
        <input type="text" class="cmt-content" placeholder="Leave a comment" />
      </div>
    </div>

    <div class="cmt-list">
      <div v-for="(item,index) in comments" :key="index"  class="cmt-item">
        <div class="user-info" style="border-radius: 50%;">
          <img
            style="width: 30px; height: 30px; border-radius: 50%;"
            :src="item.avatar"
            alt=""
          />
          <p
            style="
              font-size: 12px;
              line-height: 30px;
              color: #000;
              font-weight: bold;
            "
          >
            {{item.username}}
            <span style="color: #798389; font-weight: normal;">• {{item.date}}</span>
          </p>
        </div>

        <div class="comment-body">
          <p>
            {{ item.text }}
          </p>
        </div>

        <div class="cmt-interact">
          <div>
            <i class="fal fa-arrow-alt-up"></i>
            15
            <i class="fal fa-arrow-alt-down"></i>
          </div>
          <div style="margin-left: 20px">
            <i class="fal fa-comment-alt-minus"></i> Reply
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, inject } from "vue";
export default {
  setup() {
    const thread = inject("thread");
    const post = inject("post");
    const comments = inject("comments");
    return {
        thread,
        post,
        comments,
    };
  },
};
</script>

<style>
</style>