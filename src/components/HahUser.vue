<template>
  <div class="hah-user">
    <a-avatar :size="64" icon="user" />
    <div class="hah-user-tip">
      <a-icon type="info-circle" />
      您还未登录！
    </div>
    <a-button type="primary" ghost>马上登录</a-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.hah-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-shadow: 0 1px 3px $border-color;
  &-tip {
    margin: 20px 0;
  }
}
</style>
