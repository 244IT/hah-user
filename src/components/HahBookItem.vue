<template>
  <div class="book">
    <div class="book-list">
      <div 
        class="book-item"
        v-for="(item) in books"
        :key="item.id"
      >
        <div class="book-item-left">
          <img class="book-item-img" :src="item.img" />
        </div>
        <div class="book-item-right">
          <div class="header">
            <div>{{ item.title }}</div>
            <a-button @click="click(item.id)">查看详情</a-button>
          </div>
          <div class="intro">
            {{ item.intro }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      books: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return  {
      }
    },
    methods: {
      click(id) {
        this.$emit('click', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.book-item {
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
  background: url(/src/assets/img/digital_list_bg.png) no-repeat center 166px;
  background-size: 100% 68%;
  background-position-y: 157px;
  cursor: pointer;
  &-index {
    width: 76px;
    color: #5d646e;
    font-size: 26px;
    font-family: DIN-Medium, PingFang SC, -apple-system, SF UI Text, Lucida Grande, STheiti, Microsoft YaHei, sans-serif;
    text-align: center;
  }
  &-img {
    width: 108px;
    height: 156px;
  }
  &-right {
    flex: 1;
    padding: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 0;
      color: #3C4752;
      font-size: 16px;
    }
    .intro {
      color: #9EA3A8;
      font-size: 12px;
      line-height: 20px;
      padding-right: 6px;
      max-width: 160px;
      box-sizing: border-box;
    }
  }
}
</style>