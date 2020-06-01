import { View } from '@tarojs/components'
import classNames from 'classnames'
import { mergeStyle, pxTransform } from '../../utils/common'

export default {
  name: 'AtDivider',
  props: {
    content: {
      type: String,
      default: '',
    },
    height: {
      type: [Number, String],
      default: 0,
    },
    fontColor: {
      type: String,
      default: '',
    },
    fontSize: {
      type: [Number, String],
      default: 0,
    },
    lineColor: {
      type: String,
      default: '',
    },
    className: {
      type: [Object, String],
      default: () => {},
    },
  },
  render() {
    const { className, customStyle, content, height, fontColor, fontSize, lineColor } = this

    const rootStyle = {
      height: height ? `${pxTransform(Number(height))}` : '',
    }

    const fontStyle = {
      color: fontColor,
      'font-size': fontSize ? `${pxTransform(Number(fontSize))}` : '',
    }

    const lineStyle = {
      backgroundColor: lineColor,
    }

    return (
      <View class={classNames('at-divider', className)} style={mergeStyle(rootStyle, customStyle)}>
        <View class="at-divider__content" style={fontStyle}>
          {content === '' ? this.$slots.default : content}
        </View>
        <View class="at-divider__line" style={lineStyle}></View>
      </View>
    )
  },
}
