<template>
  <div class="tab">
    <div 
      class="tab-item"
      :class="{ actived: activedTabId === item.id }"
      v-for="item in tabs"
      :key="item.id"
      @click="onTab(item.id)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      activedTabId: this.tabs[0].id
    }
  },
  methods: {
    onTab(id) {
      this.activedTabId = id
      this.$emit('tab', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  padding: 0 10px;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-shadow: 0 1px 3px $border-color;
  &-item {
    padding: 0 20px;
    line-height: 40px;
    cursor: pointer;
    
    &.actived {
      position: relative;
      color: $primary-color;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        height: 2px;
        width: 8px;
        margin: 0 auto;
        background-color: $primary-color;
        border-radius: 1px;
      }
    }
  }
}
</style>
