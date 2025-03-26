<template>
  <div class="study">
    <div class="left">
      <hah-book-label :labels="labels" @label="onLabel" />
    </div>
    <div class="center">
      <hah-book-item :books="books" @click="onClick" />
    </div>
    <div class="right">
      <hah-user />
    </div>
  </div>
</template>
<script>
import HahUser from "@/components/HahUser";
import HahBookLabel from "@/components/HahBookLabel.vue";
import HahBookItem from "@/components/HahBookItem.vue";
export default {
  components: {
    HahUser,
    HahBookLabel,
    HahBookItem,
  },
  data() {
    return {
      labels: [
        {
          id: "01",
          title: "课标教材",
          list: [
            {
              id: "11",
              title: "新标准系列",
              intro: '贯穿小学、初中、高中的"一条龙"英语课标教材',
              img: require("@/assets/img/xbz_list_new.png"),
            },
            {
              id: "12",
              title: "Join In 系列",
              intro: "外研社和剑桥大学出版社联合为小学生打造的课标教材",
              img: require("@/assets/img/join in_list_new.png"),
            },
          ],
        },
        {
          id: "02",
          title: "拓展教材",
          list: [
            {
              id: "21",
              title: "新概念系列",
              intro: "著名英语教学权威亚历山大的巅峰之作",
              img: require("@/assets/img/new_label.png"),
            },
          ],
        },
      ],
      books: [
        {
          id: 1,
          title: "新概念英语第一册",
          intro:
            "Lesson 1 Excuse me!/Lesson 2 Is this your …?/Lesson 3 Sorry, sir.",
          img: require("@/assets/img/label01.png"),
        },
        {
          id: 2,
          title: "新概念英语第二册",
          intro:
            "Lesson 1 Excuse me!/Lesson 2 Is this your …?/Lesson 3 Sorry, sir.",
          img: require("@/assets/img/label02.png"),
        },
        {
          id: 3,
          title: "新概念英语第三册",
          intro:
            "Lesson 1 Excuse me!/Lesson 2 Is this your …?/Lesson 3 Sorry, sir.",
          img: require("@/assets/img/label03.png"),
        },
        {
          id: 4,
          title: "新概念英语第四册",
          intro:
            "Lesson 1 Excuse me!/Lesson 2 Is this your …?/Lesson 3 Sorry, sir.",
          img: require("@/assets/img/label04.png"),
        },
      ],
    };
  },
  methods: {
    onLabel(id) {
      console.log(id);
    },
    onClick(id) {
      this.$router.push({
        name: "studyDetail",
        params: { id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.study {
  display: flex;
  max-width: 1130px;
  margin: 0 auto;
  padding: 60px 10px 0;
  box-sizing: border-box;
  .left,
  .right {
    width: 260px;
    position: sticky;
    top: 0;
    height: calc(100vh - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .left {
    padding-top: 20px;
    box-sizing: border-box;
  }

  .center {
    flex: 1;
    padding: 0 20px;
    box-sizing: border-box;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    box-shadow: 0 1px 3px #eee;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .right {
    padding: 6px 0 0 6px;
    box-sizing: border-box;
  }
}
</style>
