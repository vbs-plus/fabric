<template>
  <div class="account-settings-info-view">
    <a-row :gutter="16" type="flex" justify="center">
      <a-col :order="isMobile ? 2 : 1" :md="24" :lg="16">
        <a-form layout="vertical">
          <a-form-item :label="$t('account.settings.basic.nickname')">
            <a-input :placeholder="$t('account.settings.basic.nickname-message')" />
          </a-form-item>
          <a-form-item :label="$t('account.settings.basic.profile')">
            <a-textarea rows="4" :placeholder="$t('account.settings.basic.profile-message')" />
          </a-form-item>

          <a-form-item :label="$t('account.settings.basic.email')" :required="false">
            <a-input placeholder="example@ant.design" />
          </a-form-item>

          <a-form-item>
            <a-button type="primary">{{ $t('account.settings.basic.update') }}</a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :order="1" :md="24" :lg="8" :style="{ minHeight: '180px' }">
        <div class="ant-upload-preview" @click="$refs.modal.edit(1)">
          <a-icon type="cloud-upload-o" class="upload-icon" />
          <div class="mask">
            <a-icon type="plus" />
          </div>
          <img :src="option.img" />
        </div>
      </a-col>
    </a-row>

    <avatar-modal ref="modal" @ok="setavatar" />
  </div>
</template>

<script>
import AvatarModal from './AvatarModal';
import { baseMixin } from '@/store/app-mixin';

export default {
  components: {
    AvatarModal,
  },
  mixins: [baseMixin],
  data() {
    return {
      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1],
      },
    };
  },
  methods: {
    setavatar(url) {
      this.option.img = url;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-upload-wrapper {
  width: 100%;
  height: 200px;
}

.ant-upload-preview {
  position: relative;
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;

  .upload-icon {
    position: absolute;
    top: 0;
    right: 10px;
    padding: 0.5rem;
    font-size: 1.4rem;
    background: rgba(222, 221, 221, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  .mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -1rem;
      margin-left: -1rem;
      color: #d6d6d6;
      font-size: 2rem;
    }
  }

  img,
  .mask {
    width: 100%;
    max-width: 180px;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }
}
</style>
