<template>
  <div class="user">
    <!-- 头部信息 -->
    <hah-user-header />
    <!-- 导航栏 -->
    <hah-tab class="user-tab" :tabs="tabs" />
    <!-- 内容区域 -->
    <hah-post-item :posts="posts"/>
  </div>
</template>
<script>
import HahUserHeader from '@/components/HahUserHeader.vue';
import HahTab from '@/components/HahTab.vue'
import HahPostItem from '@/components/HahPostItem.vue';
export default {
  components: {
    HahUserHeader,
    HahTab,
    HahPostItem
  },
  data() {
    return {
      tabs: [
        { id: 'posts', text: '帖子' },
        { id: 'comments', text: '评论' },
        { id: 'favors', text: '点赞' },
        { id: 'collections', text: '收藏' },
      ],
      posts: [
        {
          id: 1,
          avatar: require('@/assets/img/mock/girl01.jpeg'),
          username: '用户1',
          time: '1小时前',
          content: '这是一个带图片的帖子',
          images: [
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
          ],
          likeCount: 12,
          commentCount: 3,
          tags: ['前端', 'Vue']
        },
        {
          id: 2,
          avatar: require('@/assets/img/mock/girl01.jpeg'),
          username: '用户2',
          time: '2小时前',
          content: '这是另一个带图片的帖子',
          images: [
            require('@/assets/img/mock/girl.jpeg')
          ],
          likeCount: 8,
          commentCount: 1,
          tags: ['后端', 'Node.js']
        },
        {
          id: 2,
          avatar: 'https://example.com/avatar2.jpg',
          username: '用户2',
          time: '2小时前',
          content: '这是另一个带图片的帖子',
          images: [
            'https://example.com/image3.jpg'
          ],
          likeCount: 8,
          commentCount: 1,
          tags: ['后端', 'Node.js']
        },
        {
          id: 2,
          avatar: 'https://example.com/avatar2.jpg',
          username: '用户2',
          time: '2小时前',
          content: '这是另一个带图片的帖子',
          images: [
            'https://example.com/image3.jpg'
          ],
          likeCount: 8,
          commentCount: 1,
          tags: ['后端', 'Node.js']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  max-width: 860px;
  padding: 6px 10px;
  margin: 0 auto;
  &-tab {
    margin-bottom: 6px;
  }
}
</style>
