<template>
  <div class="header">
    <div class="bg"></div>
    <div class="info">
      <div class="avatar-container">
        <img src="@/assets/img/mock/girl.jpeg" class="avatar" />
        <div class="edit-btn">编辑资料</div>
      </div>
      <div class="meta">
        <div class="name">用户名</div>
        <div class="bio">这个人很懒，什么都没留下</div>
        <div class="stats">
          <div class="stat-item">
            <div class="number">128</div>
            <div class="label">关注</div>
          </div>
          <div class="stat-item">
            <div class="number">256</div>
            <div class="label">粉丝</div>
          </div>
          <div class="stat-item">
            <div class="number">1024</div>
            <div class="label">获赞</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  margin-bottom: 6px;

  .bg {
    height: 160px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: 8px 8px 0 0;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url(@/assets/img/mock/girl.jpeg) center/cover;
      filter: blur(10px);
      z-index: -1;
    }
  }

  .info {
    position: relative;
    padding: 6px;
    background: $bg-color-white;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);

    .avatar-container {
      position: absolute;
      top: -40px;
      left: 20px;

      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid $bg-color-white;
        object-fit: cover;
      }

      .edit-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        background: $primary-color;
        color: $bg-color-white;
        border-radius: 12px;
        font-size: 12px;
        cursor: pointer;
      }
    }

    .meta {
      margin-left: 100px;

      .name {
        font-size: 20px;
        font-weight: 500;
        color: $text-color-primary;
      }

      .bio {
        margin-top: 8px;
        font-size: 14px;
        color: $text-color-secondary;
      }

      .stats {
        display: flex;
        margin-top: 16px;

        .stat-item {
          margin-right: 20px;
          text-align: center;

          .number {
            font-size: 16px;
            font-weight: 500;
        color: $text-color-primary;
          }

          .label {
            margin-top: 4px;
            font-size: 12px;
            color: $text-color-secondary;
          }
        }
      }
    }
  }
}
</style>
