<template>
  <div class="post">
    <div class="post-item" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <img :src="post.avatar" class="avatar" />
        <div class="info">
          <div class="username">{{ post.username }}</div>
          <div class="time">{{ post.time }}</div>
        </div>
      </div>
      <div class="content">
        {{ post.content }}
        <HahPostImages 
          v-if="post.images && post.images.length"
          :images="post.images"
          :post-id="post.id"
        />
      </div>
      <div class="actions">
        <div class="action-item">
          <i class="iconfont icon-like"></i>
          <span>{{ post.likeCount }}</span>
        </div>
        <div class="action-item">
          <i class="iconfont icon-comment"></i>
          <span>{{ post.commentCount }}</span>
        </div>
        <div class="action-item">
          <i class="iconfont icon-share"></i>
        </div>
      </div>
      <div class="tags" v-if="post.tags">
        <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import HahPostImages from './HahPostImages.vue';

export default {
  components: {
    HahPostImages
  },
  props: {
    posts: {
      type: Array,
      default: () => {}
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.post {
  &-item {
    padding: 16px;
    margin-bottom: 6px;
    background: $bg-color-white;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
      }
      .info {
        .username {
          font-size: 14px;
          font-weight: 500;
          color: $text-color-primary;
        }
        .time {
          font-size: 12px;
          color: $text-color-tertiary;
        }
      }
    }
    .content {
      font-size: 14px;
      line-height: 1.6;
      color: $text-color-primary;
      margin-bottom: 12px;
    }
    .actions {
      display: flex;
      align-items: center;
      padding-top: 12px;
      border-top: 1px solid $border-color;
      .action-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        color: $text-color-secondary;
        cursor: pointer;
        i {
          margin-right: 4px;
        }
        &:hover {
          color: $primary-color;
        }
      }
    }
    .tags {
      margin-top: 12px;
      .tag {
        display: inline-block;
        padding: 2px 8px;
        margin-right: 8px;
        font-size: 12px;
        color: $primary-color;
        background: rgba($primary-color, 0.1);
        border-radius: 12px;
      }
    }
  }
}
</style>
