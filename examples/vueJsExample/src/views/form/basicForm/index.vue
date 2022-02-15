<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false" :content="$t('form.basic-form.basic.description')">
    <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          :label="$t('form.basic-form.title.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: $t('form.basic-form.title.required') }] },
            ]"
            name="name"
            :placeholder="$t('form.basic-form.title.placeholder')"
          />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.date.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-range-picker
            v-decorator="[
              'buildTime',
              { rules: [{ required: true, message: $t('form.basic-form.date.required') }] },
            ]"
            name="buildTime"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.goal.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-textarea
            v-decorator="[
              'description',
              { rules: [{ required: true, message: $t('form.basic-form.goal.required') }] },
            ]"
            rows="4"
            :placeholder="$t('form.basic-form.goal.placeholder')"
          />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.standard.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-textarea
            v-decorator="[
              'type',
              { rules: [{ required: true, message: $t('form.basic-form.standard.required') }] },
            ]"
            rows="4"
            :placeholder="$t('form.basic-form.standard.placeholder')"
          />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.client.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-input
            v-decorator="[
              'customer',
              { rules: [{ required: true, message: $t('form.basic-form.client.required') }] },
            ]"
            :placeholder="$t('form.basic-form.client.placeholder')"
          />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.invites.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
          :required="false"
        >
          <a-input :placeholder="$t('form.basic-form.invites.placeholder')" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.weight.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
          :required="false"
        >
          <a-input-number :min="0" :max="100" />
          <span>%</span>
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.public.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
          :required="false"
          :help="$t('form.basic-form.label.help')"
        >
          <a-radio-group v-decorator="['target', { initialValue: 1 }]">
            <a-radio :value="1">{{ $t('form.basic-form.radio.public') }}</a-radio>
            <a-radio :value="2">{{ $t('form.basic-form.radio.partially-public') }}</a-radio>
            <a-radio :value="3">{{ $t('form.basic-form.radio.private') }}</a-radio>
          </a-radio-group>
          <a-form-item v-show="form.getFieldValue('target') === 2">
            <a-select mode="multiple">
              <a-select-option value="4">{{ $t('form.basic-form.option.A') }}</a-select-option>
              <a-select-option value="5">{{ $t('form.basic-form.option.B') }}</a-select-option>
              <a-select-option value="6">{{ $t('form.basic-form.option.C') }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
          <a-button htmlType="submit" type="primary">
            {{ $t('form.basic-form.form.submit') }}
          </a-button>
          <a-button style="margin-left: 8px">{{ $t('form.basic-form.form.save') }}</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  name: 'BaseForm',
  data() {
    return {
      form: this.$form.createForm(this),
    };
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
