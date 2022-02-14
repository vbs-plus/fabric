<script>
const googleAdsUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
export default {
  props: {
    isMobile: Boolean,
  },
  // watch: {
  //   $route (e, t) {
  //     const adId = '#adsbygoogle'
  //     // if(isGitee) {
  //     //   adId = '#cf';
  //     // }
  //     if (e.path !== t.path && this.$el.querySelector(adId)) {
  //       this.$el.innerHTML = ''
  //       this.load()
  //     }
  //     this.adInterval && clearInterval(this.adInterval)
  //     this.adInterval = setInterval(() => {
  //       if (!this.$el.querySelector(adId)) {
  //         this.$el.innerHTML = ''
  //         this.load()
  //       }
  //     }, 20000)
  //   }
  // },
  mounted() {
    // this.load()
  },
  methods: {
    load() {
      if (googleAdsUrl) {
        /* eslint-disable */
        let adsbygoogle = [];
        const e = document.createElement('script');
        e.id = '_adsbygoogle_js';
        e.src = googleAdsUrl;
        this.$el.appendChild(e);
        setTimeout(() => {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }, 2000);
      }
    },
  },
  render() {
    return (
      <div class="business-pro-ad">
        <a href="https://store.antdv.com/pro/" target="_blank">
          (推荐) 企业级商用版 Admin Pro 现已发售，采用 Vue3 + TS 欢迎购买。
        </a>
      </div>
    );
  },
};
</script>

<style lang="less" scoped>
.business-pro-ad {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 258px;
  height: 48px;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.25);
}
</style>
