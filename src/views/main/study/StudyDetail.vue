<template>
  <div class="study-detail">
    <!-- 左侧导航 -->
    <div class="left">
       <a-tree 
        :treeData="books"
        autoExpandParent
        defaultExpandAll
        :checkedKeys="[1]"
      />
    </div>

    <!-- 中间内容 -->
    <div class="center">
      <!-- 标题 -->
      <h1 class="center-title">{{ info.book }}-{{ info.series }}-{{ info.section }}</h1>

      <!-- 语音播放 -->
      <div class="center-audio">
        <audio controls>
          <source :src="info.audioUrl" type="audio/mpeg">
          您的浏览器不支持 audio 元素。
        </audio>
      </div>

      <!-- 英语原文 -->
      <section id="original" class="section">
        <h2 class="original-title">英语原文</h2>
        <div class="original-content">{{ info.original }}</div>
      </section>

      <!-- 英语翻译 -->
      <section id="translation" class="section">
        <h2 class="translation-title">英语翻译</h2>
        <div class="translation-content">{{ info.translation }}</div>
      </section>

      <!-- 单词 -->
      <section id="word" class="section">
        <h2 class="word-title">单词</h2>
        <div class="word-content">
          <ol class="word-list">
            <li v-for="(item, index) in info.words" :key="index" class="word-item">
              {{ item.word }} {{ item.translation }}
            </li>
          </ol>
        </div>
      </section>
    </div>

    <!-- 右侧工具栏 -->
    <div class="right">
      <hah-user />
      <!-- <hah-mark /> -->
      <div class="tool">
        <div class="tool-title">工具箱</div>
        <ul>
          <li
            class="tool-item"
            v-for="(item, index) in tools"
            :key="index"
          >
            <span>{{ item.useTitle }}</span>
            <a-switch default-checked :checked="item.checked" @change="onChange(index)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import HahMark from '@/components/HahMark.vue'
import HahUser from '@/components/HahUser.vue'

const originalBooks = [
  {
    key: 1,
    title: '新概念英语 第1册'
  },
  {
    key: 2,
    title: '新概念英语 第2册'
  },
  {
    key: 3,
    title: '新概念英语 第3册'
  },
  {
    key: 4,
    title: '新概念英语 第4册'
  },
]
export default {
  components: {
    // HahMark,
    HahUser
  },
  data() {
    return {
      books: [
        ...originalBooks
        // {
        //   key: 0,
        //   title: 'src',
        //   children: [
        //   ]
        // },
      ],
      info: {
        book: '新概念英语',
        series: '第2册',
        section: '第001课',
        audioUrl: '',
        original: "Last week I went to the theatre. I had a very good seat. The play was very interesting. I did not enjoy it. A young man and a young woman were sitting behind me. They were talking loudly. I got very angry. I could not hear the actors. I turned round. I looked at the man and the woman angrily. They did not pay any attention. In the end, I could not bear it. I turned round again. ‘I can't hear a word!' I said angrily. ‘It's none of your business",
        translation: '上星期我去看戏。我的座位很好，戏很有意思，但我却无法欣赏。 一青年男子与一青年女子坐在我的身后， 大声地说着话。我非常生气，因为我听不见演员在说什么。 我回过头去怒视着那一男一女，他们却毫不理会。 最后， 我忍不住了， 又一次回过头去， 生气地说',
        words: [
          {
            word: 'go to the theatre',
            translation: '去看戏'
          },
          {
            word: 'got angry',
            translation: '生气'
          },
          {
            word: 'turn round',
            translation: '转身，也可用turn around'
          },
          {
            word: 'pay attention',
            translation: '注意'
          },
          {
            word: 'I could not bear it',
            translation: '我无法忍受'
          },
          {
            word: 'none of your business',
            translation: '不关你的事'
          },
        ]
      },
      tools: [
        {
          useTitle: '摸鱼模式',
          checked: false
        },
        {
          useTitle: '小窗模式',
          checked: false
        },
        {
          useTitle: '合并翻译',
          checked: false
        },
      ]
    }
  },
  methods: {
    toggleFishMode() {
      // 摸鱼模式逻辑
    },
    toggleMiniWindow() {
      // 小窗模式逻辑
    },
    toggleMergeTranslation() {
      // 合并翻译逻辑
    },
    onChange(index) {
      this.tools[index].checked = !this.tools[index].checked
      if (index === 0 && this.tools[index].checked) {
        console.log('摸鱼模式')
        const books = [
          {
            key: 101,
            title: 'node_module',
          },
          {
            key: 102,
            title: 'public',
            children: [
              {
                key: 1021,
                title: 'favicon.ico',
              },
              {
                key: 1022,
                title: 'index.html',
              },
            ]
          },
          {
            key: 100,
            title: 'src',
            children: originalBooks
          },
          {
            key: 103,
            title: '.editorconfig',
          },
          {
            key: 104,
            title: '.gitignore',
          },
          {
            key: 105,
            title: 'babel.config.js',
          },
          {
            key: 106,
            title: 'jsconfig.json',
          },
          {
            key: 107,
            title: 'package-lock.json',
          },
          {
            key: 108,
            title: 'package.json',
          },
          {
            key: 109,
            title: 'README.md',
          },
          {
            key: 110,
            title: 'vue.config.js',
          },
        ]
        this.books.splice(0, Infinity, ...books)
      }
      if (index === 0 && !this.tools[index].checked) {
        console.log('摸鱼模式')
        const books = [
          ...originalBooks
        ]
        this.books.splice(0, Infinity, ...books)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.study-detail {
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 10px 0;
  box-sizing: border-box;
  
  .left, .right {
    width: 260px;
  }
  .center {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    &-title {
      margin-bottom: 20px;
      text-align: center;
    }
    &-audio {
      display: flex;
      justify-content: center;
    }
    .section {
      margin-bottom: 40px;
      .section-title {
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 500;
      }
      .content {
        line-height: 1.6;
      }
      .word-list {
        .word-item {
          margin-bottom: 8px;
        }
      }
    }
  }

  .right {
    padding: 6px 0 0 6px;
    box-sizing: border-box;
    .tool {
      margin-top: 6px;
      padding: 10px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      box-sizing: border-box;
      &-title {
        margin-bottom: 10px;
        font-weight: bold;
      }
      &-item {
        margin-bottom: 10px;
        span {
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
