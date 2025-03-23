<template>
  <div class="images">
    <div 
      class="image-container" 
      :style="{ width: containerWidth }"
      ref="imageContainer"
    >
      <img 
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="content-image"
        @click="handleImageClick(index)"
      />
    </div>
    <HahImagePreview 
      ref="imagePreview"
      :images="images"
    />
    <div 
      class="images-arrow left"
      v-if="showArrow"
      @click="handleArrowClick('left')"
    >
      <i class="iconfont icon-arrow-left-bold"></i>
    </div>
    <div 
      class="images-arrow right"
      v-if="showArrow"
      @click="handleArrowClick('right')"
    >
      <i class="iconfont icon-arrow-right-bold"></i>
    </div>
  </div>
</template>

<script>
import HahImagePreview from './HahImagePreview.vue'

export default {
  components: {
    HahImagePreview
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    postId: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    handleImageClick(index) {
      this.$refs.imagePreview.open(index)
    },
    handleArrowClick(direction) {
      const container = this.$refs.imageContainer;
      const scrollAmount = 128; // 每次滚动一张图片的宽度
      const newScrollLeft = direction === 'right' 
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;
        
      // 限制滚动范围
      const maxScroll = container.scrollWidth - container.clientWidth;
      const finalScroll = Math.max(0, Math.min(newScrollLeft, maxScroll));
      
      container.scrollTo({
        left: finalScroll,
        behavior: 'smooth'
      });
    }
  },
  computed: {
    containerWidth() {
      const count = Math.min(this.images.length, 3);
      return `calc(${count * 120}px + 16px)`;
    },
    showArrow() {
      return this.images.length > 3;
    }
  }
}
</script>

<style lang="scss" scoped>
  .images {
    position: relative;
    width: auto;
    margin-top: 12px;
    display: inline-flex;
    .image-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none; /* Firefox */
      padding: 0; /* 为箭头留出空间 */
      scroll-padding: 0 32px;
      &::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
      }
    }

  .content-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    flex-shrink: 0;
    margin-right: 8px;
    scroll-snap-align: start;
    &:hover {
      transform: scale(1.05);
    }
  }

  .images-arrow {
    width: 24px;
    height: 24px;
    background: rgba($text-color-primary, 0.5);
    border-radius: 50%;
    cursor: pointer;
    color: $bg-color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    padding: 0;
    transform: translateY(-50%);
    transition: background 0.2s ease;
    z-index: 1;
    
    &.left {
      left: 0;
    }
    
    &.right {
      right: 0;
    }
    
    &:hover {
      background: rgba($text-color-primary, 0.8);
      transform: translateY(-50%) scale(1.1);
    }
  }
}
</style>
