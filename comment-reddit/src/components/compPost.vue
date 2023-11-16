<template>
  <div class="container">
    <div class="header-post">
      <div class="top">
        <div class="box">
          <a class="icon-del" href="">
            <span
              ><i style="font-size: 20px" class="far fa-times-circle"></i
            ></span>
          </a>
          <a href="">
            <div class="avatar">
              <img
                src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png?width=256&s=c28b9f038c305e139b62739f2133d7b776582696"
                alt=""
              />
            </div>
            <h4 class="name">{{ thread.id }}</h4>
          </a>
        </div>
      </div>
      <div class="post">
        <div class="post_description">
          <span class="post_description_container">
            <a href="">
              <img
                :src="author.author_avatar"
                alt=""
              />
              {{ author.username }}
            </a>
            <span style="color: #798389">• {{ post.date }}</span>
          </span>
        </div>
        <div class="post_join">
          <button class="btn">Join</button>
          <i class="fa-solid fa-ellipsis icon-ellipsis"></i>
        </div>
      </div>
      <div class="post-title" style="padding: 0 16px; font-weight: bold">
        <span style="font-size: 18px">{{ post.title }}</span>
      </div>
    </div>
    <div class="post-body">
      <p style="color: ##1a1a1b; font-size: 14px">
        {{ post.body }}
      </p>
    </div>
    <div class="post-img">
      <img :src="post.image_url" alt="">
    </div>
    <div class="footer-post">
      <div class="right">
        <div class="box">
          <i
            style="margin: 0 6px 0 10px; font-size: 16px"
            class="fal fa-arrow-alt-up"
          ></i>
          <span>{{post.upvote}}</span>
          <i
            style="margin: 0 10px 0 6px; font-size: 16px"
            class="fal fa-arrow-alt-down"
          ></i>
        </div>
        <div class="box">
          <i
            style="margin: 0 6px 0 10px; font-size: 16px"
            class="fal fa-comment-alt-minus"
          ></i>
          <span style="margin-right: 10px">{{ post.comment_count }}</span>
        </div>
      </div>
      <div class="left">
        <div class="box">
          <i
            style="margin: 0 6px 0 10px; font-size: 16px"
            class="fal fa-share"
          ></i>

          <span style="margin-right: 10px">Share</span>
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
    const author = inject("author");
    const post = inject("post");
    return {
        thread,
        author,
        post,
    };
  },
};
</script>

<style>
</style>