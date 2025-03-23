<template>
  <transition name="fade">
    <div class="image-preview" v-if="visible" @click.self="close">
      <div class="preview-content">
        <img :src="currentImage" class="preview-image" />
        <div class="close-btn" @click="close">
          <i class="iconfont icon-close"></i>
        </div>
        <div class="arrow left" @click="prev">
          <i class="iconfont icon-arrow-left-bold"></i>
        </div>
        <div class="arrow right" @click="next">
          <i class="iconfont icon-arrow-right-bold"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false,
      currentIndex: this.initialIndex
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    }
  },
  methods: {
    open(index) {
      this.currentIndex = index
      this.visible = true
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.visible = false
      document.body.style.overflow = ''
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  }
}
</script>

<style lang="scss" scoped>
.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  .preview-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  .preview-image {
    width: 60vh;
    height: 60vh;
    object-fit: contain;
    border-radius: 4px;
  }

  .close-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: scale(1.1);
    }

    .iconfont {
      color: #fff;
      font-size: 18px;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
      transform: translateY(-50%) scale(1.1);
    }

    &.left {
      left: -60px;
    }

    &.right {
      right: -60px;
    }

    .iconfont {
      color: #fff;
      font-size: 24px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
