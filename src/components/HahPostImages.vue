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
      />
    </div>
    <div 
      class="arrow"
      v-if="showArrow"
      @click="handleArrowClick"
    >
      <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>
export default {
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
  computed: {
    containerWidth() {
      const count = Math.min(this.images.length, 3);
      return `${count * 128}px`;
    },
    showArrow() {
      return this.images.length > 3;
    }
  },
  methods: {
    handleArrowClick() {
      const container = this.$refs.imageContainer;
      const scrollAmount = 128; // 每次滚动一张图片的宽度
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  position: relative;
  display: flex;
  overflow: hidden;
  
  .image-container {
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  img {
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

  .arrow {
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
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    
    &:hover {
      background: rgba($text-color-primary, 0.7);
    }
  }
}
</style>
