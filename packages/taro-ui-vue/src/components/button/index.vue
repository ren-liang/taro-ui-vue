<template>
  <view
    :class="classNames(rootClassName, classObject, className)"
    :style="customStyle"
    @tap="handelOnClick"
    @click="handelOnClick"
  >
    <button
      v-if="isWEB && !disabled"
      class="at-button__wxbutton"
      :lang="lang"
      :formType="
        formType === 'submit' || formType === 'reset' ? formType : undefined
      "
    />
    <form
      v-if="isWEAPP && !disabled"
      @submit="handleSubmit"
      @reset="handleReset"
    >
      <button
        class="at-button__wxbutton"
        :formType="formType"
        :openType="openType"
        :lang="lang"
        :sessionFrom="sessionFrom"
        :sendMessageTitle="sendMessageTitle"
        :sendMessagePath="sendMessagePath"
        :sendMessageImg="sendMessageImg"
        :showMessageCard="showMessageCard"
        :appParameter="appParameter"
        @getUserInfo="handelOnGetUserInfo"
        @getPhoneNumber="handelOnGetPhoneNumber"
        @openSetting="handelOnOpenSetting"
        @error="handelOnError"
        @contact="handelOnContact"
      />
    </form>
    <button
      v-if="isALIPAY && !disabled"
      class="at-button__wxbutton"
      :formType="formType"
      :openType="openType"
      :lang="lang"
      :sessionFrom="sessionFrom"
      :sendMessageTitle="sendMessageTitle"
      :sendMessagePath="sendMessagePath"
      :sendMessageImg="sendMessageImg"
      :showMessageCard="showMessageCard"
      :appParameter="appParameter"
      @getUserInfo="onGetUserInfo"
      @getPhoneNumber="onGetPhoneNumber"
      @openSetting="onOpenSetting"
      @error="onError"
      @contact="onContact"
    />
    <view v-if="loading" class="at-button__icon">
      <AtLoading :color="loadingColor" :size="loadingSize" />
    </view>
    <view class="at-button__text">
      <slot />
    </view>
  </view>
</template>

<script>
import AtLoading from '../loading/index.vue'
import AtButton from './index'
export default {
  name: 'AtButton',
  components: {
    AtLoading,
  },
  mixins: [AtButton],
}
</script>
