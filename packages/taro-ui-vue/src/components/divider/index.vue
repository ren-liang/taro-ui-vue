<template>
  <view
    :class="classNames('at-divider', className)"
    :style="mergeStyle(rootStyle, customStyle)"
  >
    <view class="at-divider__content" :style="fontStyle">
      <slot>
        {{ content }}
      </slot>
    </view>
    <view class="at-divider__line" :style="lineStyle" />
  </view>
</template>

<script lang="ts">
import AtDivider from './index'
export default AtDivider
</script>
