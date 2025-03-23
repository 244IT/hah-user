<template>
  <div class="community">
    <div class="left">
      <hah-tab class="left-tab" :tabs="tabs" />
      <hah-post-item :posts="posts"/>
    </div>
    <div class="right">
      <hah-user />
    </div>
  </div>
</template>
<script>
import HahTab from '@/components/HahTab'
import HahPostItem from '@/components/HahPostItem'
import HahUser from '@/components/HahUser'
export default {
  components: {
    HahTab,
    HahPostItem,
    HahUser
  },
  data() {
    return {
      tabs: [
        { id: 1, text: '最新' },
        { id: 2, text: '热门' },
        { id: 3, text: '关注' }
      ],
      posts: [
        {
          id: 0,
          avatar: require('@/assets/img/mock/girl01.jpeg'),
          username: '用户1',
          time: '1小时前',
          content: '这是一个带图片的帖子',
          images: [
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
          ],
          likeCount: 12,
          commentCount: 3,
          tags: ['前端', 'Vue']
        },
        ...Array.from({ length: 10 }).map((item, index) => ({
          id: index + 1,
          avatar: require('@/assets/img/mock/girl01.jpeg'),
          username: '用户1',
          time: '1小时前',
          content: '这是一个带图片的帖子',
          images: [
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl01.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
            require('@/assets/img/mock/girl.jpeg'),
          ],
          likeCount: 12,
          commentCount: 3,
          tags: ['前端', 'Vue']
        }))
      ]
    }
  },
  methods: {
    onTab(id) {
      this.activedTabId = id
    },
  }
}
</script>
<style lang="scss" scoped>
.community {
  display: flex;
  max-width: 920px;
  margin: 0 auto;
  padding: 60px 10px 0;
  .left {
    flex: 1;
    padding: 0 4px;
    box-sizing: border-box;
    // overflow: auto;
    // /* 隐藏滚动条 */
    // scrollbar-width: none; /* Firefox */
    // -ms-overflow-style: none; /* IE 10+ */
    // &::-webkit-scrollbar {
    //   display: none; /* Chrome Safari */
    // }
    &-tab {
      margin: 6px 0;
    }
  }
  .right {
    position: sticky;
    top: 0;
    width: 260px;
    padding: 6px 0 0 2px;
    box-sizing: border-box;
  }
}
</style>
