<template>
  <div class="rank">
    <h4 class="title">{{ title }}</h4>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list">
        <span :class="index < 3 ? 'active' : null">{{ index + 1 }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RankList',
  // ['title', 'list']
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
.rank {
  padding: 0 32px 32px 72px;

  .list {
    margin: 25px 0 0;
    padding: 0;
    list-style: none;

    li {
      margin-top: 16px;

      span {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;

        &:first-child {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 24px;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          background-color: #f5f5f5;
          border-radius: 20px;
        }
        &.active {
          color: #fff;
          background-color: #314659;
        }
        &:last-child {
          float: right;
        }
      }
    }
  }
}

.mobile .rank {
  padding: 0 32px 32px 32px;
}
</style>
