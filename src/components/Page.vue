<template lang="html">
  <div class="page">
    <slot/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
