<template>
  <div class="app-list">
    <a-list :grid="{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }" :dataSource="dataSource">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :hoverable="true">
          <a-card-meta>
            <div slot="title" style="margin-bottom: 3px">{{ item.title }}</div>
            <a-avatar slot="avatar" class="card-avatar" :src="item.avatar" size="small" />
            <div slot="description" class="meta-cardInfo">
              <div>
                <p>活跃用户</p>
                <p>
                  <span>
                    {{ item.activeUser }}
                    <span>万</span>
                  </span>
                </p>
              </div>
              <div>
                <p>新增用户</p>
                <p>{{ item.newUser | NumberFormat }}</p>
              </div>
            </div>
          </a-card-meta>
          <template slot="actions">
            <div class="ant-card-actions">
              <a>
                <a-icon type="download" />
              </a>
              <a>
                <a-icon type="edit" />
              </a>
              <a>
                <a-icon type="share-alt" />
              </a>
              <a>
                <a-dropdown>
                  <a class="ant-dropdown-link" href="javascript:;">
                    <a-icon type="ellipsis" />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </a>
            </div>
          </template>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const dataSource = [];
for (let i = 0; i < 11; i++) {
  dataSource.push({
    title: 'Alipay',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    activeUser: 17,
    newUser: 1700,
  });
}

export default {
  name: 'Article',
  components: {},
  data() {
    return {
      dataSource,
    };
  },
};
</script>

<style lang="less" scoped>
.app-list {
  .meta-cardInfo {
    margin-top: 16px;
    zoom: 1;

    > div {
      position: relative;
      float: left;
      width: 50%;
      text-align: left;

      p {
        margin: 0;
        font-size: 24px;
        line-height: 32px;

        &:first-child {
          margin-bottom: 4px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
