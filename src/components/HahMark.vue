<template>
  <div class="hah-mark">
    <ul class="anchor-list">
      <li
        v-for="anchor in anchors"
        :key="anchor.id"
        class="anchor-item"
        @click="scrollTo(anchor.id)"
      >
        {{ anchor.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    anchors: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hah-mark {
  position: sticky;
  top: 20px;

  .anchor-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .anchor-item {
    padding: 8px 12px;
    margin-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f5f5f5;
    }

    &.active {
      background: #e6f7ff;
      color: #1890ff;
    }
  }
}
</style>
