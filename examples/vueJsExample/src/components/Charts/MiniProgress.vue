<template>
  <div class="chart-mini-progress">
    <div class="target" :style="{ left: target + '%' }">
      <span :style="{ backgroundColor: color }" />
      <span :style="{ backgroundColor: color }" />
    </div>
    <div class="progress-wrapper">
      <div
        class="progress"
        :style="{ backgroundColor: color, width: percentage + '%', height: height }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniProgress',
  props: {
    target: {
      type: Number,
      default: 0,
    },
    height: {
      type: String,
      default: '10px',
    },
    color: {
      type: String,
      default: '#13C2C2',
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
.chart-mini-progress {
  position: relative;
  width: 100%;
  padding: 5px 0;

  .target {
    position: absolute;
    top: 0;
    bottom: 0;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 4px;
      border-radius: 100px;

      &:last-child {
        top: auto;
        bottom: 0;
      }
    }
  }
  .progress-wrapper {
    position: relative;
    background-color: #f5f5f5;

    .progress {
      width: 0;
      height: 100%;
      background-color: #1890ff;
      border-radius: 1px 0 0 1px;
      transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    }
  }
}
</style>
