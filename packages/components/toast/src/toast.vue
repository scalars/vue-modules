<template>
  <div
    class="toast-container"
    :style="styles"
    :class="{ animate: show && isMounted }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    positionType: {
      default: "absolute"
    },
    position: {
      default: () => ({
        top: "0",
        left: "0"
      })
    },
    time: {
      type: Number,
      default: 5
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      styles: {
        position: this.positionType,
        ...this.position
      },
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss">
.toast-container {
  --bgColor: rgba(0, 0, 0, 0.8);
  --borderRadius: 2px;
  --animationTime: 100ms;
  background-color: var(--bgColor);
  color: #fff;
  z-index: 100;
  padding: 10px;
  font-family: sans-serif;
  border-radius: var(--borderRadius);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  opacity: 0;
  margin: 10px;
  transition: opacity var(--animationTime) linear;

  &.animate {
    opacity: 1;
  }
}
</style>
