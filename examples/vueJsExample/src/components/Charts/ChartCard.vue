<template>
  <a-card :loading="loading" :body-style="{ padding: '20px 24px 8px' }" :bordered="false">
    <div class="chart-card-header">
      <div class="meta">
        <span class="chart-card-title">
          <slot name="title">
            {{ title }}
          </slot>
        </span>
        <span class="chart-card-action">
          <slot name="action"></slot>
        </span>
      </div>
      <div class="total">
        <slot name="total">
          <span>{{ (typeof total === 'function' && total()) || total }}</span>
        </slot>
      </div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <slot></slot>
      </div>
    </div>
    <div class="chart-card-footer">
      <div class="field">
        <slot name="footer"></slot>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ChartCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    total: {
      type: [Function, Number, String],
      required: false,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.chart-card-header {
  position: relative;
  width: 100%;
  overflow: hidden;

  .meta {
    position: relative;
    width: 100%;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
  }
}

.chart-card-action {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.chart-card-footer {
  margin-top: 8px;
  padding-top: 9px;
  border-top: 1px solid #e8e8e8;

  > * {
    position: relative;
  }

  .field {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.chart-card-content {
  position: relative;
  width: 100%;
  height: 46px;
  margin-bottom: 12px;

  .content-fix {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

.total {
  height: 38px;
  margin-top: 4px;
  margin-bottom: 0;
  overflow: hidden;
  color: #000;
  font-size: 30px;
  line-height: 38px;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
</style>
