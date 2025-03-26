<template>
  <div class="home">
    <div class="main">
      <div class="inner">
        <div class="inner-left">
          <i class="iconfont icon-fish" />
        </div>
        <div class="inner-right">
          <h1>
            FIS<b>H</b> <b>A</b>ND ENGLIS<b>H</b>
            <br />
            摸鱼英语学习网
          </h1>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="inner">
        <div class="point">
          <h2>摸鱼</h2>
          <p>提供专业的摸鱼网站技术，让你的领导难以察觉！</p>
        </div>
        <div class="point">
          <h2>英语</h2>
          <p>提供四六级，考研，新概念等英语学习资料，请加油</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  .inner {
    padding: 40px 40px 30px;
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    &-left {
      display: flex;
      justify-content: flex-end;
      width: 42%;
      .icon-fish {
        font-size: 180px;
        color: #4d6bfe;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      width: 58%;
      padding: 0 30px;
      h1 {
        font-weight: bold;
        margin: 0;
        font-size: 30px;
        b {
          color: #4d6bfe;
        }
      }
    }
    .point {
      width: 30%;
      box-sizing: border-box;
      padding: 0 40px;
      text-align: center;
      h2 {
        font-size: 24px;
        color: #4d6bfe;
      }
      p {
        font-size: 18px;
        color: #4f5959;
      }
    }
  }
}
</style>
