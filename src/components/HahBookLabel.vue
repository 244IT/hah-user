<template>
  <div class="label">
    <div 
        class="label-list" 
        v-for="label in labels"
        :key="label.id"
      >
        <div class="label-title">{{ label.title }}</div>
        <div 
          class="label-item"
          :class="{ actived: series.id === activedSeriesId }"
          v-for="series in label.list"
          :key="series.id"
          @click="onSeries(series.id)"
        >
          <div class=label-item-left>
            <img 
              class="label-item-img" 
              :src="series.img" 
            />
          </div>
          <div class="label-item-right">
            <h3 class="title">{{ series.title }}</h3>
            <p class="intro">{{ series.intro }}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      labels: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        activedSeriesId: this.labels[0].id
      }
    },
    methods: {
      onSeries(id) {
        this.activedSeriesId = id
        this.$emit('label', id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.label-list {
  align-self: end;
  padding-right: 6px;
  font-size: 20px;
  font-weight: 900;
  color: #3C4752;
  box-sizing: border-box;
  .actived {
    background-color: rgba(52, 167, 255, .07);
    border: 1px solid #4d6bfe;
  }
}
.label-item {
  position: relative;
  display: flex;
  height: 110px;
  margin: 40px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s;
  box-shadow: 0 1px 3px #EEE;
  &:hover {
    background-color: rgba(52, 167, 255, .07);
    border: 1px solid #4d6bfe;
  }
  &-img {
    width: 91px;
    height: 120px;
    position: relative;
    z-index: 1;
    margin-bottom: 18px;
  }
  &-left {
    width: 109px;
    position: absolute;
    left: 9px;
    bottom: 6px;
    z-index: 0;
    text-align: center;
    &::after {
      content: '';
      width: 100%;
      height: 100px;
      background: url('https://k12-teaching-cdn.unipus.cn/digital-platform/online/k12-digit/static/img/home_bg.3a56119.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 0;
    }
  }
  &-right {
    padding-top: 6px;
    font-weight: 300;
    margin-left: 120px;
    .title {
      display: inline-flex;
      position: relative;
      margin-bottom: 0;
      color: #3C4752;
      font-size: 14px;
      &::after {
        content: '';
        width: 100%;
        height: 7px;
        background: #CCE9FD;
        border-radius: 4px;
        position: absolute;
        bottom: 4px;
        left: 0;
        z-index: -1;
      }
    }
    .intro {
      color: #9EA3A8;
      font-size: 12px;
      line-height: 20px;
      padding-right: 6px;
      max-width: 160px;
      box-sizing: border-box;
    }
  }
}
</style>