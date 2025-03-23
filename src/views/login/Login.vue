<template>
  <div class="login-container">
    <div class="login-wrapper">
      <!-- 左侧图片区域 -->
      <div class="login-banner">
        <img src="@/assets/img/login_bg.jpg" alt="login background">
        <div class="banner-text">
          <h2>欢迎来到HAH社区</h2>
          <p>分享你的知识，发现更多精彩</p>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="login-form">
        <div class="form-header">
          <h3>登录</h3>
          <div class="switch-tabs">
            <span 
              :class="['tab-item', {active: activeTab === 'phone'}]"
              @click="activeTab = 'phone'"
            >
              手机登录
            </span>
            <span 
              :class="['tab-item', {active: activeTab === 'code'}]"
              @click="activeTab = 'code'"
            >
              验证码登录
            </span>
          </div>
        </div>

        <!-- 手机号登录 -->
        <div class="form-content" v-if="activeTab === 'phone'">
          <div class="form-item">
            <input 
              type="text" 
              placeholder="请输入手机号"
              v-model="phone"
            >
          </div>
          <div class="form-item">
            <input 
              type="password" 
              placeholder="请输入密码"
              v-model="password"
            >
          </div>
          <button class="login-btn" @click="handleLogin">
            登录
          </button>
        </div>

        <!-- 验证码登录 -->
        <div class="form-content" v-if="activeTab === 'code'">
          <div class="form-item">
            <input 
              type="text" 
              placeholder="请输入手机号"
              v-model="phone"
            >
          </div>
          <div class="form-item code-item">
            <input 
              type="text" 
              placeholder="请输入验证码"
              v-model="code"
            >
            <button 
              class="get-code-btn"
              :disabled="countdown > 0"
              @click="getCode"
            >
              {{ countdown > 0 ? `${countdown}s后重试` : '获取验证码' }}
            </button>
          </div>
          <button class="login-btn" @click="handleCodeLogin">
            登录
          </button>
        </div>

        <!-- 第三方登录 -->
        <div class="other-login">
          <div class="divider">
            <span>其他登录方式</span>
          </div>
          <div class="login-icons">
            <i class="iconfont icon-wechat"></i>
            <i class="iconfont icon-qq"></i>
            <i class="iconfont icon-github"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'phone', // phone | code
      phone: '',
      password: '',
      code: '',
      countdown: 0
    }
  },
  methods: {
    handleLogin() {
      // 处理手机号登录逻辑
    },
    handleCodeLogin() {
      // 处理验证码登录逻辑
    },
    getCode() {
      // 获取验证码逻辑
      this.countdown = 60
      const timer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          clearInterval(timer)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-wrapper {
    width: 900px;
    height: 550px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .login-banner {
    width: 400px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .banner-text {
      position: absolute;
      bottom: 40px;
      left: 30px;
      color: #fff;

      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  .login-form {
    flex: 1;
    padding: 60px 50px;
    background: #fff;

    .form-header {
      margin-bottom: 40px;

      h3 {
        font-size: 24px;
        color: #1d2129;
        margin-bottom: 20px;
      }

      .switch-tabs {
        display: flex;
        border-bottom: 1px solid #e4e6eb;

        .tab-item {
          flex: 1;
          text-align: center;
          padding: 10px 0;
          color: #86909c;
          cursor: pointer;
          transition: all 0.3s;

          &.active {
            color: #1d7dfa;
            border-bottom: 2px solid #1d7dfa;
          }

          &:hover {
            color: #1d7dfa;
          }
        }
      }
    }

    .form-content {
      .form-item {
        margin-bottom: 20px;

        input {
          width: 100%;
          height: 40px;
          padding: 0 15px;
          border: 1px solid #e4e6eb;
          border-radius: 4px;
          outline: none;
          transition: all 0.3s;

          &:focus {
            border-color: #1d7dfa;
          }
        }

        &.code-item {
          display: flex;
          gap: 10px;

          input {
            flex: 1;
          }

          .get-code-btn {
            width: 120px;
            background: #f2f3f5;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;

            &:disabled {
              opacity: 0.6;
              cursor: not-allowed;
            }

            &:hover:not(:disabled) {
              background: #e4e6eb;
            }
          }
        }
      }

      .login-btn {
        width: 100%;
        height: 40px;
        background: #1d7dfa;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .other-login {
      margin-top: 30px;

      .divider {
        position: relative;
        text-align: center;
        color: #86909c;
        margin-bottom: 20px;

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 30%;
          height: 1px;
          background: #e4e6eb;
        }

        &::before {
          left: 0;
        }

        &::after {
          right: 0;
        }
      }

      .login-icons {
        display: flex;
        justify-content: center;
        gap: 20px;

        .iconfont {
          font-size: 24px;
          color: #86909c;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: #1d7dfa;
          }
        }
      }
    }
  }
}
</style>
